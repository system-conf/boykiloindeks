/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Dark Blue
        secondary: '#FFFFFF', // White
        accent: '#64748B', // Gray
      },
    },
  },
  plugins: [],
}
