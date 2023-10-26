const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: '#4e99d5',
        'primary-light': '#66a7db',

        'secondary-dark': '#0C0D0D',
        'secondary-light': '#30BA78',
        'secondary-lighter': '#AFEACD',
        'suse-blue': '#2251F5',
        'suse-gray': '#f7f7f7',
        customDark: `#1d1f1f`,
      },
    },
    fontFamily: {
      body: ['Poppins', ...defaultTheme.fontFamily.sans],
      display: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  options: {
    // not working?
    safelist: ['bg-purple-500', 'bg-yellow-500', `bg-gray-500`],
  },
}
