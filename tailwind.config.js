/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
      },
      colors: {
        busan: {
          blue: '#004C99',
          sky: '#4DA6FF',
          sand: '#F2E8CF',
          accent: '#FF6B6B',
        }
      }
    },
  },
  plugins: [],
}