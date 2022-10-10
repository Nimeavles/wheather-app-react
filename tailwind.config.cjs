/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-mobile': '415px',
        'dsk': '1400px'
      },
      gridTemplateColumns: {
        'app-layout': '30% 1fr'
      },
    },
  },
  plugins: [],
}
