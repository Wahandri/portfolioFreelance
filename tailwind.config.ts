import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#1f1f1f",
        accent: "#00ff95",
        light: "#f5f5f5"
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 149, 0.45)",
        header: "0 10px 30px -15px rgba(0, 0, 0, 0.6)"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "matrix-rain": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "matrix-rain": "matrix-rain 12s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
