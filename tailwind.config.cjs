/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgBtn: '#002F5F',
        hoverBtn:'#4270F7',
        orangeStyle:'#FF6B35'
      },
      boxShadow: {
        'bxShadow': '0px 0px 8px rgba(0, 0, 0, 0.1)',
        'modalShadow': '0px 4px 20px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}