/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        ecg: { red: '#ef4444' },
        pocus: { blue: '#3b82f6' },
        drug: { green: '#22c55e' },
        tox: { purple: '#8b5cf6' },
        critical: { orange: '#f97316' },
        board: { gold: '#eab308' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
