import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      letterSpacing: {
        ultra: "-1px", // Custom spacing
      },
      keyframes: {
        dropdown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        dropdown: 'dropdown 0.3s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
