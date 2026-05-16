# Typography

BESOQ uses a tightly-disciplined two-typeface system. One sans for everything functional. One serif for editorial moments. No third typeface. No display faces. No script faces. No condensed display variants.

---

## The system

| Role | Primary | Open-source fallback | Web fallback |
|---|---|---|---|
| **Sans (workhorse)** | Söhne | Inter | system-ui, sans-serif |
| **Serif (editorial)** | Times Now | Source Serif 4 | Georgia, serif |
| **Mono (technical)** | Söhne Mono | JetBrains Mono | ui-monospace, monospace |

The primary faces are commercial. They require a license. The fallbacks are deployed where licensing is not yet in place — on engineering sandboxes, in documentation, or where the brand is in pre-launch.

The system **must remain two-faced**: sans + serif. Adding a third typeface is a pillar violation.

---

## 1. Sans (workhorse) — Söhne

The brand's default voice. Used for product copy, navigation, the wordmark, packaging copy, and the vast majority of digital surfaces.

**Why Söhne.** Drawn by Klim Type Foundry, it is a contemporary grotesque rooted in Akzidenz-Grotesk but rationalised for screen and print balance. It has the neutrality the brand requires without the coldness of pure modernist faces.

### Weights used
- **Söhne Buch** (Book / 400) — body, wordmark, navigation.
- **Söhne Halbfett** (Semibold / 600) — used **rarely**, for clarity in small UI labels only.

We do not use Light, Regular Italic, Bold, or Heavy. Only Buch and Halbfett.

### Letterspacing rules
- Body text: `0` (default tracking).
- Wordmark: `+120` (0.12em).
- Editorial wordmark (uppercase): `+200` (0.2em).
- All-caps small labels: `+50` (0.05em).
- Long-form body: `0` always — never tracked positive or negative.

### Open-source fallback — Inter
When Söhne cannot be deployed (open repos, sandboxes, low-budget executions), Inter is used in the same weights. Inter is licensed under the SIL Open Font License and ships free.

---

## 2. Serif (editorial) — Times Now

The editorial face. Used for:
- The journal (long-form pieces).
- Lookbook headlines.
- Press releases.
- Quotes longer than two sentences.

**Why Times Now.** Drawn by Pangram Pangram, it is a contemporary reinterpretation of Times Roman with a sharper editorial cut. It carries the weight of a magazine without leaning historical.

### Weights used
- **Times Now Regular** (400) — body of editorial pieces.
- **Times Now Light** (300) — large editorial headlines (40px+).

We do not use Italic in the body. Italic is reserved for foreign-language phrases (see `02-verbal/06-glossary.md` — *ma*, *biellese*).

### Open-source fallback — Source Serif 4
Adobe's Source Serif 4 is the open-source fallback. SIL OFL licensed. Available on Google Fonts.

---

## 3. Mono (technical) — Söhne Mono

Used for:
- SKUs (`besoq-aw26-coat-stone-m`).
- Garment specifications (140 GSM, 100% cotton).
- Receipt printing.
- All code in `07-tokens/`.

### Open-source fallback — JetBrains Mono
SIL OFL licensed. Drawn for code; works equally well for product specs.

---

## 4. Type scale

A modular scale of `1.25` (major third), anchored at body 16px. The scale is consistent across web and print (with the print scale anchored to 9.5pt body for paper).

| Token | Web (px) | Print (pt) | Use |
|---|---|---|---|
| `text-3xs` | 11 | 7 | Disclaimers, fine print |
| `text-2xs` | 12 | 7.5 | Captions, hangtag inside |
| `text-xs` | 13 | 8 | Footnotes, labels |
| `text-sm` | 14 | 9 | UI body, navigation |
| `text-base` | 16 | 9.5 | Default body |
| `text-md` | 18 | 11 | Large body, lead paragraphs |
| `text-lg` | 22 | 13.5 | Section subheads |
| `text-xl` | 28 | 17 | Editorial subheads |
| `text-2xl` | 36 | 22 | Editorial heads |
| `text-3xl` | 48 | 30 | Hero subheads |
| `text-4xl` | 64 | 40 | Hero, cover |
| `text-5xl` | 84 | 52 | Lookbook covers, large editorial |

The scale is a starting point, not a constraint. Editorial work may use sizes outside this scale, but only when intentional.

---

## 5. Line height (leading)

Leading is generous — quietness on the page is largely a function of how much air sits between lines.

| Use | Line height |
|---|---|
| Body, sans | 1.55 |
| Body, serif | 1.65 |
| Long-form journal, serif | 1.75 |
| UI labels (small) | 1.35 |
| Headlines (32px+) | 1.10 |
| Single-word display | 1.00 |

Never use the default 1.0 for body. Never compress below 1.10 for headlines.

---

## 6. Paragraph behaviour

- **Hyphenation**: off, by default. We prefer ragged-right margins.
- **Justification**: never use full justification. The river of white space introduced by justification conflicts with quietness.
- **Indentation**: never used. Paragraphs are separated by space (`1em`), not by indents.
- **Drop caps**: never used.
- **Orphans / widows**: avoid by hand-editing length, not by typographic tricks.

---

## 7. Numerals

Where the typeface offers them, use **proportional old-style figures** in body text and **tabular lining figures** in tables, prices, and SKUs.

```
body:    "8 buttons, 4 hidden"        ← proportional old-style
table:   "  140 GSM"                  ← tabular lining
price:   "  240,00 ₼"                 ← tabular lining
```

For prices in particular, lining figures aligned in a column are non-negotiable. They preserve the calm of a price sheet.

---

## 8. Quotes, dashes, and ellipses

The system uses curly punctuation, not straight typewriter punctuation, in all body copy.

| Mark | Correct | Incorrect |
|---|---|---|
| Single quote | `'` `'` | `'` |
| Double quote | `"` `"` | `"` |
| Apostrophe | `'` | `'` |
| Em dash | `—` | `--` `-` |
| En dash | `–` (only in number ranges: `2024–2026`) | `-` |
| Ellipsis | `…` (single character) | `...` |

The em dash with single space on each side is the brand's distinctive punctuation: `besoq — autumn 26`.

---

## 9. Print typography rules

For paper applications, additional rules:

- Body text minimum: **9pt**. Never smaller, even on a hangtag.
- Body line length: **45–75 characters** per line.
- Paper: **uncoated** by default. Coated paper conflicts with the brand's tactile language.
- Ink: **single-colour offset** preferred over four-colour, even for editorial.

---

## 10. Forbidden typography behaviours

- ❌ Using a third typeface (no display, no script, no novelty).
- ❌ Using bold for emphasis in body text. Use weight 600 only for UI labels.
- ❌ Using italic for emphasis. Italic is reserved for foreign-language words.
- ❌ Using underlines for emphasis. Underlines indicate links only.
- ❌ ALL CAPS in body copy.
- ❌ Letter-spacing tighter than 0 ("kerning in" the type to look modern).
- ❌ Auto-justified text in any context.
- ❌ Decorative drop caps, lead initials, or ornamental hangs.
- ❌ Outlining type (using a stroke instead of a fill).
- ❌ Type on a curve or path, except in the seal.
- ❌ More than two type sizes in a single editorial layout.

---

## 11. Implementation tokens

Typography tokens live in `brand/07-tokens/typography.css`. They include:

```
--besoq-font-sans
--besoq-font-serif
--besoq-font-mono

--besoq-font-size-3xs through --besoq-font-size-5xl
--besoq-line-height-tight
--besoq-line-height-snug
--besoq-line-height-normal
--besoq-line-height-loose
--besoq-line-height-editorial

--besoq-letter-spacing-0
--besoq-letter-spacing-wordmark
--besoq-letter-spacing-editorial
--besoq-letter-spacing-caps
```

See `brand/07-tokens/typography.css` for the complete declaration.
