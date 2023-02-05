/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-int-primary',
    'bg-int-secondary',
    'bg-int-tertiary',
    'bg-usa-primary',
    'bg-usa-secondary',
    'bg-usa-tertiary',
    'text-int-primary',
    'text-int-secondary',
    'text-int-tertiary',
    'text-usa-primary',
    'text-usa-secondary',
    'text-usa-tertiary',
  ],
  theme: {
    extend: {
      colors: {
        'int-primary': '#ffcb03',
        'int-secondary': '#000',
        'int-tertiary': '#18181b',
        'usa-primary': '#B31942',
        'usa-secondary': '#0A3161',
        'usa-tertiary': '#fff',
      },
    },
  },
  plugins: [],
};
