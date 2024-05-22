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
      colors: {
        green01: '#6ABE45',
        green02: '#A6DF8D',
        green03: '#8ede6b',
        bgPrimary: '#f7fbf5',
        mainText: '#121b0e',
        mainGray: '#4C4C4C',
      },
    },
  },
  plugins: [],
};
export default config;
