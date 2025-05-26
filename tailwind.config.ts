import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#FFFFFF',
      },
    },
  },
  plugins: [],
};

export default config;
