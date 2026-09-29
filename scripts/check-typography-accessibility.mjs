import fs from "node:fs";

const root = new URL("../", import.meta.url);
const files = {
  tokens: new URL("design-system/tokens.css", root),
  styles: new URL("styles.css", root),
  portableSource: new URL("AssignStateroom.portable.jsx", root),
  portableBuild: new URL("AssignStateroom.portable.js", root),
  html: new URL("index.html", root),
};

const source = Object.fromEntries(
  Object.entries(files).map(([key, url]) => [key, fs.readFileSync(url, "utf8")]),
);
const failures = [];

function reportSmallSizes(label, text, pattern) {
  for (const match of text.matchAll(pattern)) {
    const size = Number(match[1]);
    if (size < 12) failures.push(`${label}: font size ${size}px is below the 12px compact-text minimum`);
  }
}

reportSmallSizes("styles.css", source.styles, /font-size\s*:\s*(\d+(?:\.\d+)?)px/g);
reportSmallSizes("AssignStateroom.portable.jsx", source.portableSource, /fontSize\s*:\s*(\d+(?:\.\d+)?)(?=\s*[,}])/g);
reportSmallSizes("AssignStateroom.portable.js", source.portableBuild, /fontSize\s*:\s*(\d+(?:\.\d+)?)(?=\s*[,}])/g);

const allowedWeights = new Set([400, 500, 600, 700]);
for (const [label, text] of [
  ["styles.css", source.styles],
  ["AssignStateroom.portable.jsx", source.portableSource],
  ["AssignStateroom.portable.js", source.portableBuild],
]) {
  const pattern = label === "styles.css"
    ? /font-weight\s*:\s*(\d+)/g
    : /fontWeight\s*:\s*(\d+)(?=\s*[,}])/g;
  for (const match of text.matchAll(pattern)) {
    const weight = Number(match[1]);
    if (!allowedWeights.has(weight)) failures.push(`${label}: unsupported font weight ${weight}`);
  }
}

for (const token of [
  "--ds-type-caption-size",
  "--ds-type-body-sm-size",
  "--ds-type-body-size",
  "--ds-type-section-title-size",
  "--ds-type-page-title-size",
  "--ds-type-value-lg-size",
]) {
  if (!source.tokens.includes(`${token}:`)) failures.push(`Missing semantic typography token ${token}`);
}

if (!source.styles.includes("button:focus-visible") || !source.styles.includes("outline:var(--ds-focus-width)")) {
  failures.push("Global visible keyboard focus treatment is missing");
}
if (!source.html.includes('class="skip-link"') || !source.html.includes('id="mainContent"')) {
  failures.push("Skip link and main-content target are required");
}
if (/class="nav-(?:item|child)[^"]*"[^>]*tabindex="0"/.test(source.html)) {
  failures.push("Inert sidebar destinations must not appear in the keyboard tab order");
}

const variables = new Map();
for (const match of source.tokens.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) variables.set(match[1], match[2].trim());

function resolveColor(name, seen = new Set()) {
  if (seen.has(name)) return null;
  seen.add(name);
  const value = variables.get(name);
  if (!value) return null;
  const reference = value.match(/^var\((--[\w-]+)\)$/);
  if (reference) return resolveColor(reference[1], seen);
  return /^#[0-9a-f]{6}$/i.test(value) ? value : null;
}

function rgb(hex) {
  const value = Number.parseInt(hex.slice(1), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function luminance(hex) {
  const channels = rgb(hex).map((channel) => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(foreground, background) {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

const contrastPairs = [
  ["--ds-color-text-primary", "--ds-color-surface"],
  ["--ds-color-text-secondary", "--ds-color-surface"],
  ["--ds-color-text-label", "--ds-color-surface"],
  ["--ds-color-text-muted", "--ds-color-surface"],
  ["--ds-color-on-action", "--ds-color-action"],
  ["--ds-color-success-text", "--ds-color-success-bg"],
  ["--ds-color-warning-text", "--ds-color-warning-bg"],
  ["--ds-color-danger-text", "--ds-color-danger-bg"],
  ["--ds-color-info-text", "--ds-color-info-bg"],
];

for (const [foregroundToken, backgroundToken] of contrastPairs) {
  const foreground = resolveColor(foregroundToken);
  const background = resolveColor(backgroundToken);
  if (!foreground || !background) {
    failures.push(`Unable to resolve contrast pair ${foregroundToken} on ${backgroundToken}`);
    continue;
  }
  const ratio = contrast(foreground, background);
  if (ratio < 4.5) failures.push(`${foregroundToken} on ${backgroundToken} is ${ratio.toFixed(2)}:1; requires 4.5:1`);
}

const portableMutedText = source.portableSource.match(/inkFaint:\s*['"](#[0-9a-f]{6})['"]/i)?.[1];
if (!portableMutedText || contrast(portableMutedText, "#FFFFFF") < 4.5) {
  failures.push("Portable stateroom muted text must meet 4.5:1 contrast on white");
}

if (failures.length) {
  console.error("Typography accessibility check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log("Typography accessibility check passed: minimum sizes, supported weights, focus visibility, skip navigation, and semantic contrast pairs are valid.");
}
