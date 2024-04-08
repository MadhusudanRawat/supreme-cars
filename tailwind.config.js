/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ee2737",
      },
      boxShadow: {
        regular: "0 7px 29px 0 rgba(100 100 111 / 20%)",
        plCard: "0 8px 12px 0 rgba(149 157 165 / 20%)",
        bnCard: "0 0 8px 0 rgba(0 0 0 / 15%)",
        dark: "0 0 12px 0 rgba(0 0 0 / 20%)",
      },
    },
  },
  plugins: [],
};
