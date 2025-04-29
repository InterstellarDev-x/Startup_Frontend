/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      fontFamily : {
        Brand : ['ClashDisplay', 'sans-serif'],
        SemiBrand : ['Outfit-Variable' , 'sans-serif'],
        SemiHeadLine: ['Tanker', 'sans-serif'],
        LineParagraph: ['Bespoke Serif', 'serif'],

      }
    },
  },
  plugins: [ ],
}

