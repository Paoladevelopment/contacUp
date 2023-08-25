import scrollbarPlugin from 'tailwind-scrollbar';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '9/10': '90%',
        '1/10': '10%',
      },
      width: {
        '9/10': '90%',
        '4/5': '80%',
        '7/10': '70%',
      },
      flexBasis: {
        '4/5': '80%',
        '1/5': '20%',
      },
      colors: {
        'hawkes-blue': {
          50: '#fcfeff',
          100: '#f5fdff',
          200: '#f7fbff',
          300: '#f2f7ff',
          400: '#e8eeff',
          500: '#dee2ff',
          600: '#b3b9e6',
          700: '#7c83bf',
          800: '#505799',
          900: '#2d3373',
          950: '#12174a',
        },
        'dark-blue': {
          50: '#f5faff',
          100: '#ebf4ff',
          200: '#cfe2ff',
          300: '#b0c9ff',
          400: '#728bfc',
          500: '#383ffc',
          600: '#2d33e3',
          700: '#1e23bd',
          800: '#141896',
          900: '#0b0d73',
          950: '#04064a',
        },
        shark: {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#c7c6c5',
          300: '#a6a5a4',
          400: '#636261',
          500: '#222121',
          600: '#1f1b1b',
          700: '#1a1313',
          800: '#140c0c',
          900: '#0f0707',
          950: '#0a0303',
        },
      },
    },
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
  },
  plugins: [scrollbarPlugin({ nocompatible: true })],
};
