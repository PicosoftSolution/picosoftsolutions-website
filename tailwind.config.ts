import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05080f",
          900: "#080d17",
          850: "#0a101b",
          800: "#0d1420",
          700: "#111a29",
          600: "#182338",
        },
        line: "rgba(255,255,255,0.08)",
        teal: {
          DEFAULT: "#2dd4c8",
          light: "#5eead4",
          dark: "#0f9c94",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        page: "1280px",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(45,212,200,0.15), transparent)",
      },
     keyframes: {
  "pulse-slow": {
    "0%, 100%": { opacity: "0.6" },
    "50%": { opacity: "1" },
  },
  "spin-slow": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
},
      animation: {
  "pulse-slow": "pulse-slow 4s ease-in-out infinite",
  "spin-slow": "spin-slow 1.4s linear infinite",
},
    },
  },
  plugins: [],
};

export default config;
