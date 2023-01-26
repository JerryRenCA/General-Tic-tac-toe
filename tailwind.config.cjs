/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      fontFamily:{
        'playfair':['Playfair Display', 'sans-serif'],
        'roboto':['Roboto','sans-serif'],
        'satisfy':['Satisfy', 'cursive'],
        'ubuntu-c':['Ubuntu Condensed', 'sans-serif'],
      },
      keyframes:{
        'blink':{
          '0%': {
            opacity:0
          },
        }
      },
      animation:{
        'blink':'blink 1s steps(2) infinite'
      },
      colors:{
        'primary':'#ff0000',
        'secondary':'#00ff00',
      },
      backgroundImage: {
        'img1': "url('/img1.webp')",
      }
    },
  },
  plugins: [],
}
