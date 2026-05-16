# Icons

The complete BESOQ icon system — 12 icons, no thirteenth.

For specifications and rules, see `brand/03-visual/05-iconography.md`.

---

## The set

| File | Icon | Use |
|---|---|---|
| `search.svg`   | search   | Site search |
| `account.svg`  | account  | User menu |
| `bag.svg`      | bag      | Cart |
| `wishlist.svg` | wishlist | Saved items (a circle, not a heart) |
| `menu.svg`     | menu     | Mobile navigation |
| `close.svg`    | close    | Dismiss / close modal |
| `arrow.svg`    | arrow    | Right-pointing only; flip for left |
| `check.svg`    | check    | Confirmation |
| `minus.svg`    | minus    | Quantity decrement / collapse |
| `plus.svg`     | plus     | Quantity increment / expand |
| `external.svg` | external | External link |
| `care.svg`     | care     | The repair service icon |

---

## Sizes

Each icon is provided in two sizes:

```
icons/
├── 16/   ← 16×16 viewBox, 1px stroke
└── 24/   ← 24×24 viewBox, 1.5px stroke
```

A single icon component in product code should pick the correct size by the rendered visual size. Below 16px is unsupported.

---

## Construction

All icons are:
- **Stroke-only** (no fills, except the 0.6r dot in `care`).
- **`stroke="currentColor"`** — they inherit the text colour of their context.
- **Square caps and miter joins.** No rounded ends.
- **Optically aligned**, not mathematically centred, where the shape demands.

---

## Usage in product code

The recommended pattern is a single React/Vue/Svelte `<Icon name="bag" size={24} />` component that loads the appropriate SVG. Inline SVG markup in templates is discouraged.

If you must reference inline:

```html
<svg width="24" height="24" aria-hidden="true">
  <use href="/assets/icons/24/bag.svg#bag"></use>
</svg>
```

The `aria-hidden="true"` is correct only when the icon accompanies a text label. If the icon stands alone, replace with `role="img" aria-label="bag"`.

---

## Forbidden

- ❌ Adding a 13th icon without a documented design review.
- ❌ Filled variants of the icons.
- ❌ Coloured icons.
- ❌ Icons inside circular containers.
- ❌ Replacing a 2-character word with an icon.

The full forbidden list is in `brand/03-visual/05-iconography.md`.
