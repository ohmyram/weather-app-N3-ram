/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      customDark: 'rgba(16, 14, 29, 1)',
      customSecondaryDark: 'rgba(30, 33, 58, 1)',
      customGray: 'rgba(97, 100, 117, 1)',
      customgraytwo: 'rgba(110, 112, 122, 1)',
      customtextW: 'rgba(231, 231, 235, 1)',
      customYell: 'rgba(255, 236, 101, 1)'
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
    },
  },
  plugins: [],
}
