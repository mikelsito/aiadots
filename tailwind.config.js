/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
    },
    extend: {
      fontFamily: {
        godfather: "TheGodfather-v2",
      },
      colors: {
        gfblack: "#030303",
        gfred: "#912411",
        gfredlight: "#b12c15",
        gfgold: "#C6A25A",
        gfbrown: "#A46329",
        gfgrey: "#D3CFC3",
      },
      dropShadow: {
        white: "2px 2px 2px #fff",
        "white-sm": "1px 1px 1px #fff",
        black: "2px 2px 2px #030303",
        "black-sm": "1px 1px 1px #030303",
      },
    },
  },
  plugins: [],
};
