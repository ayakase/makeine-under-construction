/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        // adjust speed according to your need
        marquee: 'marquee 60s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-200%)' },
        }
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    }
  },
  plugins: [],
}

