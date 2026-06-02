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
        ink: "#141413",
        muted: "#5D6B7E",
        line: "#E3E6EA",
        canvas: "#F3F2F3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "Arial", "sans-serif"],
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
      },
      animation: {
        rise: "rise .7s cubic-bezier(.2,.7,.2,1) both",
        pulsering: "pulsering 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
