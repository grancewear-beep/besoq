# SKU system

The SKU is the brand's internal identifier for a sellable variant of a garment. Because the brand will operate across e-commerce, retail, wholesale, and repair flows for many years, the SKU system is **versioned**, **deterministic**, and **defensive against change**.

This document is the canonical reference. Engineering, operations, and the studio all refer to it.

---

## 1. Anatomy of a SKU

A BESOQ SKU has six segments, separated by hyphens:

```
[brand] - [line] - [garment] - [colour] - [size] - [rev]
```

### Example

```
besoq-aw26-coat-stone-m-r1
```

- `besoq` — brand prefix (constant)
- `aw26` — line / season identifier
- `coat` — garment slug (canonical, abbreviated)
- `stone` — colour
- `m` — size
- `r1` — revision number

The full SKU is **lowercase**, **kebab-case**, and **mono-spaced** in printed contexts.

---

## 2. Segment specifications

### Segment 1 — Brand prefix
Always `besoq`. Constant across all SKUs. Never abbreviated, never omitted.

### Segment 2 — Line identifier

| Line | Identifier | Example |
|---|---|---|
| Permanent | `perm` | `besoq-perm-...` |
| Spring (year) | `ss[YY]` | `ss26` for spring 2026 |
| Autumn (year) | `aw[YY]` | `aw26` for autumn 2026 |
| Study | `st[NN]` | `st03` for study no. 03 |

Note: although the customer-facing convention is `spring 26` / `autumn 26`, the SKU system uses the industry-standard `ss` (spring/summer) and `aw` (autumn/winter) abbreviations for compatibility with mills and ateliers.

### Segment 3 — Garment slug

A canonical, abbreviated identifier for the garment family. The brand maintains a fixed registry of garment slugs:

| Garment | Slug |
|---|---|
| The boxy shirt | `shirt-boxy` |
| The placket shirt | `shirt-placket` |
| The tee, single-jersey | `tee` |
| The henley | `henley` |
| The knit, three-stitch | `knit-three` |
| The knit, fine-gauge | `knit-fine` |
| The trouser, wide | `trouser-wide` |
| The trouser, slim | `trouser-slim` |
| The long coat | `coat-long` |
| The chore coat | `coat-chore` |
| The field jacket | `jkt-field` |
| The blazer | `blazer` |

Slugs are **registered**, not invented per release. New slugs are added in `05-product/registry/garment-slugs.md` (see below).

### Segment 4 — Colour

A short colour code, drawn from the palette. Always lowercase, kebab-cased.

| Colour | Code |
|---|---|
| Bone | `bone` |
| Ash | `ash` |
| Stone | `stone` |
| Sage | `sage` |
| Charcoal | `charcoal` |
| Linen | `linen` |
| Clay | `clay` |
| Ink | `ink` |

If a garment is offered in a non-palette colour for a single season (rare), the colour code is added with a season suffix, e.g., `oat-aw26`. The base palette codes never change.

### Segment 5 — Size

| System | Codes |
|---|---|
| Letter sizes | `xs`, `s`, `m`, `l`, `xl` |
| Numbered sizes (trousers) | `44`, `46`, `48`, `50`, `52`, `54` |
| One-size garments | `os` |
| Knitwear with own scale | `kn-1`, `kn-2`, `kn-3`, `kn-4` |

### Segment 6 — Revision

A revision identifier, starting at `r1` and incrementing only when the **pattern block changes**. A colour-only re-release is **not** a revision; the colour change is captured in segment 4.

Revisions exist because a permanent piece may be cut differently five seasons from now. The original SKU `besoq-perm-shirt-boxy-bone-m-r1` and the revised `besoq-perm-shirt-boxy-bone-m-r2` are **different SKUs** — they live different lives.

---

## 3. Examples — full SKUs

```
besoq-aw26-coat-long-stone-m-r1          ← long coat, stone, M, autumn 26, first revision
besoq-perm-shirt-boxy-bone-s-r1          ← boxy shirt, bone, S, permanent line
besoq-perm-shirt-boxy-bone-s-r2          ← boxy shirt, second revision (different cut)
besoq-ss26-knit-three-sage-l-r1          ← spring 26 knitwear
besoq-st03-trouser-wide-stone-46-r1      ← study no. 03, wide trouser
```

---

## 4. Display formatting

The SKU is displayed in different forms across surfaces:

| Surface | Form | Example |
|---|---|---|
| Product page (footer) | Full SKU | `besoq-aw26-coat-long-stone-m-r1` |
| Hangtag (back fold) | Short SKU | `aw26-coat-long-r1` |
| Receipt | Full SKU + price | `besoq-aw26-coat-long-stone-m-r1   € 580` |
| Repair card | Full SKU | `besoq-aw26-coat-long-stone-m-r1` |
| Wholesale order form | Full SKU | full |
| Customer-facing email | Garment name only, never SKU | `the long coat — stone — m` |

The customer rarely sees the SKU. When they do (PDP footer, receipt, repair card), it is in mono-spaced type and clearly secondary.

---

## 5. Barcode & EAN

Each SKU has a **GTIN-13 (EAN-13)** barcode for retail and wholesale. The mapping is:

- Maintained in `product-data/skus.csv`.
- Generated centrally; never assigned ad-hoc.
- Printed on the inner garment label as a bar + 13-digit numeric.
- Reproduced on the hangtag's interior fold for retail scanning.

The brand does not use QR codes on hangtags or labels (see `04-applications/02-hangtags-and-labels.md`). Retail scanning uses the EAN.

---

## 6. Variants — option matrix

Each garment family is described by a fixed option matrix:

```yaml
shirt-boxy:
  colours: [bone, ash, stone]
  sizes: [xs, s, m, l, xl]
  revisions: [r1]

coat-long:
  colours: [stone]
  sizes: [s, m, l, xl]
  revisions: [r1]
```

The matrix lives in `product-data/garments.yaml` and is the single source of truth.

---

## 7. SKU registry

Two registry files maintain the system:

| File | Contents |
|---|---|
| `product-data/garments.yaml` | All garment families, slugs, option matrices |
| `product-data/skus.csv` | Every active SKU, with EAN, price, status |

These files are produced by ops, reviewed by the brand owner, and version-controlled in this repo. Engineering reads from them.

---

## 8. Status flags

Every SKU has a status flag, tracked in `product-data/skus.csv`:

| Status | Meaning |
|---|---|
| `live` | Currently sellable. |
| `low` | < 10 units remaining (internal only — not surfaced to customer). |
| `oos` | Out of stock; awaiting restock. |
| `sunset` | End-of-life; not restocked. |
| `archive` | Past seasonal stock, full price. |
| `retired` | Permanently retired; SKU not reused. |

A retired SKU's identifier is **never reused** — even if the same garment, same cut, same colour, returns. Re-introducing the piece creates a new revision (`r2`, `r3`).

---

## 9. SKU naming forbidden behaviours

- ❌ Spaces in SKUs.
- ❌ Capital letters in SKUs.
- ❌ Special characters (slashes, periods, plus signs).
- ❌ SKUs derived from EAN alone.
- ❌ SKUs with "TEST," "DRAFT," "SAMPLE" baked in.
- ❌ SKUs with promotional encoding ("besoq-aw26-coat-long-stone-m-r1-bf25" for Black Friday — we do not do Black Friday).
- ❌ Reusing a retired SKU.
- ❌ Changing a SKU after it has been printed on a hangtag (correct it on the next batch; do not retroactively rename).
