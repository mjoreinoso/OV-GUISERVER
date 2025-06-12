/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Example blue
        secondary: '#f59e42', // Example orange
        accent: '#10b981', // Example green
        customgray: '#374151', // Example gray
      },
    },
  },
  plugins: [],
};
