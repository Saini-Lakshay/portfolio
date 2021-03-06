const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      darkGrey: "#1E1E28",
      darkGrey2: "#21202B",
      lightGrey: "#252431",
      white: "#ffffff",
      textGrey: "#686A6F",
      yellow: "#FEC107",
      glass: "rgba(255,255,255,0.2)",
      darkGlass: "rgba(33,33,43, 0.7)",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // ".no-scrollbar::-webkit-scrollbar": {
        //   display: "none",
        // },
        // ".no-scrollbar": {
        //   "-ms-overflow-style": "none",
        //   "scrollbar-width": "none",
        // },
      });
    }),
  ],
};
