/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
        fontSize: {
          "title": "3.5rem",
          "subtitle": "2rem",
          "body": "1rem",
        },
        colors: {
          secondary: "#4f5773",
        },
        borderRadius: {
          "round": "1000px",
        },
        fontFamily: {
          "main": ["Montserrat", "sans-serif"],
        },
        fontWeight: {
          "light": "300",
          "normal": "400",
          "bold": "700",
        },
        lineHeight: {
          "title": "1",
        },
      },
  },
  plugins: [],
  darkMode: "class",
};