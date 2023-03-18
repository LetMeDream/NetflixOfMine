/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ['Montserrat Alternates', 'sans-serif'],
      Roboto: ['Roboto Condensed', 'sans-serif']
    }
  },
  plugins: [
  ]
}
