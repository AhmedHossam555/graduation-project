
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      colors:{
        'black':{
          '50':'#90969B',
          '100':'#1D2328 ',
          '200':'#15191C'
        }
      }
    }
  },
  plugins: [
      require('flowbite/plugin')
  ],
  darkMode: 'class',// enables dark mode using the 'dark' class 
}


