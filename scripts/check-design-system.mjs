import fs from "node:fs";

const root = new URL("../", import.meta.url);
const tokenPath = new URL("design-system/tokens.css", root);
const stylesheetPath = new URL("styles.css", root);
const htmlPath = new URL("index.html", root);

const tokens = fs.readFileSync(tokenPath, "utf8");
const stylesheet = fs.readFileSync(stylesheetPath, "utf8");
const html = fs.readFileSync(htmlPath, "utf8");
const failures = [];

const requiredTokens = [
  "--ds-color-action",
  "--ds-color-canvas",
  "--ds-color-surface",
  "--ds-field-border",
  "--ds-card-radius",
  "--ds-dialog-shadow",
  "--ds-type-family-body",
  "--ds-motion-base",
];

for (const token of requiredTokens) {
  if (!tokens.includes(`${token}:`)) failures.push(`Missing required token ${token}`);
}

const tokenLink = html.indexOf('href="design-system/tokens.css');
const stylesheetLink = html.indexOf('href="styles.css');
if (tokenLink < 0 || stylesheetLink < 0 || tokenLink > stylesheetLink) {
  failures.push("index.html must load design-system/tokens.css before styles.css");
}

const aliasBlock = stylesheet.match(/^:root\{([\s\S]*?)\n\}/)?.[1] ?? "";
for (const line of aliasBlock.split("\n")) {
  if (line.startsWith("--mvas-") && !line.includes("var(--ds-") && !line.includes("sidebar")) {
    failures.push(`Legacy alias must resolve through the shared foundation: ${line.trim()}`);
  }
}

if (failures.length) {
  console.error("Design-system foundation check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log("Design-system foundation check passed: shared tokens load first and compatibility aliases resolve through them.");
}
