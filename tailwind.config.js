/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        538: "538px",
        505: "505px",
      },
      height: {
        74: "74px",
        109: "109px",
      },
      inset: {
        17: "17px",
        595: "595px",
      },
      boxShadow: {
        navbar: "1.5px 1px 1px 0px #D9D9D91A",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
