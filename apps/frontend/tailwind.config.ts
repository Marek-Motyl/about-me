import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        1: "1",
        2: "2",
        3: "3",
      },
      colors: {
        "primary": "rgb(9, 39, 235)", // #0927eb
        "secondary": "rgba(0, 0, 0, 0.75)",
        "base-beige": "rgb(244, 242, 238)" // #f4f2ee
      },
      maxWidth: {
        "maxScreen": "1400px",
        "maxText-xl": "1200px",
        "maxText-lg": "900px",
        "maxText": "750px",
      },
      boxShadow: {
        "active-link": "inset 0 -0.175em rgb(244, 242, 238), inset 0 -0.2em rgb(9, 39, 235)",
      }
    },
  },
  plugins: [],
};
export default config;
