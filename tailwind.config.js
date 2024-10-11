/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "width-1": "758px",
      },
      height: {
        "height-1": "939px",
        "height-2": "570px",
      },
      fontFamily: {
        Krona: ["Krona One", "sans-serif"],
      },
      colors: {
        "color-1": "#ED1641",
        "color-2": "#870D25",
      },
    },
  },
  plugins: [],
};
