# Grid & layout

How BESOQ structures space — on screen, on paper, in retail. The grid system is intentionally generous. Empty space is treated as a designed element, not a leftover.

---

## Underlying philosophy

> the page is half the design.

Most layout systems aim to fill space efficiently. BESOQ's grid aims to **leave space deliberately**. Every layout has an air target — a percentage of the canvas that must remain empty. If a layout falls below that target, it is overdesigned.

| Surface | Air target |
|---|---|
| Web — homepage | ≥ 60% |
| Web — PDP | ≥ 45% |
| Lookbook page | ≥ 65% |
| Email | ≥ 70% |
| Packaging | ≥ 80% |
| Hangtag | ≥ 50% |

A surface above its air target is healthy. A surface below it is loud.

---

## 1. The base unit

The grid is built on a single unit: `8px` (web) / `2mm` (print).

All spacing in the system is a multiple of this unit. There are no `5px`, `13px`, or `21px` values anywhere in the system.

| Token | Web (px) | Print (mm) |
|---|---|---|
| `space-0` | 0 | 0 |
| `space-1` | 4 | 1 |
| `space-2` | 8 | 2 |
| `space-3` | 12 | 3 |
| `space-4` | 16 | 4 |
| `space-5` | 24 | 6 |
| `space-6` | 32 | 8 |
| `space-7` | 48 | 12 |
| `space-8` | 64 | 16 |
| `space-9` | 96 | 24 |
| `space-10` | 128 | 32 |

Spacing is exposed as tokens in `brand/07-tokens/spacing.css`.

---

## 2. Web grid

### Container widths

| Breakpoint | Container width | Columns | Gutter |
|---|---|---|---|
| `sm` (≥ 0px) | 100%, padding 16px | 4 | 16px |
| `md` (≥ 768px) | 100%, padding 32px | 8 | 24px |
| `lg` (≥ 1024px) | 100%, padding 64px | 12 | 24px |
| `xl` (≥ 1440px) | max-width 1280px, centred | 12 | 32px |
| `2xl` (≥ 1920px) | max-width 1280px, centred | 12 | 32px |

Note: the maximum content width is **1280px** even on ultra-wide displays. The brand does not stretch to fill.

### Vertical rhythm

Vertical sections use a fixed rhythm of **128px** between major blocks on desktop, **64px** on tablet, **48px** on mobile. This rhythm is non-negotiable; it is the page's breath.

### Common page layouts

- **Hero section** — single image, max-height 720px, no overlay text by default. If text is required, place it **below** the image, not on top.
- **Editorial section** — two columns: image (66%) + text (33%) on desktop, stacked on mobile.
- **Product grid** — 3 across on desktop, 2 across on tablet, 1 across on mobile. Never 4 across; the brand resists density.
- **Footer** — full-width, single colour panel, with `space-9` (96px) of vertical air.

---

## 3. Print grid

### Lookbook (A4 portrait, 210 × 297mm)

- Outer margins: **24mm** all sides.
- Live area: 162 × 249mm.
- Columns: 8.
- Column width: 17.625mm.
- Gutter: 4mm.
- Baseline grid: 4mm.

The lookbook prefers single full-bleed images on the right page and single columns of text on the left.

### Hangtag (60 × 90mm)

- Outer margins: **6mm** all sides.
- Live area: 48 × 78mm.
- Single column. No gutter.
- Wordmark: top-centred at `space-3` (3mm) from top edge.
- Size label: bottom-centred at `space-3` from bottom edge.

### Business card (85 × 55mm)

- Outer margins: **5mm** all sides.
- Front: wordmark only, centred.
- Back: name (top-left), email (bottom-left), tagline (bottom-right).

### Outer box (varies)

The packaging follows the **rule of two anchors**: the wordmark at the top-left and the tagline at the bottom-right. Nothing else on the box exterior.

---

## 4. Image treatment

Images on BESOQ surfaces must follow these structural rules:

### Aspect ratios — permitted only

- `4:5` — primary product portrait (web, social).
- `3:4` — alternate product portrait (lookbook).
- `1:1` — square, used sparingly (social tile).
- `16:9` — only for video. Never for stills.
- `2:3` — editorial / magazine spread.
- `5:7` — full-page lookbook plate.

### Cropping

- Never crop a face above the eyes.
- Never crop a hand at the wrist; either show the hand or end the crop above the wrist by `2x` of the wrist height.
- Garment shots: include at least 5% of the body line above and below the garment.

### Borders

- Images may sit full-bleed (touching the edge of the canvas).
- Images may sit within the column grid (no border).
- Images **never** carry a stroke, drop shadow, or rounded corner.
- Rounded corners are forbidden everywhere in the system. The brand is right-angled.

---

## 5. Empty state behaviour

When a surface has no content (an empty cart, a sold-out grid, a 404 page), it is composed as carefully as a fully populated surface. The empty state retains the brand's air target.

```
[empty cart]

centred at the optical centre of the viewport:

  the cart is empty.
  [the wardrobe]

```

Two lines. One link. Air around it.

---

## 6. Animation & motion

The grid is largely **static**. Motion is allowed only as a slow assistant to navigation — never as decoration.

- Page transitions: a 200ms fade between pages. No slide, no parallax.
- Image hover: an opacity reduction to 0.85, no scale, no zoom.
- Carousel: not used. Never used. The brand does not carousel.
- Auto-rotating banners: never.
- Scroll-jacking: never.
- Cursor effects: never.

For full motion principles, see `08-motion.md`.

---

## 7. Density rules

For any surface, the maximum allowable elements above the fold:

| Surface | Max elements |
|---|---|
| Homepage hero | 1 image + 1 line of text + 1 link |
| PDP above fold | 1 image + 1 title + 1 spec line + 1 button |
| Email above fold | 1 image + 1 line + 1 link |
| Lookbook page | 1 image **or** 1 text block. Never both above the fold. |

If a designer feels constrained by these rules, the answer is rarely to add more elements. It is usually to refine the one element until it carries the load.

---

## 8. Forbidden layout behaviours

- ❌ Carousels of any kind.
- ❌ Sticky banners or sticky toolbars (except a thin nav).
- ❌ Pop-ups, modals, or interruption mechanics — except the cookie banner, which must be the simplest legally-acceptable form.
- ❌ Animated GIFs.
- ❌ Auto-playing video with sound.
- ❌ Hero text overlaid on a busy image.
- ❌ "Above the fold" cluttered with three or more competing elements.
- ❌ Rounded corners.
- ❌ Drop shadows on any element other than a focus ring (UI accessibility).
- ❌ Asymmetric grids (broken columns, jagged stacks). Order is part of quietness.
