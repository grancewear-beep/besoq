/**
 * besoq — Tailwind CSS preset
 * v1.0
 *
 * Reference: brand/07-tokens/README.md
 *
 * Usage:
 *
 *   // tailwind.config.js
 *   import besoqPreset from "./brand/07-tokens/tailwind.preset.js";
 *
 *   export default {
 *     presets: [besoqPreset],
 *     content: ["./src/**\/*.{html,js,ts,tsx,vue}"],
 *   };
 *
 * The preset replaces (not extends) Tailwind's default theme so that
 * only brand-approved values are available. This is intentional —
 * a designer cannot accidentally reach for a non-brand value.
 */

/** @type {import('tailwindcss').Config} */
const preset = {
  theme: {
    /* ─── Colour ─── */
    colors: {
      transparent: "transparent",
      current:     "currentColor",
      inherit:     "inherit",

      bone:     "#F4EFE6",
      ash:      "#1A1A1A",
      stone:    "#A89B8C",
      sage:     "#9CA38F",
      charcoal: "#3C3C3C",
      linen:    "#E4DDCE",
      clay:     "#B89F86",
      ink:      "#11110F",

      neutral: {
        50:  "#FAF7F0",
        100: "#F4EFE6",
        200: "#E4DDCE",
        300: "#CFC6B4",
        400: "#A89B8C",
        500: "#7A7163",
        600: "#564F44",
        700: "#3C3C3C",
        900: "#1A1A1A",
      },

      state: {
        success: "#5C6B53",
        warning: "#A48852",
        error:   "#8C4A3F",
      },
    },

    /* ─── Spacing ─── */
    spacing: {
      0:  "0",
      1:  "4px",
      2:  "8px",
      3:  "12px",
      4:  "16px",
      5:  "24px",
      6:  "32px",
      7:  "48px",
      8:  "64px",
      9:  "96px",
      10: "128px",
      11: "192px",
      12: "256px",
    },

    /* ─── Container ─── */
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "32px",
        lg: "64px",
        xl: "64px",
      },
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },

    /* ─── Type families ─── */
    fontFamily: {
      sans: [
        "Söhne",
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ],
      serif: [
        "Times Now",
        "Source Serif 4",
        "Source Serif Pro",
        "Georgia",
        "Times New Roman",
        "Times",
        "serif",
      ],
      mono: [
        "Söhne Mono",
        "JetBrains Mono",
        "ui-monospace",
        "SFMono-Regular",
        "SF Mono",
        "Menlo",
        "Consolas",
        "Liberation Mono",
        "monospace",
      ],
    },

    /* ─── Type sizes ─── */
    fontSize: {
      "3xs":  ["11px", { lineHeight: "1.35" }],
      "2xs":  ["12px", { lineHeight: "1.35" }],
      xs:     ["13px", { lineHeight: "1.35" }],
      sm:     ["14px", { lineHeight: "1.55" }],
      base:   ["16px", { lineHeight: "1.55" }],
      md:     ["18px", { lineHeight: "1.55" }],
      lg:     ["22px", { lineHeight: "1.35" }],
      xl:     ["28px", { lineHeight: "1.10" }],
      "2xl":  ["36px", { lineHeight: "1.10" }],
      "3xl":  ["48px", { lineHeight: "1.10" }],
      "4xl":  ["64px", { lineHeight: "1.00" }],
      "5xl":  ["84px", { lineHeight: "1.00" }],
    },

    /* ─── Weights ─── */
    fontWeight: {
      light:    "300",
      regular:  "400",
      semibold: "600",
    },

    /* ─── Line height ─── */
    lineHeight: {
      display:   "1.00",
      tight:     "1.10",
      snug:      "1.35",
      normal:    "1.55",
      serif:     "1.65",
      editorial: "1.75",
    },

    /* ─── Letter spacing ─── */
    letterSpacing: {
      0:         "0",
      caps:      "0.05em",
      wordmark:  "0.12em",
      editorial: "0.20em",
    },

    /* ─── Borders ─── */
    borderRadius: {
      DEFAULT: "0",
      none:    "0",
      sm:      "0",
      md:      "0",
      lg:      "0",
      full:    "0",
    },

    borderWidth: {
      DEFAULT: "1px",
      0:       "0",
      hair:    "0.5px",
      1:       "1px",
      2:       "2px",
    },

    /* ─── Animation ─── */
    transitionDuration: {
      DEFAULT: "160ms",
      instant: "0ms",
      fast:    "120ms",
      base:    "160ms",
      slow:    "200ms",
      loop:    "1200ms",
    },

    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.22, 1, 0.36, 1)",
      out:     "cubic-bezier(0.22, 1, 0.36, 1)",
      linear:  "linear",
    },

    /* ─── Z-index ─── */
    zIndex: {
      0:       "0",
      base:    "0",
      raised:  "10",
      sticky:  "100",
      overlay: "1000",
      modal:   "1100",
      toast:   "1200",
    },

    /* ─── Properties intentionally disabled ─── */
    boxShadow: {
      DEFAULT: "none",
      none:    "none",
    },

    extend: {},
  },

  /* ─── Disabled core plugins ─── */
  /*
   * The brand does not use:
   *   - dropShadow (no shadows on UI elements other than focus rings)
   *   - backgroundImage gradients (no gradient anywhere in the system)
   *   - backdropBlur (no glassmorphism)
   *   - animation utilities (motion is hand-tokened only)
   */
  corePlugins: {
    dropShadow:    false,
    backdropBlur:  false,
    backdropContrast: false,
    backdropSaturate: false,
    backdropSepia: false,
    backdropHueRotate: false,
    backdropGrayscale: false,
    backdropInvert: false,
    backdropBrightness: false,
    backdropOpacity: false,
  },
};

export default preset;
