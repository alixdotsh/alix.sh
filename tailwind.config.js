/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        larsseit: ["larsseit"],
        larsseitbold: ["larsseitbold"],
        larsseitbolditalic: ["larsseitbolditalic"],
        larsseititalic: ["larsseititalic"]
      }
    },
  },
  plugins: [],
}