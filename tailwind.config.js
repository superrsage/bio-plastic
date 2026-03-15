const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1f2937',
        pink: '#ec4899',
        coral: '#ef4444',
        cream: '#fef9f3',
      },
      fontFamily: {
        sans: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
