/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollUp: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-175%)" },
        },
      },
      animation: {
        scrollUp: "scrollUp 20s linear infinite",
        scrollDown: "scrollUp 20s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
