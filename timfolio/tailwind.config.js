/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'footer-brown': '#4A4542',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
      }
    },
  },
  plugins: [],
}

