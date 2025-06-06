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
          100: '#E6EAF9',
          300: '#576ced', // New light blue
          500: '#0321d6', // New medium blue
          700: '#051473', // New dark blue
          900: '#030A40'
        },
        dark: {
          100: '#E6E6E6',
          200: '#CCCCCC',
          800: '#051473', // Using new dark blue
          900: '#030A40'  // Darker shade of dark blue
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        dark: '0 4px 6px -1px rgba(5, 20, 115, 0.5)',
        premium: '0 10px 25px -5px rgba(5, 20, 115, 0.2)'
      },
      backgroundImage: {
        'gradient-button': 'linear-gradient(45deg, #051473, #0321d6, #576ced)',
        'gradient-dark': 'linear-gradient(to bottom, #051473, #030A40)',
        'gradient-primary': 'linear-gradient(135deg, #051473 0%, #0321d6 100%)'
      }
    }
  },
  plugins: [],
}