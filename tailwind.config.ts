import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#0d9488', // A strong, modern teal
          'dark': '#115e59',
        },
        'secondary': {
          DEFAULT: '#1f2937', // A sophisticated dark gray for text
        },
        'accent': {
          DEFAULT: '#f97316', // A vibrant, high-contrast orange for CTAs
          'dark': '#ea580c',
        },
        'background': '#ffffff',
        'surface': '#f9fafb',      // A very light gray for section backgrounds
        'border': '#e5e7eb',
        'text-main': '#1f2937',
        'text-light': '#6b7280',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
