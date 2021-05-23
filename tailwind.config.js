module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    columnCount: [1, 2, 3],
    extend: {
      spacing: {
        25: "25%",
      },
      transitionDuration: {
        0: "0ms",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
    width: ["responsive", "hover", "focus"],
    columnCount: ["responsive"],
  },
  plugins: [require("@tailwindcss/forms")],
};
