/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define the specific orange from the design
        'primary-orange': '#FF3D00',
        // Define the deep black background
        'dark-bg': '#050505',
      },
      fontFamily: {
        // Ensure you are using a clean sans-serif font like Inter, Poppins, or Roboto
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}