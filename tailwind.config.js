/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      colors: {
        primary: "#50FE8B",
        darkPrimary: "#00392C",
        greyPrimary: "#718096",
        darkGreyPrimary: "#667085",
        dark: "#111827",
        secondary: "#1C1C1C",
        lightSecondary: "#484848",
        darkGreen: "#005944",
        light: "#BFD5D1",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
