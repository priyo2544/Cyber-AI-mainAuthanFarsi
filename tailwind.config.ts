import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorGreen: "#20C997",
      },
    },
    maxWidth: {
      '7xl': '80rem',
    },
    fontFamily: {
      satoshi: ["var(--font-satoshi)", "sans-serif"],
      hanken: ["var(--font-hanken-grotesk)", "sans-serif"],
      poppins: ["var(--font-poppins)", "sans-serif"],
      inter: ["var(--font-inter)", "sans-serif"],
    }
  },
  plugins: [],
} satisfies Config;
