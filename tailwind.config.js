/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        slate: {
          800: '#1e293b',
          900: '#0f172a',
        },
        yellow: {
          500: '#eab308',
          600: '#ca8a04',
        },
      },
    },
  },
  plugins: [],
};