import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#fdf8f2",
        cream: "#fff4e6",
        espresso: "#1a120a",
        gold: "#c4900f",
        "gold-light": "#e8a820",
        terracotta: "#c4613a",
        teal: "#0d7a6a",
        // Restored aliases for broken components
        charcoal: "#1a120a",
        background: "#fdf8f2",
        accent: "#0d7a6a",
        surface: "#ffffff",
        midnight: "#080C14",
        sand: "#fff4e6",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      boxShadow: {
        gold: "0 0 24px rgba(196,144,15,0.25)",
        "gold-lg": "0 0 48px rgba(196,144,15,0.35)",
        warm: "0 2px 20px rgba(26,18,10,0.06)",
        "warm-lg": "0 8px 32px rgba(26,18,10,0.1)",
      },
      animation: {
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
