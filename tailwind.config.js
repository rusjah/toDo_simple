/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'marhey': ['Marhey']
      }
    },
  },
  plugins: [require("daisyui")],
}

