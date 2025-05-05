/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",   // Mobile
      md: "768px",   // Tablet
      lg: "1024px",  // Laptop
      xl: "1280px",  // Desktop
      '2xl': "1536px" // Ultra-wide
    },
    extend: {
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.8)" },
          "100%": { transform: "scale(0.8)" },
        },
        walk: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        movingY: "move 3s linear infinite",
        rotating: "rotate 15s linear infinite",
        scalingUp: "scaleUp 3s linear infinite",
        walkingX: "walk 25s linear infinite",
      },
      fontFamily: {
        Satoshi: ["Satoshi", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
        Lobster: ["Lobster", "sans-serif"],
      },
      colors: {
        'lp-purple': '#6248d6',
        'lp-purple-light': '#a16ef5',
        'lp-blue': '#3b82f6',
        'lp-blue-light': '#60a5fa',
        'lp-gray': '#6b7280',
        'lp-bg': '#f9fafb',
      },
    },
  },
  plugins: [],
}