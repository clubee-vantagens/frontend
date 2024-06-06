/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundColor: {
        background__primary: "#F4EAA6",
        background__secondary: "#FFFAEB",
        background__button: "#6FF79A",
        background__button__white: "#FFF"
      },
    },
  },
  plugins: [],
};
