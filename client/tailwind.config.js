/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
      },
      colors: {
        amazon_blue: "#131921",
        amazon_light: "#232f3e",
        amazon_yellow: "#febd69",
        whiteText: "#ffffff",
        lightText: "#ccc",
        quantity_box: "#f0f2f2",
        footerBottom: "#131A22",
      },
      boxShadow: {
        shadow: "0px 0 25px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
