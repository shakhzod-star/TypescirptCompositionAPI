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
        orangeStyle:'#FF6B35',
        blueColor: '#2E5A81',
        blackColor: '#182F43',
        orangeColor : '#FF7D44',
        bgBlock: '#D9D9D9',
        bgFooter : '#282828'
      
      },
      backgroundImage: {
        'transport': "url('./src/assets/CreateImg/transport.jpg')",
        'Gradient' : 'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(.jpg)'
      },
      height: {
        '333' : '333px'
      },
      spacing: {
        '15px': '15px',
      },
      screens:{

      }
    },

  },
  plugins: [],
}