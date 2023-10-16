import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      grey: {
        dark: '#757575',
        medium: '#e9e9e9',
        light: '#f4f4f4',
      },
      white: '#fff',
      purple: '#a445ed',
    },
  },
  darkMode: 'class',
  fontFamily: {
    sans: ['Inter'],
    serif: ['Lora'],
    mono: ['Inconsolata'],
  },
  plugins: [],
};
export default config;
