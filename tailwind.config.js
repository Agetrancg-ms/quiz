/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'theme-default', 'theme-high-contrast', 'theme-calm', 'theme-dark',
    'text-normal', 'text-large', 'text-extra-large'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      screens: {
        'xs': '375px',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      fontSize: {
        'normal': '1rem',
        'large': '1.25rem',
        'extra-large': '1.5rem',
      },
    },
  },
  plugins: [],
}