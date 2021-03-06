module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // gradient colors
        "g-dark": "#050023",
        "g-light": "#20175C",
        // buttons
        "b-darkpurple": "#1F1D97",
        "b-brightpurple": "#2213D4",
        "b-darkishpurple": "#020044",
        // headings
        "h-brightgreen": "#2EFB1C",
        // text colors
        "t-darkyellow": "#FDD700",
        // border colors
        "br-lightpurple": "#693fff",
      },
      fontFamily: {
        "rock-salt": ['"Rock Salt"', "cursive"],
        "dm-sans": ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
