import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sf)", "sans-serif"],
        fixel: ["var(--font-fixel)", "sans-serif"],
      },
      colors: {
        "brand-green": "#85AA9F",
        "brand-black": "#121417",
        "brand-gray": "rgba(18, 20, 23, 0.1)",
        "brand-light": "#F8F8F8",
      },
    },
  },
  plugins: [],
};

export default config;
