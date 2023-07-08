/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ED7950",

        black: "#0b0a0d",

        pampas: {
          50: "#f9f8f7",
          100: "#f5f3f0",
          200: "#eae5de",
          300: "#dad2c7",
          400: "#c3b7a6",
          500: "#ac9d87",
          600: "#95856d",
          700: "#7b6e5a",
          800: "#685d4c",
          900: "#595043",
          950: "#2e2921",
        },
      }
    },
  },
  plugins: [],
}

