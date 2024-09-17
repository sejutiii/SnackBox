/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors:
      {
        dreamy: '#F18B01',
        title:
        {
          300: '#ABC123',
          500: '#870091'
        },
        back: '#e0f4ba',
      },
      fontFamily:
      {
        serif: ['Raleway']
      }
    },
  },
  plugins: [],
}

