# Colour system

The BESOQ palette is deliberately small. It contains five primary colours, three accent colours, and a fully neutral grayscale ramp. There are no bright, saturated, or signal colours. The palette is built to support quiet — not to compete with it.

---

## The palette in one image

```
┌───────────┬───────────┬───────────┬───────────┬───────────┐
│   bone    │    ash    │   stone   │   sage    │ charcoal  │
│  #F4EFE6  │  #1A1A1A  │  #A89B8C  │  #9CA38F  │  #3C3C3C  │
└───────────┴───────────┴───────────┴───────────┴───────────┘
                  Primary palette — five colours

┌───────────┬───────────┬───────────┐
│   linen   │   clay    │   ink     │
│  #E4DDCE  │  #B89F86  │  #11110F  │
└───────────┴───────────┴───────────┘
        Accent palette — three colours

┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
│50 │100│200│300│400│500│600│700│900│
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
        Warm neutral ramp — nine steps
```

---

## 1. Primary palette

Five colours. Every BESOQ surface — packaging, web, retail, print, garment label — uses one or more of these. Most surfaces use only two.

### Bone — `#F4EFE6`
The brand's primary background. A warm, paper-coloured off-white that softens contrast and reads as honest cloth. Bone, not white.

| Spec | Value |
|---|---|
| HEX | `#F4EFE6` |
| RGB | 244, 239, 230 |
| CMYK (uncoated) | 3, 4, 9, 0 |
| Pantone (approx.) | 9224 U |
| Munsell (approx.) | 9.5Y 9.4/0.7 |

**Use.** Web background, packaging boxes, paper goods, hangtag stock, lookbook pages.

### Ash — `#1A1A1A`
The brand's primary foreground. A near-black with a faint warmth — never pure `#000000`. Pure black reads as cheap on paper and harsh on screen; Ash reads as ink.

| Spec | Value |
|---|---|
| HEX | `#1A1A1A` |
| RGB | 26, 26, 26 |
| CMYK (uncoated) | 60, 50, 50, 100 |
| Pantone (approx.) | Black 6 U |

**Use.** All body text, wordmark on light backgrounds, product line drawings.

### Stone — `#A89B8C`
A warm, neutral taupe. The brand's preferred third colour after Bone and Ash. Use it for fabric callouts, supporting strokes, secondary lines.

| Spec | Value |
|---|---|
| HEX | `#A89B8C` |
| RGB | 168, 155, 140 |
| CMYK (uncoated) | 36, 38, 45, 4 |
| Pantone (approx.) | 7530 U |

**Use.** Subheads, dividers, supporting body text, quiet UI strokes.

### Sage — `#9CA38F`
A muted, dusty green. Used sparingly. Strong association with botanical and natural material storytelling. Never used for primary CTAs.

| Spec | Value |
|---|---|
| HEX | `#9CA38F` |
| RGB | 156, 163, 143 |
| CMYK (uncoated) | 41, 28, 45, 5 |
| Pantone (approx.) | 5777 U |

**Use.** Editorial accents, the spring/summer collection only, certain garment swatches.

### Charcoal — `#3C3C3C`
A mid-deep gray, slightly warmer than neutral. Used as a softer alternative to Ash for long-form body text.

| Spec | Value |
|---|---|
| HEX | `#3C3C3C` |
| RGB | 60, 60, 60 |
| CMYK (uncoated) | 65, 55, 55, 50 |
| Pantone (approx.) | 446 U |

**Use.** Body text in long-form editorial, the journal, subdued UI text.

---

## 2. Accent palette

Three colours used selectively. Never as primary.

### Linen — `#E4DDCE`
A slightly deeper bone, used to differentiate panels and card backgrounds without resorting to a different colour family.

### Clay — `#B89F86`
A warm, deep beige used in autumn/winter materials and as a quiet highlight in editorial print.

### Ink — `#11110F`
A near-black slightly deeper than Ash, used only for foiling and printed editorial — surfaces where Ash reads too gray.

---

## 3. Warm neutral ramp

A nine-step ramp generated from the Bone-to-Ink axis. Used for UI surfaces, dividers, and subtle hierarchy in long-form text.

| Step | HEX | Note |
|---|---|---|
| 50 | `#FAF7F0` | Lightest panel; UI hover surface |
| 100 | `#F4EFE6` | = Bone (primary background) |
| 200 | `#E4DDCE` | = Linen (panel background) |
| 300 | `#CFC6B4` | UI dividers |
| 400 | `#A89B8C` | = Stone (secondary text) |
| 500 | `#7A7163` | Long-form caption text |
| 600 | `#564F44` | Quiet UI iconography |
| 700 | `#3C3C3C` | = Charcoal (long body) |
| 900 | `#1A1A1A` | = Ash (primary text) |

The ramp is intentionally **warm** — derived from yellow-toned neutrals, not blue-toned. This keeps every surface in the same temperature family and prevents UI greys from feeling clinical against printed bone-stock paper.

---

## 4. Colour hierarchy in use

The palette is applied in a strict hierarchy:

```
PRIMARY:    Bone + Ash         (used on every surface)
SECONDARY:  Stone              (used on most surfaces)
TERTIARY:   Charcoal, Sage     (used selectively, by context)
ACCENT:     Linen, Clay, Ink   (used rarely, by editorial decision)
```

A typical surface uses **two to three colours** total. A surface that uses four or more is, by default, off-brand and must be reviewed.

---

## 5. Seasonal modulation

Each season may emphasise a single accent colour, but the primary palette is unchanged. The brand never adds new primary colours.

| Season | Emphasised accent | Reason |
|---|---|---|
| Permanent | Stone | Stable, year-round |
| Spring 26 | Sage | Fresh, herbal |
| Autumn 26 | Clay | Warm, considered |
| Studies | Bone-on-Bone | Material-only colour storytelling |

---

## 6. Forbidden colour behaviours

- ❌ Using pure white (`#FFFFFF`) anywhere. Always Bone, even on screen.
- ❌ Using pure black (`#000000`) anywhere. Always Ash or Ink.
- ❌ Adding a new colour for a single campaign.
- ❌ Using saturated red, blue, green, or yellow. Ever.
- ❌ Gradients of any kind, including subtle ones.
- ❌ Translucent overlays in colour (only neutral overlays are allowed).
- ❌ Using brand colours for status states (e.g., red for error). See `06-guidelines/02-accessibility.md` for system-status colour rules.

---

## 7. Functional colours (UI only)

For UI status states, BESOQ uses three functional colours. They are intentionally muted, never signal-bright.

| State | Colour name | HEX | Use |
|---|---|---|---|
| Success | Quiet green | `#5C6B53` | Confirmation banners, completed-order states. |
| Warning | Quiet ochre | `#A48852` | Address-correction prompts, low-stock indicators. |
| Error | Quiet red | `#8C4A3F` | Failed payment, validation errors. |

These are the **only** non-palette colours permitted in the system. They never appear on packaging, print, or marketing surfaces — only in product UI.

---

## 8. Colour pairings

These pairings are tested and recommended:

- **Bone + Ash** — default, most common.
- **Bone + Stone + Ash** — editorial pages, lookbook spreads.
- **Linen + Charcoal** — long-form journal entries.
- **Clay + Ash** — autumn campaigns.
- **Sage + Stone** — spring campaigns.
- **Ink + Bone** — foiled invitations, ceremonial print.

Avoid any pairing that creates a busy or noisy effect (Sage on Clay, Charcoal on Ash, etc.).

---

## 9. Token names

For implementation, the colours are exposed as tokens in `brand/07-tokens/`. The token names follow this pattern:

```
--besoq-color-bone
--besoq-color-ash
--besoq-color-stone
--besoq-color-sage
--besoq-color-charcoal
--besoq-color-linen
--besoq-color-clay
--besoq-color-ink

--besoq-color-neutral-50
--besoq-color-neutral-100
... through ...
--besoq-color-neutral-900

--besoq-color-state-success
--besoq-color-state-warning
--besoq-color-state-error
```

Never hardcode hex values in product code. Always reference tokens.
