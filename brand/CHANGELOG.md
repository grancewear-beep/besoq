# Changelog

All notable changes to the BESOQ brand system are recorded here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the brand system adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) at a system level (not at a per-file level).

---

## [1.0.0] — 2026-05-16

The founding canon. Everything in this release is `v1.0`.

### Added — Strategy
- `brand/00-overview/README.md` — brand at a glance, decision log.
- `brand/00-overview/principles.md` — five brand principles in long form.
- `brand/01-strategy/01-manifesto.md` — manifesto (short and long versions).
- `brand/01-strategy/02-positioning.md` — positioning statement, four-quadrant map, anti-positioning.
- `brand/01-strategy/03-pillars.md` — four pillars (Quiet · Considered · Lasting · Honest) with proof rules and a pillar-interaction matrix.
- `brand/01-strategy/04-personas.md` — three personas (the Returner, the Builder, the Quiet Professional) plus an explicit anti-persona.
- `brand/01-strategy/05-competitive-landscape.md` — reference set (The Row, Lemaire, Margaret Howell, Jil Sander, Studio Nicholson, Auralee, COS, Everlane), differentiation rules, inspirations beyond fashion.
- `brand/01-strategy/06-brand-story.md` — three lengths (25 / 100 / 350 words).
- `brand/01-strategy/07-brand-architecture.md` — branded-house model with four lines: Permanent · Seasonal · Archive · Studies.

### Added — Verbal identity
- `brand/02-verbal/01-naming.md` — acronym rationale, casing rules, domain & handle system.
- `brand/02-verbal/02-tone-of-voice.md` — four voice attributes, ten non-negotiable rules, three-question check.
- `brand/02-verbal/03-tagline-system.md` — five-tier tagline hierarchy.
- `brand/02-verbal/04-messaging-framework.md` — pillar messages with proof points and persona / moment framings.
- `brand/02-verbal/05-copy-examples.md` — fully drafted copy across 15 surfaces.
- `brand/02-verbal/06-glossary.md` — preferred vocabulary, forbidden words, redefined terms.

### Added — Visual identity
- `brand/03-visual/01-logo-system.md` — wordmark, monogram, seal, quiet mark.
- `brand/03-visual/02-color-system.md` — primary palette (Bone, Ash, Stone, Sage, Charcoal), accents (Linen, Clay, Ink), nine-step neutral ramp, functional state colours.
- `brand/03-visual/03-typography.md` — Söhne · Times Now · Söhne Mono with Inter / Source Serif 4 / JetBrains Mono fallbacks; modular scale (1.25); leading and tracking specifications.
- `brand/03-visual/04-grid-and-layout.md` — 8px / 2mm base unit; container widths, vertical rhythm, air targets per surface.
- `brand/03-visual/05-iconography.md` — twelve-icon system, 24 × 24 grid, 1.5u stroke.
- `brand/03-visual/06-photography.md` — four photographic modes (studio garment, on-body neutral, architectural, material study).
- `brand/03-visual/07-illustration-and-pattern.md` — technical line drawings, `bsq` jacquard, bone-on-bone weave.
- `brand/03-visual/08-motion.md` — six permitted motions, ≤ 240ms, reduced-motion handler.
- `brand/03-visual/09-print-specifications.md` — paper stocks, methods, garment label specifications.

### Added — Applications
- `brand/04-applications/01-packaging.md` — kraft mailer, bone box, tissue, care card, cotton bag, sealing wax (plastic-free, FSC).
- `brand/04-applications/02-hangtags-and-labels.md` — 60 × 90mm letterpress hangtag, woven outer label, printed inner composition label, repair sticker.
- `brand/04-applications/03-stationery.md` — letterhead, compliments slip, business card, envelopes, postcard, press kit folder, internal notebook.
- `brand/04-applications/04-retail-and-store.md` — threshold, architecture, display density, fitting room, staff conduct, music, scent.
- `brand/04-applications/05-digital-and-website.md` — IA, navigation, homepage, PDP, cart and checkout, performance budget, privacy posture.
- `brand/04-applications/06-social-media.md` — Instagram primary; no TikTok; no influencers; no hashtags.
- `brand/04-applications/07-email.md` — eight-email programme (max ≈ 18 sends per customer per year); no welcome series; no abandonment flows.
- `brand/04-applications/08-lookbook.md` — 200 × 280mm, 64 pages, 1,000 print run, never reprinted.

### Added — Product
- `brand/05-product/01-collection-system.md` — four lines, em-dash naming, release calendar (March + September), absolute no-discount policy.
- `brand/05-product/02-sku-system.md` — six-segment SKU format with revision discipline.
- `brand/05-product/03-care-and-repair.md` — lifetime repair service, alterations at cost, 30-day free returns.
- `brand/05-product/04-size-guide.md` — body and garment-flat charts in centimetres only, fit notes with model height, genderless approach, personal sizing call.
- `brand/05-product/05-materials-library.md` — eight foundational cloths (M-001 through M-008), forbidden material list including RPET and mulesed wool.

### Added — Guidelines
- `brand/06-guidelines/01-do-and-dont.md` — do / don't matrix across every category.
- `brand/06-guidelines/02-accessibility.md` — WCAG 2.2 AA floor; approved colour pairs with measured contrast; keyboard, screen-reader, motion, and zoom rules.
- `brand/06-guidelines/03-legal-and-trademark.md` — trademark posture, third-party use, counterfeit ladder, domain protection, sustainability-claim discipline.
- `brand/06-guidelines/04-brand-checklist.md` — surface-by-surface checklist run before any release.

### Added — Tokens
- `brand/07-tokens/index.css` — single import; sets body baseline, link, button, form input defaults.
- `brand/07-tokens/colors.css` — colour tokens with light + dark variants and semantic surface tokens.
- `brand/07-tokens/typography.css` — type families with utility classes.
- `brand/07-tokens/spacing.css` — 8px-anchored spacing scale, container widths, focus ring.
- `brand/07-tokens/motion.css` — easings, durations, reduced-motion handler.
- `brand/07-tokens/tokens.css` — composite re-export.
- `brand/07-tokens/tokens.json` — DTCG-format design tokens.
- `brand/07-tokens/tailwind.preset.js` — Tailwind preset that replaces (not extends) the default theme.
- `brand/07-tokens/_examples/example.html` — token-applied example.
- `brand/07-tokens/README.md` — usage guide.

### Added — Assets
- `brand/assets/wordmarks/` — primary, on-dark, editorial uppercase, monogram (4 SVGs).
- `brand/assets/seals/` — standard seal, repaired-service seal (2 SVGs).
- `brand/assets/lockups/` — permanent, spring 26, autumn 26, study no. 03 (4 SVGs).
- `brand/assets/favicons/` — favicon, favicon-dark, apple-touch-icon (3 SVGs).
- `brand/assets/social/profile.svg` — 1080 × 1080 profile picture.
- `brand/assets/patterns/` — bsq jacquard, bone-on-bone weave (2 SVGs).
- `brand/assets/icons/24/` — twelve 24×24 icons.
- `brand/assets/icons/16/` — twelve 16×16 icons.
- `brand/assets/illustrations/README.md` — placeholder for per-garment line drawings.
- `brand/assets/README.md` — manifest.

### Added — Showcase
- `brand/showcase.html` — single-page tour rendering palette, type, icons, lockups, seals, patterns, and a worked PDP example using the actual tokens.

### Added — Repository
- `README.md` — repository introduction and structure.

---

## Forthcoming (planned for v1.1)

These items are intentionally **not** in v1.0; they require studio work or external sourcing before they can be added.

- `brand/assets/illustrations/*.svg` — per-garment technical line drawings (one per SKU family).
- `brand/assets/photography/besoq-grade-v1.cube` — production grading LUT.
- `brand/assets/checksums.txt` — checksums for asset-canon protection.
- `product-data/garments.yaml` — full garment family registry.
- `product-data/skus.csv` — SKU registry with EAN, price, status.
- Font licences: Söhne, Times Now (commercial; deployed when licensing complete).
- Trademark registration filings (per `06-guidelines/03-legal-and-trademark.md`).

---

## Versioning rules

| Change type | Version bump | Examples |
|---|---|---|
| Material change to brand strategy or visual identity | **Major** (`2.0.0`) | New pillar, new typeface, palette overhaul. |
| Additive: new applications, new tokens, new SVG assets | **Minor** (`1.1.0`) | New social channel guideline, new icon, new line lockup. |
| Editorial / clerical / non-substantive | **Patch** (`1.0.1`) | Typo fixes, reformatting, link corrections. |

Any change requires:
1. A pull request.
2. An entry in this changelog.
3. Sign-off from the brand owner.

---

## Sign-off

The brand owner approves each release by adding a line below.

| Version | Date | Owner | Note |
|---|---|---|---|
| 1.0.0 | 2026-05-16 | brand owner | the founding canon. |
