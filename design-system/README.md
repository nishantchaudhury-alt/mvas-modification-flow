# MVAS Booking Modification design foundation

This prototype uses the shared MVAS Booking Flow visual language. The local source of truth is [`tokens.css`](tokens.css), loaded before `styles.css`.

## Usage rules

- Build new styles with component tokens first (`--ds-button-*`, `--ds-field-*`, `--ds-card-*`, `--ds-dialog-*`).
- Use semantic tokens (`--ds-color-*`, `--ds-type-*`, `--ds-space-*`) only when no component contract fits.
- Keep `#1B2434` as the sole general interaction color. The red/coral navigation colors are limited to the branded shell.
- Reserve green, amber, and red for success, warning, and error/destructive meaning.
- Keep layout spacing on the 4px scale, controls at 6px radius, cards at 8px, and panels at 10px.
- Use only the loaded font weights: 400, 500, 600, and 700.
- Use the semantic type scale instead of component-local pixel sizes. Compact
  labels and metadata never render below 12px; compact body copy uses 13px;
  standard body and controls use 14px; headings use the shared 16–24px roles.
- Keep body copy at a unitless or tokenized line height of at least 1.4, allow
  essential text to wrap, and never use a fixed height to clip meaningful text.
- Preserve visible focus states and pair status colors with text or another non-color cue.

The `--mvas-*` variables at the top of `styles.css` are compatibility aliases for existing prototype styles. New work should use `--ds-*` tokens directly.

## Checks

Run both checks after visual changes:

```bash
node scripts/check-spacing-grid.mjs
node scripts/check-design-system.mjs
node scripts/check-typography-accessibility.mjs
```
