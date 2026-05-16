# Email

Email is the brand's most direct line to the customer. It is treated with corresponding care: rare, considered, and free of the marketing apparatus that has made the channel synonymous with noise.

---

## Email philosophy

> we send fewer emails than every other brand in the category, and we expect you to read them all.

The brand sends approximately **18 emails per customer per year** at maximum. For most customers, the count is closer to **8 to 12**.

---

## 1. Email programme — the inventory

There are exactly **eight** types of email the brand sends. There is no ninth.

### Transactional (always — required)
1. **Order confirmation.**
2. **Shipping confirmation.**
3. **Delivery confirmation.**
4. **Repair confirmation** (when a garment is sent for repair).

### Service (rare — only when relevant)
5. **Notify-me back-in-stock** (only if the customer has explicitly requested it for a specific item).

### Marketing (rare — opt-in only)
6. **Collection release** (twice per year).
7. **Permanent line return** (twice per year).
8. **Studies announcement** (irregular, when a study releases).

That is the entire email programme. The brand does not send:

- ❌ Welcome series (a 5-email "get to know us" flow).
- ❌ Cart abandonment emails.
- ❌ "We miss you" win-back emails.
- ❌ Birthday emails.
- ❌ Holiday emails (Christmas, Valentine's, Mother's Day, Black Friday).
- ❌ Newsletter-style monthly digests.
- ❌ Editorial or "journal" email digests.
- ❌ Survey or NPS emails.
- ❌ "Refer a friend" emails.

Customers who want regular content visit the journal on the site. The inbox is sacred.

---

## 2. Subscription model

Email subscription is **opt-in**, single-step, and unbundled.

### At checkout
There is **no pre-ticked** subscription checkbox at checkout. There is a single line:

> if you would like to be told about new collections, you may add your email here. we send approximately ten emails a year and you can unsubscribe in one click.

A single field, a single button: `subscribe`.

### From the footer
A single field on the website footer:

```
new collections, twice a year. nothing else.

[ email ]   [ subscribe ]
```

### From a permanent line "notify me"
Customer-set notifications on permanent line items are **single-purpose**. Subscribing to be told when one shirt is restocked does not subscribe the customer to anything else.

---

## 3. Voice & tone

Email tone follows `02-verbal/02-tone-of-voice.md` — with one notable variation:

- **Marketing emails**: brand voice. Minimal, lowercase, no exclamation.
- **Service emails**: warmer voice. Customer's first name, full sentences, signed by a real person.

### Example — marketing voice (collection release)

```
subject: autumn 26 — the long coat

eleven months of fittings.
one cloth.
one cut.

on site now.

— besoq
```

### Example — service voice (order confirmation)

```
subject: your order — confirmed

ayla,

your order is confirmed. it leaves the studio within three
working days.

— the long coat — stone — m
— the boxy shirt — bone — s

if you need to change the address, please reply to this email
within 24 hours.

— sevda, besoq care
```

---

## 4. Subject line rules

| Rule | Notes |
|---|---|
| **Lowercase** | Always. |
| **Max length** | 6 words. |
| **No emoji** | Ever. |
| **No exclamation** | Ever. |
| **No urgency words** | "now," "today only," "last chance," "ends tonight" — forbidden. |
| **No clickbait** | "this changes everything," "the secret to..." — forbidden. |
| **No personalisation in subject** | "Ayla, this is for you" — forbidden. The personalisation is in the body. |

### Approved subject patterns

- `your order — confirmed`
- `your order — on its way`
- `autumn 26 — the long coat`
- `the boxy shirt — back, in the same fit`
- `your repair — received`

### Rejected subject patterns

- ❌ `🍂 Fall has arrived! Shop the AW26 Drop NOW`
- ❌ `Ayla, you'll LOVE our new collection`
- ❌ `Last chance — 24 hours only`

---

## 5. Email construction

### Format
- **Plain-text-first.** All emails are designed first as plain text, then carefully wrapped in minimal HTML for typography.
- **No image-only emails.** A bone-coloured banner image at top is permitted; below it must be readable text.
- **Maximum width:** 560px. The email reads on phone and on laptop equally well.
- **Single-column layout.** Always.

### Typography in email
- Body type: Söhne fallback chain (`Söhne, Inter, system-ui, sans-serif`).
- Body size: 16px / 24px line height.
- Email clients: tested on Apple Mail, Gmail web, Outlook desktop, iOS Mail. Plain-text fallback included.

### Imagery in email
- One image per email, maximum.
- 1200 × 1500 (4:5), JPEG q 85, ≤ 300KB.
- The image carries the campaign; the text carries the information.

### Buttons in email
- Inline text links preferred over buttons.
- If a button is required: black background, bone text, 44px tall, centred. No drop shadow, no rounded corners.
- Button label: `see the collection`, `view your order`, `notify me`. Lowercase. No icons.

---

## 6. The "no" footer

Every email has a footer that respects the customer's time.

### Footer construction (marketing emails)

```
this email is sent twice a year, plus when permanent
pieces return, plus when a study releases. nothing else.

unsubscribe          besoq.com          care@besoq.com
```

### Footer construction (service emails)

```
besoq — care
care@besoq.com
besoq.com
```

No social links. No "follow us." No app-download buttons. No "leave a review" prompts.

---

## 7. Personalisation

The only personalisation used in emails is:

- **First name** in service emails (when known).
- **Order details** in transactional emails.
- **The specific garment** in a notify-me email.

The brand does not use:
- Browse history-based recommendations ("based on what you've viewed").
- Geo-based content ("hi from London").
- Time-based content ("good morning").
- Behavioural triggers (cart abandonment, "you left these behind").

---

## 8. Sending practices

| Spec | Value |
|---|---|
| **Sender name** | `besoq` (lowercase). |
| **Sender address** | `care@besoq.com` for service, `letters@besoq.com` for marketing. |
| **Reply-to** | Same as sender. The customer can always reply. |
| **From-name personalisation** | Never. We do not send "Ayla, from BESOQ." |
| **Open tracking** | Disabled. We do not need to know who opened. |
| **Click tracking** | Functional only — to know link efficacy on owned campaigns. Aggregated, not individual. |
| **A/B testing** | Permitted on subject lines (not body). One variant must always be the brand's standard subject pattern. |

---

## 9. Unsubscribe

Unsubscribing is one click. There is no "wait, are you sure?" interstitial. There is no "would you prefer fewer emails?" downsell. There is no "tell us why you're leaving" survey.

```
you have been unsubscribed.
we will not contact you again.

— besoq
```

That is the entire unsubscribe flow.

---

## 10. Lifecycle

The brand operates **without a marketing automation lifecycle**. There is no welcome series. There is no nurture flow. There is no win-back sequence. There is no "sunset" email asking inactive subscribers to re-engage.

If a subscriber has not opened an email in 18 months, they are quietly removed from the list. No farewell email is sent. Their inbox is left alone.

---

## 11. Forbidden email behaviours

- ❌ Sending more than two emails in any seven-day period.
- ❌ "Re:" or "Fwd:" in subject lines to fake replies.
- ❌ Open-tracking pixels.
- ❌ Click-trackers that obscure the destination URL.
- ❌ Embedded "rate this email" buttons.
- ❌ Animations, GIFs, or moving banners.
- ❌ Black-Friday, Cyber-Monday, or holiday-themed sends.
- ❌ Influencer-sourced content in emails.
- ❌ "Shop the look" or "complete the outfit" sections.
- ❌ Footer of social-media icons in a row.
- ❌ Privacy-policy compliance bundled into a "by clicking, you agree" email.

---

## 12. The email test

Before any email is sent, one question:

> **if i received this email, would i resent it?**

If yes — do not send.
If no — send.

The bar is the customer's tolerance, not the brand's marketing calendar.
