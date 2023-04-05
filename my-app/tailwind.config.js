/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#0a0a0a",
          "200": "#030303",
          "300": "#020202",
          "400": "rgba(0, 0, 0, 0.83)",
          "500": "rgba(0, 0, 0, 0.67)",
        },
        darksalmon: "#e48d7a",
        dimgray: "#4f4b6b",
        mistyrose: "rgba(234, 212, 212, 0.37)",
        gainsboro: "rgba(217, 217, 217, 0)",
      },
      fontFamily: {
        roboto: "Roboto",
        "open-sans": "'Open Sans'",
        quicksand: "Quicksand",
        montserrat: "Montserrat",
      },
      borderRadius: { xl: "20px", "65xl": "84px" },
    },
    fontSize: {
      "14xl": "2.06rem",
      "3xl": "1.38rem",
      "16xl": "2.19rem",
      "12xl": "1.94rem",
      "29xl": "3rem",
      "13xl": "2rem",
      "43xl": "3.88rem",
    },
  },
  corePlugins: { preflight: false },
};
