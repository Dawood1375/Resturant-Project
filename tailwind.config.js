const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
             cyan: '#00BCA8',
             gray : '#333333',
             black: '000000',
             emeraldGreen: '#174f49',
             emeraldHover: '#146b60',
             customGray: '#333333',
             backgroundColor: ['hover', 'focus', 'active'], // Ensure hover and focus are enabled for background color
             textColor: ['hover', 'focus', 'active'],
             borderColor: ['hover', 'focus'],

      },
    
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
module.exports = {

  plugins: [
      require('flowbite/plugin')
  ]

}

 
