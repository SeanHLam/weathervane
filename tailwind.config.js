/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{

      },
      colors:{
        "snow":"#FFFBFC",
        "pistachio":"#98CD79",
        "capri":"#47BCFF",
        "raisin":"#2B2826",
      },
      spacing:{
        '128':'32rem',
        '140':'40rem'
      }
    },

  },
  plugins: [],
}
 
