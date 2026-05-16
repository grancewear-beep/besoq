# Brand assets — manifest

The production-ready visual artefacts of the BESOQ brand system. Every file is hand-built SVG, vector-clean, and versioned with the brand system (currently `v1.0`).

---

## Directory structure

```
assets/
├── README.md                          ← this file
├── wordmarks/
│   ├── besoq-wordmark.svg             ← primary, lowercase, ash on transparent
│   ├── besoq-wordmark-on-dark.svg     ← lowercase, bone on ash
│   ├── besoq-wordmark-editorial.svg   ← uppercase, ash on transparent
│   └── besoq-monogram.svg             ← bsq, lowercase, ash
├── seals/
│   ├── besoq-seal.svg                 ← circular brand seal
│   └── besoq-seal-repaired.svg        ← repair-service seal variant
├── lockups/
│   ├── besoq-lockup-permanent.svg
│   ├── besoq-lockup-spring-26.svg
│   ├── besoq-lockup-autumn-26.svg
│   └── besoq-lockup-study-no-03.svg
├── favicons/
│   ├── favicon.svg                    ← square monogram crop, ash on bone
│   ├── favicon-dark.svg               ← inverted (bone on ash)
│   └── apple-touch-icon.svg           ← 180×180 monogram, embedded background
├── social/
│   └── profile.svg                    ← @besoq profile picture (square)
├── patterns/
│   ├── bsq-jacquard.svg               ← tonal monogram repeat
│   └── bone-on-bone-weave.svg         ← packaging surface pattern
├── icons/
│   ├── README.md
│   ├── 24/                            ← 24×24px UI icons
│   │   ├── search.svg
│   │   ├── account.svg
│   │   ├── bag.svg
│   │   ├── wishlist.svg
│   │   ├── menu.svg
│   │   ├── close.svg
│   │   ├── arrow.svg
│   │   ├── check.svg
│   │   ├── minus.svg
│   │   ├── plus.svg
│   │   ├── external.svg
│   │   └── care.svg
│   └── 16/                            ← 16×16px UI icons (same set)
└── illustrations/
    └── README.md                      ← technical line-drawings (per garment)
```

---

## How to use the wordmark files

### Primary use — lowercase, on light background

```html
<img src="brand/assets/wordmarks/besoq-wordmark.svg"
     alt="besoq"
     width="120">
```

### On dark backgrounds

```html
<img src="brand/assets/wordmarks/besoq-wordmark-on-dark.svg"
     alt="besoq"
     width="120">
```

### Editorial / press / retail signage

```html
<img src="brand/assets/wordmarks/besoq-wordmark-editorial.svg"
     alt="BESOQ"
     width="160">
```

### Where the wordmark sits inline with text

Use the `.besoq-wordmark` utility class from `brand/07-tokens/typography.css` so the letter-spacing and casing are set by the type system, not the asset. The SVG file is for cases where rendered text (e.g., on a hero image, or in a context without our typography tokens loaded) is required.

---

## Font note

The SVG wordmarks use the system's typographic system: **Söhne** (commercial) when licensed, **Inter** (open-source) as the deployed fallback. The SVG files render text as `<text>` elements (not outlined paths) so the wordmark always uses whichever font the host platform has loaded.

When the brand owner is ready to ship Söhne in production, the same SVGs render the wordmark in Söhne automatically — no asset re-export required.

If you need outlined-path versions (for environments that strip fonts, e.g., some print pipelines), generate them from the SVGs above with a vector tool. Outlined versions should be saved as `*-outlined.svg` next to the source.

---

## Production rules

| Rule | Reason |
|---|---|
| Never re-export the wordmark from a screenshot. | Loses crispness. Always use the SVG. |
| Never modify the SVGs by hand. | Modifications require a `CHANGELOG.md` entry. |
| Never re-colour outside the palette. | Palette is enforced. |
| Never apply effects (shadow, glow, blur). | Forbidden by `03-visual/01-logo-system.md`. |
| Never crop tighter than the file's clear-space margin. | Clear space is part of the asset. |

For all guideline detail, see `brand/03-visual/01-logo-system.md`.

---

## Asset checksum policy

Each asset will, in production, carry a checksum recorded in `assets/checksums.txt`. A change to any asset requires:

1. The new checksum recorded.
2. A `CHANGELOG.md` entry.
3. A bump of the brand-system version in `brand/CHANGELOG.md`.

This is the canon-protection mechanism for the visual identity.
