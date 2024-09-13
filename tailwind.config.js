/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#F5F7FA',
        'bg-color': '#99D41B',
        'primary-yellow': '#FFC83E',
        'primary-text': '#99D21B',
      },
    },
  },
  plugins: [],
}