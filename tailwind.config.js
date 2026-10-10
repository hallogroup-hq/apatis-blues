/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FAF3F4',
          100: '#F4E5E8',
          200: '#E9CCD2',
          300: '#D7A7B1',
          400: '#BE7686',
          500: '#9E3C51',
          600: '#871F30',
          700: '#661522',
          800: '#4A0E17',
          900: '#2D070D',
          950: '#140407',
          noir: '#0B0204',
          velvet: '#190408',
          wine: '#2B060E',
          accent: '#A6283D',
          rose: '#DFA3AB',
        },
        noir: {
          950: '#070102',
          900: '#0B0204',
          800: '#130407',
          700: '#1B060B',
          600: '#260910',
        },
        bone: {
          50: '#FBF9F5',
          100: '#F4EFEB',
          200: '#E5DED5',
          300: '#C7BEB3',
          400: '#9E9487',
          500: '#6B6256',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        'apple-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'apple-spring': 'cubic-bezier(0.32, 0.72, 0, 1)',
      }
    },
  },
  plugins: [],
}
