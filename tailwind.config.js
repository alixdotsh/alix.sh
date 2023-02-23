const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Larsseit", defaultTheme.fontFamily.sans],
      },

      'animation': {
        'gradient-x': 'gradient-x 5s ease infinite',
        'gradient-y':'gradient-y 5s ease infinite',
        'gradient-xy':'gradient-xy 5s ease infinite',
      },
      
      'keyframes': {
        'gradient-y': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'center top'
            },

            '50%': {
                'background-size':'200% 200%',
                'background-position': 'center center'
            }
        },

        'gradient-x': {
            '0%, 100%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            },

            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },

        'gradient-xy': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'left center'
            },

            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        }
      },
    }
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.glow-sm': {
          "filter": "drop-shadow(0 0 4px rgba(255,255,255,1))"
        },
        '.glow-md': {
          "filter": "drop-shadow(0 0 6px rgba(255,255,255,1))"
        }
      })
    }),
  ],
}