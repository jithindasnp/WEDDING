/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose:  '#D4768E',
        blush: '#F2B5C8',
        mauve: '#9B6B7E',
        plum:  '#3D1A2E',
        petal: '#FFF0F5',
        cream: '#FDFBF7',
        mist:  '#FFF8FA',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
