/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      titillium: ['Titillium Web', 'sans-serif'],
      unbound: ['Unbounded', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}