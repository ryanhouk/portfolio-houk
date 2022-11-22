/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        "brand-dark": "#0d0d0d",
        "brand-light": "#eff0f3",
        "brand-primary": "#00ebc7",
        "brand-secondary": "#ff5470",
        "brand-tertiary": "#fde24f",
      },
    },
  },
  plugins: [],
};
