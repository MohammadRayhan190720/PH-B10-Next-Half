/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontRancho: ["Rancho", "cursive"],
      },
      backgroundImage: {
        banner: "url('./assets/images/more/6.jpeg')",
      },
    },
  },
  plugins: [daisyui],
};

