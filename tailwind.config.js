/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
        clash: ['Clash Display', 'Helvetica', 'Arial', 'sans-serif'],
        object: ['Object', 'Helvetica', 'Arial', 'sans-serif'],
      },
      dropShadow: {
        '3xl': ['0px 28px 24px rgba(0, 0, 0, 0.5)'],
        '4xl': ['0px 68px 87px rgba(0, 0, 0, 0.45)'],
      },
      colors: {
        'brand-dark': '#0d0d0d',
        'brand-light': '#eff0f3',
        'brand-primary': '#00ebc7',
        'brand-secondary': '#ff5470',
        'brand-tertiary': '#fde24f',
        'brand-pale': '#f4eddd',
      },
      maxWidth: {
        'screen-3xl': '2000px',
      },
    },
  },
  plugins: [
    'prettier-plugin-tailwind',
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide the scrollbar */
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none', // Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // Chrome, Safari, and Opera
          },
        },
      })
    },
  ],
}
