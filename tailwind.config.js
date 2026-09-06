/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#f5cfe0',
          dark: '#eeb9d1',
          light: '#fdeaf3',
          soft: '#fff3f8',
        },
        slate: {
          950: '#111111',
        },
      },
    },
  },
  plugins: [],
}

