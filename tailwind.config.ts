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
        sans: ["var(--font-bangla)", "var(--font-fredoka)", "sans-serif"],
        bangla: ["var(--font-bangla)", "var(--font-fredoka)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
