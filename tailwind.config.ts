import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing:{
      tighter: '-0.05em',
    },
    extend: {
      fontFamily: {
        'serif': ['Satoshi', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
