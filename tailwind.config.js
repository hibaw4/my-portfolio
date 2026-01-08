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
          DEFAULT: '#ec4899',
          dark: '#db2777',
          light: '#f472b6',
        },
      },
    },
  },
  plugins: [],
}

