/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'a': { cursor: 'pointer' },
      });
    }
  ],
}

