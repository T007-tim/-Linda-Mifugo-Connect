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
        savanna: {
          50: "#f6f7f0",
          100: "#e8eadc",
          200: "#d1d5ba",
          300: "#b0b68e",
          400: "#8f9665",
          500: "#727a4c",
          600: "#5a613d",
          700: "#484d33",
          800: "#3c402d",
          900: "#343729",
          950: "#1a1c14",
        },
        earth: {
          50: "#faf6f3",
          100: "#f0e8e0",
          200: "#dfcfc0",
          300: "#c8ae99",
          400: "#b08872",
          500: "#9d6f58",
          600: "#8f5d4c",
          700: "#774b40",
          800: "#634039",
          900: "#533633",
          950: "#2d1c1a",
        },
        horizon: {
          50: "#eef8ff",
          100: "#d9efff",
          200: "#bce3ff",
          300: "#8ed2ff",
          400: "#59b8ff",
          500: "#3298ff",
          600: "#1a79f5",
          700: "#1462e1",
          800: "#174fb6",
          900: "#19458f",
          950: "#142b57",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "pulse-soft": "pulseSoft 2.5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(114,122,76,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(114,122,76,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
