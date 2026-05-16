# Technical line drawings

The brand's preferred way to *show* a garment without photographing it. Used on care cards, spec sheets, repair forms, and the back of hangtags (subtly embossed).

---

## Construction rules

Per `brand/03-visual/07-illustration-and-pattern.md`:

- Pure line, single weight (`0.5pt` print / `1px` web).
- Drawn straight in vector — no hand wobble.
- Black on bone, or bone on ash. No colour.
- Front view; back view; flat lay. Never perspective, never isometric.
- No interior shading, hatching, or detail beyond construction lines.

---

## File naming

```
{garment-slug}-{view}.svg
```

Examples:
- `coat-long-front.svg`
- `coat-long-back.svg`
- `coat-long-flat.svg`
- `shirt-boxy-front.svg`
- `shirt-boxy-flat.svg`

The garment slug must match the registry in `brand/05-product/02-sku-system.md`.

---

## Production note

These illustrations are produced **per garment, per revision**. They are commissioned by the studio's pattern lead from the working pattern, not interpreted from a photograph. A garment without a technical drawing is not yet ready to ship.

The drawings are deliberately omitted from this kit — they are produced in conjunction with each garment's pattern block, and live in this directory as the studio adds them.

A starter file structure for the foundational garment family will look like:

```
illustrations/
├── coat-long-front.svg
├── coat-long-back.svg
├── coat-long-flat.svg
├── coat-chore-front.svg
├── coat-chore-back.svg
├── coat-chore-flat.svg
├── shirt-boxy-front.svg
├── shirt-boxy-back.svg
├── shirt-boxy-flat.svg
├── trouser-wide-front.svg
├── trouser-wide-back.svg
├── trouser-wide-flat.svg
├── knit-three-front.svg
├── knit-three-back.svg
├── knit-three-flat.svg
└── ...
```

---

## When ready

Each new SVG must:

1. Use the same line weight as every other file in this directory (`stroke-width="1"` at `viewBox` `0 0 800 1000`).
2. Use only `stroke="currentColor"` so the file inherits text colour.
3. Carry a `<title>` matching the garment slug + view.
4. Be added to `brand/assets/checksums.txt` (when checksums are introduced).
5. Be referenced from the corresponding PDP, care card, and repair form.
