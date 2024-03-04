/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fredoka: ["Fredoka One", "cursive"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto"],
      }
    },
  },
  plugins: [],
}

