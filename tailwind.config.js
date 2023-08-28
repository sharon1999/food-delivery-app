/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'var(--white)',
        'orange': 'var(--orange)',
        'black': 'var(--black)',
        'red': 'var(--red)',
      },
    },
  },
  plugins: [],
}