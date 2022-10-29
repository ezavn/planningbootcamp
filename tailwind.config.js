/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        white: "#fff",
        black: "#000",
        blue: "#114B8A",
        darkBlue: "#18264C",
        lightBlue1: "#7BD4FF",
        lightBlue2: "#ABE3FF",
      },
      margin: {
        section: "70px",
        sectionMB: "50px",
      },
      spacing: {
        section: "70px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};
