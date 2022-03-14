module.exports = {
  content: [
    "*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Nunito', 'sans-serif']
      },
      colors: {
        'primary': '#032633',
        'agiledrop': '#ee4732',
      },
      boxShadow: {
        'around': '0 0 40px rgba(0,0,0,.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
}
