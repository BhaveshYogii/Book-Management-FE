/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    require('flowbite/plugin')
],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors:{
          primary: "#1182C5",
          secondary : "#2AA6DF",
      },
      container :{
        center:true,
        padding :{
          default : "1rem",
          sm : "3rem",
        },
      }
    },
  },
  plugins: [],
}