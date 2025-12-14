/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector', // <--- CHANGE THIS (was 'class')
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4D00',
      }
    },
  },
  plugins: [],
}