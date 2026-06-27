import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        medical: {
          navy: '#071827',
          slate: '#0f2537',
          teal: '#0f766e',
          emerald: '#10b981',
          glow: '#22d3ee',
          burgundy: '#9f1239',
        },
      },
      boxShadow: {
        glow: '0 0 35px rgba(16, 185, 129, 0.25)',
        glass: '0 20px 50px rgba(2, 6, 23, 0.18)',
      },
      backgroundImage: {
        'medical-gradient': 'linear-gradient(135deg, #071827 0%, #0f2537 45%, #0f766e 100%)',
        'button-gradient': 'linear-gradient(135deg, #10b981 0%, #0f766e 50%, #22d3ee 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
