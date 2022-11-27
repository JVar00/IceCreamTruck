/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Prompt", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        pinktruck: "#E86EB5",
      },
    },
  },
  plugins: [],
};
