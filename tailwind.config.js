/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "brand-dark": "#0d0d0d",
      "brand-light": "#eff0f3",
      "brand-primary": "#ff8e3c",
      "brand-secondary": "#d9376e",
    },
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
