/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Belleza': ['"Belleza"', 'sans-serif'],
      },
      colors:{
        'orange-light':'rgba(255, 255, 255, 0.816)',
      },
      boxShadow: {
        'solid': '3px 3px 0 0 rgb(0 0 0)',
      }
    },
  },

  plugins: [],
}
