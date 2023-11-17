/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '758px',
        lg: '1000px',
        xl: '1260px',
        '2xl': '1484px',
      },
    },
  },
  plugins: [],
}