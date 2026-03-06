/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a", // Premium Black
        secondary: "#d4af37", // Golden
        tertiary: "#ffd700", // Bright Gold
        dark: "#0f0f0f", // Very Dark Black
        "dark-bg": "#1a1a1a", // Dark Background
        "gold-light": "#f4d03f", // Light Gold
        "gold-dark": "#b8960f", // Dark Gold
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        slideInLeft: "slideInLeft 0.6s ease-out",
        slideInRight: "slideInRight 0.6s ease-out",
        slideInUp: "slideInUp 0.6s ease-out",
        glow: "glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(212, 175, 55, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.6)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
