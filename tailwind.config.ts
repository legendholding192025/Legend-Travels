import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'arial': ['Arial', 'sans-serif'],
      },
      fontSize: {
        'headline': ['35px', { lineHeight: '1.2', fontWeight: 'bold' }],
        'subhead': ['25px', { lineHeight: '1.3', fontWeight: 'bold' }],
        'body': ['12px', { lineHeight: '1.5', fontWeight: 'normal' }],
        'callout': ['8px', { lineHeight: '1.4', fontWeight: 'bold', fontStyle: 'oblique' }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
