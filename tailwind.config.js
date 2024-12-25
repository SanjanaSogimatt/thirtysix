/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Italiana: ["Italiana", "sans-serif"],
        Montserrat:["Montserrat","sans-serif"]
      },
      colors: {
        red: {
          100:" #fd2c2a"
        }
      }
    },
  },
  plugins: [],
}