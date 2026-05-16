# Accessibility

Accessibility is non-negotiable. A brand that says "we make garments that age with the wearer" cannot also build digital surfaces that exclude older eyes, motor-impaired hands, or neurodivergent attention.

This document specifies the accessibility standards every BESOQ surface must meet. The standards are tighter than the legal minimum.

---

## 1. The standard

BESOQ targets **WCAG 2.2 AA** as the floor and reaches toward **AAA where it can be done without compromising the brand**. The brand never trades accessibility for aesthetic preference.

---

## 2. Colour & contrast

The brand palette is intentionally low-contrast — and that creates a permanent accessibility risk. The contrast rules below override the visual system when the two conflict.

### Required contrast ratios

| Surface | Ratio | Reference |
|---|---|---|
| Body text | ≥ 4.5:1 | WCAG AA normal text |
| Large text (18pt+ / 14pt bold+) | ≥ 3:1 | WCAG AA large text |
| UI components & graphics | ≥ 3:1 | WCAG AA non-text |
| Focus indicators | ≥ 3:1 against adjacent colours | WCAG 2.2 |

### Approved colour pairs

These pairs have been measured and pass at body-text level (≥ 4.5:1):

| Foreground | Background | Ratio |
|---|---|---|
| Ash (`#1A1A1A`) | Bone (`#F4EFE6`) | 14.0:1 |
| Ash (`#1A1A1A`) | Linen (`#E4DDCE`) | 12.6:1 |
| Charcoal (`#3C3C3C`) | Bone (`#F4EFE6`) | 9.6:1 |
| Charcoal (`#3C3C3C`) | Linen (`#E4DDCE`) | 8.6:1 |
| Bone (`#F4EFE6`) | Ash (`#1A1A1A`) | 14.0:1 |
| Bone (`#F4EFE6`) | Charcoal (`#3C3C3C`) | 9.6:1 |
| Bone (`#F4EFE6`) | Ink (`#11110F`) | 15.2:1 |

### Pairs that do NOT pass body-text contrast

These combinations may be used for **decorative or non-text elements only** — never for body type, links, or form labels:

| Foreground | Background | Ratio | Allowed for |
|---|---|---|---|
| Stone (`#A89B8C`) | Bone (`#F4EFE6`) | 2.4:1 | Dividers, large icons (3:1 OK), decorative |
| Sage (`#9CA38F`) | Bone (`#F4EFE6`) | 2.7:1 | Decorative only |
| Stone | Linen | 2.1:1 | Decorative only |

If a designer needs Stone text on Bone, the type **must be at large-text size (18pt+)** and the contrast must still meet 3:1. For body text, use Ash or Charcoal instead.

### Functional state colours

State colours (success, warning, error) have been chosen to meet contrast against bone.

| State | Foreground | Background | Ratio |
|---|---|---|---|
| Success (`#5C6B53`) | Bone | 4.7:1 ✓ |
| Warning (`#A48852`) | Bone | 3.3:1 — use only for icons + text together |
| Error (`#8C4A3F`) | Bone | 5.5:1 ✓ |

When in doubt, the brand uses **shape and text** to communicate state — not colour alone.

---

## 3. Typography & readability

| Specification | Requirement |
|---|---|
| Body type | ≥ 14px web / ≥ 9pt print |
| Line height | ≥ 1.55 for body |
| Line length | 45–75 characters |
| Letter spacing | not tighter than 0 (no negative tracking) |
| Justification | left-aligned only; never fully justified |
| Hyphenation | off in English; allowed in non-English content |
| Font weight for body | 400 (regular) — never light (300) at body size |

The brand never uses light-weight type at body size. Light is reserved for headlines 32px+.

### Long-form readability

For pages with > 500 words of body text *(journal, about, materials)*, additional rules apply:

- Maximum line length: 65 characters.
- Section headings every 200–300 words.
- Pull quotes only at section breaks, never mid-paragraph.
- Page can be read at 200% browser zoom without horizontal scroll.

---

## 4. Keyboard navigation

Every interactive element must be reachable and operable from the keyboard alone.

### Required behaviour

- [ ] Logical tab order matches the visual order.
- [ ] Visible focus ring on every focused element *(2px solid ash, 2px offset, square)*.
- [ ] No focus traps except in modal dialogs *(which trap focus until dismissed)*.
- [ ] Skip-to-content link as the first focusable element on every page.
- [ ] Custom controls (dropdowns, accordions, sliders) implement ARIA correctly.

### Forbidden
- ❌ Custom focus rings that are decorative only and fail 3:1 contrast.
- ❌ `outline: none` without a visible replacement.
- ❌ Mouse-only interactions (drag-only, hover-only).

---

## 5. Screen-reader support

### Required

- [ ] Every page has a single `<h1>`.
- [ ] Heading hierarchy is sequential (no jump from h1 to h3).
- [ ] All images have `alt` attributes.
  - Content images: descriptive alt text.
  - Decorative images: `alt=""`.
  - The wordmark in the logo: `alt="besoq"`.
- [ ] All form inputs have associated `<label>` elements.
- [ ] All buttons have meaningful labels — `<button>add to bag</button>`, never `<button><svg…/></button>` without an `aria-label`.
- [ ] All landmarks are present: `<header>`, `<nav>`, `<main>`, `<footer>`.
- [ ] Dynamic content announces itself via ARIA live regions where appropriate (cart additions, form errors).

### Wordmark accessibility

The wordmark, when used as an image, has `alt="besoq"`. When used inline as text, it carries no extra ARIA — the typography alone communicates it.

The monogram `bsq` in a favicon or icon context has `alt="besoq"` *(not "bsq")*. The customer is searching for the brand, not the abbreviation.

---

## 6. Forms

| Specification | Requirement |
|---|---|
| Labels | Always above the field. Never inside the field as placeholder. |
| Required field indication | Stated in label copy, not asterisked alone. |
| Error messages | Associated with the field via `aria-describedby`. |
| Error colour | State-error `#8C4A3F` on the message text only — not on the input border alone. |
| Error icons | Always paired with text — never icon-only. |
| Real-time validation | Disabled while the user is typing; validate on blur. |
| Autofill | Allowed; correct `autocomplete` attributes set. |

A form must be completable without a mouse, without colour vision, and without sound.

---

## 7. Motion & vestibular safety

Animations must honour the user's system preference.

### Required

```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.001ms !important;
    animation-duration:  0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

This is shipped by default in `brand/07-tokens/motion.css`.

### Forbidden under any circumstances
- ❌ Auto-playing video with motion above 5% of the screen area.
- ❌ Flashing content > 3 times per second.
- ❌ Parallax that moves > 30px on scroll.
- ❌ Movement-driven hero sections that animate when the user is reading.

---

## 8. Touch targets

| Surface | Minimum target size |
|---|---|
| Mobile (web) | 44 × 44px |
| Tablet | 44 × 44px |
| Desktop | 32 × 32px |
| Accessibility-critical | 48 × 48px |

The brand prefers larger targets where space allows. Tight target spacing (sub-8px between touch areas) is forbidden.

---

## 9. Zoom

The site must be fully usable at:

- **400% zoom** — no horizontal scroll, no clipped content (WCAG 2.2 AA).
- **200% text-only zoom** — body text remains within the readable line-length window.

This rules out fixed-pixel layouts that break at high zoom. The grid system in `03-visual/04-grid-and-layout.md` is responsive at every level.

---

## 10. Language & internationalisation

| Requirement | Detail |
|---|---|
| `<html lang>` set | English: `lang="en"`. |
| Mixed-language content | Marked with inline `lang` attributes. |
| Reading direction | The brand is currently LTR-only. RTL would require a system review. |
| Text expansion | Layout tolerates 30% text expansion (for translation, when supported). |

---

## 11. Cognitive accessibility

Quietness aids cognitive accessibility. Restraint reduces decision fatigue.

### Required behaviours
- [ ] No timed actions *(except payment-session timeouts, with adequate warning)*.
- [ ] No auto-playing carousels that change content beneath the user.
- [ ] Clear, unambiguous error recovery on every form.
- [ ] Plain language; no jargon; no industry shortenings *("PDP," "SKU," "BFCM" never appear customer-facing)*.
- [ ] Predictable behaviour — links go where they say, buttons do what they say.

### Forbidden
- ❌ Dark patterns *(pre-ticked subscriptions, "are you sure?" downsells, hidden fees)*.
- ❌ Confirm-shaming on unsubscribe *("No thanks, I don't want better quality")*.
- ❌ Pop-ups that interrupt reading.

---

## 12. Testing

Every surface is tested against this list before release.

### Automated
- Pa11y or axe-core run on every page.
- Lighthouse accessibility score ≥ 95.
- Colour contrast checked by token, not by spot-check.

### Manual
- Tab through every page from the top.
- Screen-reader pass with NVDA (Windows) and VoiceOver (macOS) before launch.
- Zoom to 200% and 400%, confirm no horizontal scroll.
- Test with `prefers-reduced-motion` enabled.

### User
- The brand commissions an accessibility user-testing session at major releases (annual minimum).
- Findings are logged publicly in the journal as part of the brand's "what we got wrong" practice.

---

## 13. Accessibility statement

The site publishes a public accessibility statement at `/legal/accessibility`. It says, plainly:

```
besoq aims to meet the web content accessibility guidelines (wcag) 2.2
at level aa.

if you have trouble using this site, please write to care@besoq.com.
we will fix it. if we cannot fix it within 30 days, we will tell you why
and offer a workaround.

— besoq
```

That is the entire statement. The brand does not write a long-form, lawyered accessibility page. The plain commitment is the accessibility commitment.
