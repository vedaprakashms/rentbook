/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/index.html', './src/renderer/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        10: '10%',
        90: '90%',
        nav: '5%',
        body: '95%',
        foot: '3%'
      },
      height: {
        nav: '5%',
        body: '92%',
        foot: '3%'
      }
    },
    fontFamily: {
      Prompt: ['Prompt', 'sans-serif'],
      Lato: ['Lato', 'sans-serif'],
      Oswald: ['Oswald', 'sans-serif'],
      Pacifico: ['Pacifico', 'cursive']
    }
  },
  plugins: []
}
