/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: {
          DEFAULT: "#22272F", // base color
          500: "#22272F", // specific shade (you can adjust the shades as needed)
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
      },
      fontSize: {
        "18px": "18px",
      },
      fontWeight: {
        bold: 700,
        medium: 500,
      },

      fontSize: {
        "24px": "24px", // This won't work in Tailwind CSS
        "custom-24": "24px", // Use a custom name and define it in CSS
      },
      fontWeight: {
        medium: 500,
      },
    },
  },
  plugins: [],
};
