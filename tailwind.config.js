/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ae-black' : '#171315',
        'ae-grey': '#2E2C2B',
        'ae-blue': '#14377B',
        'ae-lightgrey': '#938E8D',
        'ae-midgrey': '#6D6968',
        'ae-green': '#217A30'
    },
    },
  },
  plugins: [],
};

