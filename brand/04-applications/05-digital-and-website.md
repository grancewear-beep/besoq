# Digital & website

The website is BESOQ's most-visited surface. It is treated as the brand's flagship store: every layout decision, every motion, every word follows the same restraint applied in the physical store.

This document is the canonical reference for `besoq.com`.

---

## Site philosophy

> the website is a quiet room with garments in it. it just happens to be made of HTML.

The site is **content-led**, **fast**, and **intentionally narrow**. It does not aspire to engagement metrics that conflict with the brand: time-on-site, scroll-depth, video-completion. It aspires to clarity.

---

## 1. Information architecture

The site has a deliberately small surface area.

```
besoq.com
├── /                           ← home
├── /the-wardrobe               ← all current garments (single index)
├── /the-wardrobe/[slug]        ← product pages
├── /spring-26                  ← seasonal collection landing
├── /autumn-26                  ← seasonal collection landing
├── /permanent                  ← permanent line landing
├── /archive                    ← past seasonal stock
├── /studies                    ← numbered studies
├── /journal                    ← long-form pieces, infrequent
├── /journal/[slug]             ← individual journal entries
├── /care                       ← customer care
├── /repair                     ← repair service
├── /size-guide                 ← sizing
├── /materials                  ← material library
├── /about                      ← brand story (350-word version)
├── /press                      ← press kit + assets
├── /stockists                  ← if/when wholesale exists
├── /legal                      ← terms, privacy, returns
└── /account                    ← account-only flow (sign-in, orders, addresses)
```

Note: there is no `/blog`, no `/community`, no `/lifestyle`, no `/inspiration`, no `/lookbook` (the lookbook lives inside the seasonal collection page itself).

---

## 2. Navigation

### Top navigation (desktop)
A single thin row, fixed-position, with five items:

```
besoq         the wardrobe   spring 26   permanent   journal       account · bag
```

- Wordmark on the left.
- Sections in the centre (sentence-case, lowercase).
- Account and bag on the right (text only — no icons).
- No promotional banner above the nav.
- No country selector dropdown by default (handled at /legal/regions).

### Mobile navigation
A single `menu` button (icon — see `03-visual/05-iconography.md`). Opens a full-screen sheet with the same five items, plus footer links.

### Forbidden navigation behaviours
- ❌ Mega-menus with images and category trees.
- ❌ Hover-to-reveal subcategories with delays.
- ❌ Sticky promo banners ("free shipping on orders over $200!").
- ❌ Cookie banners that block navigation (the cookie notice must be dismissible without a click on "accept all").
- ❌ Country/currency popups at the top of the page.

---

## 3. Homepage

The homepage is one screen. There are no infinite-scroll mosaics, no carousels, no "shop the look" tiles.

### Structure (single screen, no scroll required)

```
┌────────────────────────────────────────────┐
│  [thin nav — sticky]                       │
├────────────────────────────────────────────┤
│                                            │
│                                            │
│                                            │
│            [single hero image]             │   ← 4:5 portrait, full-bleed left or right half
│                                            │
│                                            │
│                                            │
├────────────────────────────────────────────┤
│  autumn 26.                                │
│  on site now.                              │
│  → see the collection                      │
└────────────────────────────────────────────┘
```

Below the fold (only one block):

```
┌────────────────────────────────────────────┐
│  besoq is a wardrobe brand built on        │
│  restraint. the name stands for            │
│  be so quiet.                              │
│                                            │
│  → about                                   │
└────────────────────────────────────────────┘
```

That is the entire homepage. There is no third block.

---

## 4. Product detail page (PDP)

The PDP is the brand's most honest surface. It is structured around two columns: image (left, 60%), information (right, 40%).

### Image column
- Stack of 3–5 images, each at 4:5.
- First image: studio garment (still life).
- Second image: on-body neutral.
- Third image: architectural, **or** flat-lay detail.
- Fourth (optional): material macro.
- No video. No 360-degree spin.

### Information column

```
the long coat
besoq — autumn 26

a 380 gsm pressed wool from biella, in stone.
unlined for movement. four buttons. no logo, inside or out.

made in portugal, in a small atelier we have worked with
for two seasons.

— 380 gsm wool, 100%
— horn buttons
— shoulder built without padding
— hand-finished cuff

size                                              [size]
                                                  ────
                                                  the size guide

[ add to bag ]                                    € 580

care                wash dry-clean only.
                    press while damp, low heat.
                    store on a wide hanger.

repair              we will repair this. for as long as you wear it.
                    repair@besoq.com

material            [link to the cloth's mill story]
```

That is the whole PDP. There is no "you may also like" carousel. There are no reviews. There is no "frequently bought together."

### Forbidden PDP elements
- ❌ Star ratings or review counts.
- ❌ Recently viewed products.
- ❌ "Other customers also bought."
- ❌ Live stock-counter widgets ("only 3 left!").
- ❌ Countdown timers.
- ❌ Sticky "buy now" bars on mobile.
- ❌ Modal upsells on add-to-bag.

---

## 5. Product index — `/the-wardrobe`

A simple grid. Two filters at the top: line and size. No infinite scroll; pagination at the bottom if more than 24 garments. The grid is 3-across on desktop, 2-across on tablet, 1-across on mobile.

Each tile shows:
- One image (the studio still life).
- Garment name.
- Line (small, charcoal).
- Price.

That is the tile. There is no "quick view," no "wishlist heart," no hover state that swaps to a model image.

---

## 6. Cart & checkout

### Cart
- Centred panel, 600px max width.
- Item rows: image (60×75px), garment name, size, quantity, price.
- A single CTA: `proceed to checkout`.
- A single inline note above the CTA: `we will ship within three working days.`

### Checkout
- Single-page checkout.
- Three sections: contact, shipping, payment.
- No upsells, no "add a gift wrap option," no insurance.
- No coupon field — there are no coupons. (If the customer has a service code from customer care, it is applied by the team, not by the customer.)
- No "complete your order" pop-up if the customer attempts to leave.

### Confirmation
A single screen. Order number. A line of thanks. The same content goes to email.

```
your order is confirmed.
order no. 26-04211

we will ship within three working days.
you will receive an email when it leaves the studio.

— besoq
```

---

## 7. Forms

All forms across the site follow the same construction:

- Labels above the field, never inside the field.
- Required fields not asterisked — the form simply explains in copy.
- Validation in the same Söhne 14px, with the **state-error** colour `#8C4A3F` only on the message, never on the field outline.
- No real-time validation while the user is still typing.
- Buttons are full-width on mobile, fixed-width on desktop. No icons in buttons.

---

## 8. Performance budget

The website is fast on purpose. Performance is part of the brand experience.

| Metric | Target |
|---|---|
| LCP (homepage) | ≤ 1.5s on 4G |
| TBT | ≤ 100ms |
| CLS | ≤ 0.05 |
| Page weight (homepage) | ≤ 600KB total |
| JavaScript bundle | ≤ 80KB gzipped |
| Image format | AVIF + JPEG fallback |
| Web fonts | Self-hosted, subset, preloaded |

A page that fails any of these metrics is treated as a brand defect, not a technical one.

---

## 9. SEO posture

The brand's SEO posture is unusual:

1. **Metadata is functional.** Title, description, structured data — yes. SEO copy stuffed into pages — never.
2. **No SEO landing pages.** We do not write "best stone wool coat" pages to capture search.
3. **Material pages are SEO-rich naturally.** A page about Biella wool, written as an honest piece of editorial, ranks for the right reasons.
4. **No AI-generated SEO content.** Ever.

The brand will lose some traffic this way. That is the cost of the position.

---

## 10. Analytics & data

Minimal, privacy-respecting analytics. Specifically:

- A single, self-hosted analytics tool (Plausible or Umami).
- No Google Analytics.
- No Facebook Pixel.
- No third-party scripts on customer-facing pages.
- A single first-party session cookie. No tracking cookies.

The privacy policy at `/legal/privacy` reflects this directly: we do not track customers across the web.

---

## 11. Accessibility

The site meets **WCAG 2.2 AA** at minimum. Notable specifics:

- Colour contrast: minimum 4.5:1 for body, 3:1 for large text. (See `06-guidelines/02-accessibility.md`.)
- Keyboard navigation: full coverage; visible focus rings on every interactive element.
- Skip-to-content link at the top of every page.
- All images have descriptive `alt` attributes — never `alt=""` for content images.
- All form inputs labelled with `<label>`.
- Reduced-motion preference honoured (see `03-visual/08-motion.md`).
- Site readable at 200% zoom without horizontal scroll.
- Site usable at a viewport of 320px wide.

---

## 12. The site's voice

All site copy follows `02-verbal/02-tone-of-voice.md`. Key reminders:

- Lowercase by default.
- No exclamation marks, ever.
- Em dashes for breath: `besoq — autumn 26`.
- Periods on standalone lines.
- Sentence case for buttons: `add to bag`, not `ADD TO BAG`.

Buttons read as instructions to the customer, not as marketing exhortations.

---

## 13. Forbidden web behaviours

- ❌ Pop-up email collection on first visit.
- ❌ "Notify me" modals that interrupt the flow.
- ❌ Live chat widgets in the corner.
- ❌ Auto-playing video.
- ❌ Dark patterns in checkout (pre-ticked subscription, hidden charges).
- ❌ "Apply now" affiliate / influencer programmes built into the footer.
- ❌ Spinners on add-to-bag (the action must feel instant).
- ❌ Confetti animations on order completion.
- ❌ "Drop alert" newsletters.
- ❌ Country redirects without a "stay" option.
