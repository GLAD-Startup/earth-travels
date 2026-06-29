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
        midnight: "#080C14",
        navy: "#0A1628",
        gold: "#D4A017",
        "gold-light": "#F0C040",
        stone: "#F7F4EE",
        coral: "#C4613A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      backdropBlur: {
        glass: "20px",
      },
      boxShadow: {
        gold: "0 0 24px rgba(212,160,23,0.35)",
        "gold-lg": "0 0 48px rgba(212,160,23,0.5)",
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
