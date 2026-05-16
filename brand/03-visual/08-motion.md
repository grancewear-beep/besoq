# Motion

Motion is allowed in the BESOQ system only when it serves navigation. It is never decorative. There are no animated logos, no scroll-driven illustrations, no parallax landscapes, no kinetic type. The system is largely still.

---

## Principles

1. **Motion follows function.** If motion does not help the user, it does not exist.
2. **Motion is short.** Maximum duration: 240ms.
3. **Motion is single-property.** Only one property animates at a time (opacity *or* transform — never both).
4. **Motion is one-way.** No bouncing, no overshoots, no settle-ins.
5. **Motion respects reduced-motion preferences.** All motion honours `prefers-reduced-motion: reduce`.

---

## The permitted motion vocabulary

Six — and only six — motions are permitted in the system.

### 01 — Page fade
A 200ms fade between pages on navigation.
- Property: `opacity`.
- Easing: `ease-out`.
- No accompanying slide, swipe, or scale.

### 02 — Image hover (web)
A 160ms opacity reduction to `0.85` on a hovered product image.
- Property: `opacity`.
- Easing: `ease-out`.
- No scale, no border change, no caption emergence.

### 03 — Button press
A 120ms opacity reduction to `0.9` on press.
- Property: `opacity`.
- Easing: `ease-out`.
- No translation, no shadow change.

### 04 — Modal entrance
A 200ms fade-in for modals (used only for the legally-required cookie banner; never for marketing).
- Property: `opacity`.
- No translate-y, no scale.

### 05 — Dropdown reveal
A 160ms fade for navigation dropdowns.
- Property: `opacity`.
- Easing: `ease-out`.
- No slide, no spring.

### 06 — Skeleton load
A 1200ms loop on loading-state placeholders (UI only).
- Property: `background-position` on a subtle linear gradient.
- The gradient amplitude is small; the placeholder must look calm, not pulsing.

---

## Forbidden motions

- ❌ Logo reveal animations.
- ❌ Type animations (typewriter effects, fade-ins per word).
- ❌ Parallax of any depth.
- ❌ Scroll-driven illustration.
- ❌ Hero video that auto-plays with sound.
- ❌ Scroll-jacking — overriding native scroll behaviour.
- ❌ Cursor effects (custom cursor, cursor halos).
- ❌ Lottie animations.
- ❌ 3D rotations.
- ❌ Kinetic type (text that moves).
- ❌ Pulsing CTAs ("buy now" buttons that breathe).
- ❌ Any animation longer than 240ms (except skeleton loops).

---

## Easing system

Two easings are used across the entire system:

| Token | Curve | Use |
|---|---|---|
| `ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Default. Used for 90% of motion. |
| `ease-linear` | `linear` | Loading skeletons only. |

There is no `ease-in`. There is no `ease-in-out`. There is no spring. There is no bounce. The only easing the user sees is *the curve of something quietly settling into place.*

---

## Duration system

| Token | Duration | Use |
|---|---|---|
| `duration-fast` | 120ms | Button press, micro-interactions. |
| `duration-base` | 160ms | Hover states, dropdown reveals. |
| `duration-slow` | 200ms | Page fades, modal entrance. |
| `duration-loop` | 1200ms | Skeleton loops only. |

Anything beyond 240ms (except loops) is, by definition, off-brand.

---

## Reduced motion

For users with `prefers-reduced-motion: reduce`, all motion is replaced with an instant state change. The site remains fully usable; the system simply removes the transition.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

This is shipped by default in `brand/07-tokens/motion.css`.

---

## Video

Video is permitted only for two purposes:

1. **A single hero video on the seasonal landing page** — silent, looping, under 12 seconds, always with a "pause" affordance, never autoplaying with sound.
2. **A material story video on a fabric-led product page** — short, observational, also silent.

All other video is forbidden. The brand does not produce vlogs, founder talks, behind-the-scenes reels, or campaign trailers.
