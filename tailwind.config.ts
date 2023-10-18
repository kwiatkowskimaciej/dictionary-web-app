import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
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
      black: {
        1: '#050505',
        2: '#1f1f1f',
        3: '#2D2D2D',
        4: '#3A3A3A',
      },
      grey: {
        dark: '#757575',
        medium: '#e9e9e9',
        light: '#f4f4f4',
      },
      white: '#fff',
      purple: '#a445ed',
      red: '#FF5252',
    },
  },
  darkMode: 'class',
  fontFamily: {
    sans: 'Inter',
    serif: 'Lora',
    mono: 'Inconsolata',
  },
  plugins: [],
};
export default config;
