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
        "primary": "#0927eb",
        "secondary": "rgba(0, 0, 0, 0.75)",
        "base-beige": "#f4f2ee"
      },
      maxWidth: {
        "maxScreen": "1400px",
        "maxText-xl": "1200px",
        "maxText-lg": "900px",
        "maxText": "750px",
      }
    },
  },
  plugins: [],
};
export default config;
