import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-black": "#121417",
        "brand-green": "#85AA9F",
        "brand-white": "#FCFCFC",
        "brand-gray": "#F8F8F8",
      },
      fontFamily: {
        sans: ["var(--font-fixel)", "sans-serif"],
        secondary: ["var(--font-sf)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
