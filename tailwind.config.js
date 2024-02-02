/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif']
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700'
      },
      colors: {
        mainPurple: '#635FC7',
        mainPurpleHover: '#A8A4FF',
        veryDarkGrey: '#20212C',
        darkGrey: '#2B2C37',
        linesGrey: '#3E3F4E',
        mediumGrey: '#828FA3',
        linesLight: '#E4EBFA',
        lightGrey: '#F4F7FD',
        red: '#EA5555',
        redHover: '#FF9898'
      }
    },
  },
  plugins: [],
}

