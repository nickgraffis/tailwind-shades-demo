const colors = require('tailwindcss/colors');
const gen = require('tailwind-color-generator');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/App.tsx',
      './src/ColorCircle.tsx',
      './safelist.txt'
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      animation: {
        spinslow: 'spin 20s linear infinite'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    gen('lavendar', '#5245a8'),
    gen('orange', '#f3a626'),
    gen('cranberry', '#e45665'),
    gen('navyBlue', '#0c2659'),
    gen('jellyFish', '#f86d4a'),
    gen('peacock', '#71bf78')
  ],
};
