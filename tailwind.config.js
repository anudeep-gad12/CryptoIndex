const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      grey: {
        extralight: "#f3f4f6",
        light: "#d1d5db",
        regular: "#4b5563",
        dark: "#111827",
        alwhite: "#f9fafb",
      },
      accent: {
        dark: "#312e81",
        light: "#4338ca",
        regular: "#3730a3",
      },
      other: {
        red: "#dc2626",
        green: "#16a34a",
      },
      fontSize: {
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      vsm: { max: "400px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
    plugins: [
      plugin(function ({ addVariant }) {
        // Add a `all` variant, ie. `third:pb-0`
        addVariant("allchild", "& > *");
      }),
    ],
  },
  plugins: [],
};
