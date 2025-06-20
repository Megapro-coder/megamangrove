/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mangrove': {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8dd28d',
          400: '#5bb85b',
          500: '#2D5A27',
          600: '#254822',
          700: '#1e3a1e',
          800: '#182f18',
          900: '#142714',
        },
        'lagoon': {
          50: '#f0fffe',
          100: '#ccfef8',
          200: '#99fdf3',
          300: '#5cfaec',
          400: '#20B2AA',
          500: '#1a9b95',
          600: '#158078',
          700: '#126560',
          800: '#10504e',
          900: '#0f4341',
        },
        'tropical-gold': '#D4AF37',
        'charcoal': '#2C2C2C',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}