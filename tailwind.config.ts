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
          DEFAULT: '#16a34a', // A friendly, trustworthy green
          'light': '#22c55e',
          'dark': '#15803d',
        },
        'secondary': {
          DEFAULT: '#0284c7', // A calm, professional blue
          'light': '#0ea5e9',
        },
        'text-main': '#1f2937',     // Dark gray for main text
        'text-light': '#6b7280',    // Lighter gray for subtext
        'background': '#ffffff',
        'surface': '#f9fafb',      // Off-white for card backgrounds
        'border': '#e5e7eb',
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
