import type { Config } from "tailwindcss";

/**
 * Trees OS / Treelance design tokens.
 * Single source of truth for brand colour + type. See docs/MARKETING_DESIGN.md.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B3862",
          deep: "#0F2440",
          rail: "#142E54",
        },
        // brand green ("moss")
        moss: {
          DEFAULT: "#58B451",
          dark: "#2F6E2A",
          soft: "#EAF6E9",
        },
        // Theme-aware surfaces and text (adapt via CSS variables)
        base: {
          DEFAULT: "rgb(var(--color-base) / <alpha-value>)",
          raised: "rgb(var(--color-base-raised) / <alpha-value>)",
          rail: "rgb(var(--color-base-rail) / <alpha-value>)",
        },
        fg: {
          DEFAULT: "rgb(var(--color-fg) / <alpha-value>)",
          muted: "rgb(var(--color-fg-muted) / <alpha-value>)",
          faint: "rgb(var(--color-fg-faint) / <alpha-value>)",
        },
        border: {
          subtle: "rgb(var(--color-border-subtle))",
        },
        overlay: {
          subtle: "rgb(var(--color-overlay-subtle))",
          light: "rgb(var(--color-overlay-light))",
          medium: "rgb(var(--color-overlay-medium))",
        },
        ink: "#141413",
        muted: "#5D6B7E",
        line: "#E3E6EA",
        canvas: "#F3F2F3",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        reading: "64ch",
        page: "960px",
        wide: "1120px",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      backgroundImage: {
        'rings-dark': 'radial-gradient(circle at 50% 50%, rgba(88,180,81,0.03) 0%, transparent 70%), radial-gradient(circle at 50% 50%, rgba(88,180,81,0.02) 20%, transparent 60%)',
        'rings-mid': 'radial-gradient(circle at 50% 50%, rgba(88,180,81,0.04) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(88,180,81,0.02) 25%, transparent 55%)',
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulsering: {
          "0%": { boxShadow: "0 0 0 0 rgba(88,180,81,.5)" },
          "70%": { boxShadow: "0 0 0 7px rgba(88,180,81,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(88,180,81,0)" },
        },
        rootGrow: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
      },
      animation: {
        rise: "rise .7s cubic-bezier(.2,.7,.2,1) both",
        pulsering: "pulsering 2s infinite",
        rootGrow: "rootGrow 1.2s cubic-bezier(.25,.46,.45,.94) both",
      },
    },
  },
  plugins: [],
};

export default config;
