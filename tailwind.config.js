const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/***/**/*.{js,ts,jsx,tsx}',
    './src/components/****/***/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Alegreya Sans', 'sans-serif', 'ui-sans-serif', 'system-ui'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      stone: colors.stone,
      blue: colors.blue,
      gray: colors.gray,
      emerald: colors.emerald,
      orange: colors.orange,
      custom: {
        primary: '#23252e',
        secondary: '#262833',
      },
    },
  },
  plugins: [],
};
