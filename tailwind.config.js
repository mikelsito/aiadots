/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        godfather: "TheGodfather-v2",
      },
      colors: {
        gfblack: "#030303",
        gfred: "#912411",
        gfgold: "#C6A25A",
        gfbrown: "#A46329",
        gfgrey: "#D3CFC3",
      },
    },
  },
  plugins: [],
};
