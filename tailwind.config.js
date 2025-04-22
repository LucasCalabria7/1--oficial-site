/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6EDF7',
          500: '#4169E1',
          800: '#1E3A8A',
          900: '#0B1B3F'
        },
        secondary: {
          50: '#F0F7FF',
          100: '#E6F0FF',
          500: '#87CEEB',
          800: '#1E40AF'
        },
        dark: {
          100: '#E6E6E6',
          200: '#CCCCCC',
          800: '#1A1A1A',
          900: '#0D0D0D'
        },
        gold: {
          400: '#FFE44D',
          500: '#D4AF37'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        dark: '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
        gold: '0 4px 6px -1px rgba(212, 175, 55, 0.3)',
        premium: '0 10px 25px -5px rgba(11, 27, 63, 0.1)'
      },
      backgroundImage: {
        'gradient-button': 'linear-gradient(to right, #D4AF37, #FFE44D)',
        'gradient-dark': 'linear-gradient(to bottom, #0B1B3F, #1A1A1A)',
        'gradient-primary': 'linear-gradient(135deg, #0B1B3F 0%, #1E3A8A 100%)'
      }
    }
  },
  plugins: [],
}