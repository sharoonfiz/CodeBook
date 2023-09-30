module.exports = {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkbg: "#010734",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
