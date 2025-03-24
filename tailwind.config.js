/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Slab"],
      },
      colors: {
        primary: "#10A79C",
        footer: "#64748B",
      },
    },
  },
  plugins: [],
};
