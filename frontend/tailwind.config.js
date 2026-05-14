module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C1121F",
          black: "#111111",
          light: "#F5F5F5"
        }
      },
      boxShadow: {
        premium: "0 18px 45px rgba(17,17,17,0.12)"
      }
    }
  },
  plugins: []
};
