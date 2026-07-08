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
        "gradient-shift-slow": "gradient-shift-slow 35s ease infinite alternate",
        marquee: "marquee 30s linear infinite",
        blob: "blob 7s infinite",
        shimmer: "shimmer 8s linear infinite",
        "float-slow": "float-slow 20s ease-in-out infinite alternate",
        "drift-clouds": "drift-clouds 40s ease-in-out infinite alternate",
        "birds-fly": "birds-fly 20s linear infinite",
        "fog-drift": "fog-drift 30s ease-in-out infinite alternate",
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
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "gradient-shift-slow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "float-slow": {
          "0%": { transform: "translateY(0) scale(1)" },
          "100%": { transform: "translateY(-30px) scale(1.05)" },
        },
        "drift-clouds": {
          "0%": { transform: "translateX(-5%)" },
          "100%": { transform: "translateX(5%)" },
        },
        "birds-fly": {
          "0%": { transform: "translate(-10vw, 30vh) scale(0.5)" },
          "100%": { transform: "translate(120vw, -10vh) scale(1)" },
        },
        "fog-drift": {
          "0%": { transform: "translateX(-2%)" },
          "100%": { transform: "translateX(2%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
