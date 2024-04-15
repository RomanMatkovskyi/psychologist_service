/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#FBFBFB",
        mainBlack: "#191A15",
        mainOrange: "#FC832C",
        mainWhite: "#FBFBFB",
        hoverOrange: "#F37113",
      },
      spacing: {
        74: "1184px",
      },
    },
  },
  plugins: [],
};
