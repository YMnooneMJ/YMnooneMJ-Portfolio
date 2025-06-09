/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        gray: {
          500: "#ec4899",
          600: "#db2777",
        },
      },
    },
  },
  plugins: [],
};
