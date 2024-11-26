/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ctfont: ["Noto Sans Thai", 'serif'],
        dcscrip: ["Dancing Script", 'cursive'],
      },
    },
  },
  plugins: [
    
  ],
}