# Iconography

BESOQ uses icons sparingly. The system is small and consistent. Icons are tools for clarity — never decoration.

---

## Principles

1. **An icon must replace a word that would be longer.** If the word is short, use the word.
2. **All icons share a single grid, weight, and corner treatment.** No mixed icon families.
3. **No icon may carry colour.** All icons are monochrome.
4. **No icon may be larger than 24px in product UI** (or 6mm in print).

---

## The grid

All icons are drawn on a **24×24** grid. The live area inside the grid is **20×20**, with a 2-unit clear margin on all sides. Stroke weight is **1.5 units**, consistent across the entire set. Corners are **square** — never rounded.

```
┌─────────────────────────┐
│ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ │   ← 2u clear margin
│ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ │
│ ░ ░ ╔═════════════╗ ░ ░ │
│ ░ ░ ║             ║ ░ ░ │
│ ░ ░ ║             ║ ░ ░ │
│ ░ ░ ║   live      ║ ░ ░ │   ← 20u live area
│ ░ ░ ║             ║ ░ ░ │
│ ░ ░ ║             ║ ░ ░ │
│ ░ ░ ╚═════════════╝ ░ ░ │
│ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ │
│ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ │
└─────────────────────────┘
              24u
```

---

## The set

The system has 12 icons. There is no thirteenth. New icons require explicit additions to this document.

| # | Icon | Use |
|---|---|---|
| 01 | search | Site search |
| 02 | account | User menu |
| 03 | bag | Cart |
| 04 | wishlist | Saved items (a circle, not a heart) |
| 05 | menu | Mobile navigation |
| 06 | close | Dismiss / close modal |
| 07 | arrow | Right-pointing only; flipped for left |
| 08 | check | Confirmation |
| 09 | minus | Quantity / collapse |
| 10 | plus | Quantity / expand |
| 11 | external | External link |
| 12 | care | The repair service icon — a small needle and thread |

### Notes on specific icons

- **wishlist (04)** — drawn as an unfilled circle, not a heart. The heart is sentimental; the circle is a place-holder, an outline of intent. This is a deliberate brand decision.
- **close (06)** — drawn as a single `×`, not as a minus inside a circle. No container.
- **care (12)** — the only icon with a slightly poetic form: a needle and a thread. It signals the brand's repair service.

---

## Construction rules

1. **Stroke only.** No icon is drawn with fills. All icons are pure stroke at 1.5u.
2. **Square corners.** All terminations are square. No rounded caps.
3. **Optical alignment.** Icons are optically centred on their bounding box, even when geometrically off — a triangle, for example, sits one unit lower than centre to *look* centred.
4. **No anti-aliasing tricks.** Icons must remain crisp at 16px and 24px. They are not designed for sub-16px use.
5. **No filled or "active" variants.** A selected nav item is shown by underline, not by switching the icon to a filled state.

---

## Forbidden iconography

- ❌ Pictogram-heavy icons (e.g., a literal padlock for security).
- ❌ Coloured icons.
- ❌ Multi-stroke icons (two stroke weights in one icon).
- ❌ Icon with a circular background.
- ❌ Icon with a tooltip animation.
- ❌ Branded "BESOQ leaf" or "BESOQ flame" — we do not have a mascot, including a tiny one.
- ❌ Replacing a word that is two or fewer characters with an icon (the word is already shorter).

---

## Care symbols (laundry)

For care labels on garments and care cards, BESOQ uses the **standard ISO 3758 care symbols** — not custom-drawn ones. These are universal, regulated, and respected by laundries worldwide. They are reproduced inside the inner garment label at 4mm height.

The ISO symbols are drawn in BESOQ's own line weight to match the system, but their shapes are unchanged.

---

## Implementation

Icons are stored as individual SVGs in `brand/assets/icons/` and exported in two sizes: 16 and 24. The export is sprite-friendly:

```
brand/assets/icons/
├── 16/
│   ├── search.svg
│   ├── account.svg
│   ├── bag.svg
│   ├── ...
└── 24/
    ├── search.svg
    ├── account.svg
    ├── bag.svg
    ├── ...
```

In product code, icons are referenced by name from a single `<Icon name="bag" />` component. Hard-coded SVG markup in templates is forbidden (it leads to drift and accidental colour changes).
