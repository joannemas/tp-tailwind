/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4287f5",
        secondary: "#292c30",
      },
      fontSize: {
        "title": "3rem",
        "subtitle": "2rem",
        "body": "1rem",
      },
      fontWeight: {
        "light": "300",
        "normal": "400",
        "bold": "700",
      },
      borderRadius: {
        "small": "0.5rem",
      },
      fontFamily: {
        "logo": ["Times New Roman", "serif"],
      },
    }
  },
  plugins: [],
}

