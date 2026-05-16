# Design tokens

Implementation-ready tokens that translate the brand's visual system into code. These files are the single source of truth for product engineering — never hardcode colour, type, or spacing values; always reference a token.

---

## What lives here

| File | Format | Use |
|---|---|---|
| `tokens.json` | JSON | Cross-platform source of truth. Designers and engineers consume from here. |
| `tokens.css` | CSS custom properties | Web — dropped into the global stylesheet. |
| `colors.css` | CSS | Colour system in isolation, importable. |
| `typography.css` | CSS | Typography system in isolation. |
| `spacing.css` | CSS | Spacing scale + container widths. |
| `motion.css` | CSS | Easings, durations, reduced-motion handler. |
| `tailwind.preset.js` | JavaScript | Tailwind CSS preset for the design system. |
| `index.css` | CSS | Single-file import that bundles all above. |

---

## How to use

### In a vanilla CSS project

```css
@import url("./brand/07-tokens/index.css");

.button {
  background: var(--besoq-color-ash);
  color: var(--besoq-color-bone);
  font-family: var(--besoq-font-sans);
  padding: var(--besoq-space-3) var(--besoq-space-5);
  transition: opacity var(--besoq-duration-fast) var(--besoq-ease-out);
}
```

### In a Tailwind project

```js
// tailwind.config.js
import besoqPreset from "./brand/07-tokens/tailwind.preset.js";

export default {
  presets: [besoqPreset],
  content: ["./src/**/*.{html,js,ts,tsx,vue}"],
};
```

### From JSON (any platform)

```js
import tokens from "./brand/07-tokens/tokens.json";

const ash = tokens.color.ash.value;       // "#1A1A1A"
const bodySize = tokens.font.size.base.value; // "16px"
```

---

## Versioning

These tokens are versioned with the brand system. The current version is `v1.0`. Breaking changes (renamed tokens, removed tokens, changed values) require a major version bump and a `CHANGELOG.md` entry.

---

## Naming convention

All token names use the prefix `besoq-` to avoid collisions with other systems and to keep the brand visible in the codebase.

```
--besoq-color-ash
--besoq-font-sans
--besoq-space-3
--besoq-duration-fast
```

The naming follows `category-name-variant` order, kebab-cased.

---

## Forbidden in product code

- ❌ Hardcoded hex values.
- ❌ Hardcoded pixel values for spacing.
- ❌ Hardcoded font-family strings.
- ❌ Importing from a non-tokens file for a colour or type value.

If a value is needed that does not exist in the tokens, it is a token system gap — file an issue, do not work around it.
