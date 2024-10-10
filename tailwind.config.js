/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",                   // If you have HTML files in the root directory
    "./src/**/*.{html,js}",       // If you have a 'src' folder with HTML or JS files
    "./assets/**/*.css"    // Path to your CSS files where Tailwind is used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
