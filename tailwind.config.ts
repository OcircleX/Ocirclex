import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xsss: '6px',
        xs7: '7px',
        xs: '8px',
        smm: '0.43rem',
        sm3: '0.53rem',
        xss: '0.63rem',
        sm: '0.75rem',
        sbase: '13px',
        base: '0.87rem',
        basee: '1rem',
        xl: '1.25rem',
        xxl: '1.85rem',
        '2xl': '2.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '10xl': '6.052rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      letterSpacing: {
        ultra: "-1px", // Custom spacing
      },
    },
  },
  plugins: [],
} satisfies Config;
