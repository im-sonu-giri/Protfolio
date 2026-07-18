import type { Config } from "tailwindcss";

// Strict monochrome design system.
// Every color token below resolves to black, white, or a neutral gray.
// Do not add hue-bearing colors (no blue/green/red/etc) anywhere in the app —
// contrast, weight, and motion do all the work here.
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000000",
          soft: "#0A0A0A",
          raised: "#111111",
        },
        white: {
          DEFAULT: "#FFFFFF",
          off: "#F5F5F5",
        },
        gray: {
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#CCCCCC",
          300: "#999999",
          400: "#888888",
          500: "#666666",
          600: "#444444",
          700: "#2A2A2A",
          800: "#222222",
          900: "#111111",
          950: "#0A0A0A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "clamp-hero": "clamp(3rem, 9vw, 8.5rem)",
        "clamp-h1": "clamp(2.25rem, 5vw, 4.5rem)",
        "clamp-h2": "clamp(1.75rem, 3.5vw, 3rem)",
      },
      letterSpacing: {
        tightest: "-0.045em",
        "tight-2": "-0.03em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
