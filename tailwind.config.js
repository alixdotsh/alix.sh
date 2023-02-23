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
        larsseit: ["larsseit"],
        larsseitbold: ["larsseitbold"],
        larsseitbolditalic: ["larsseitbolditalic"],
        larsseititalic: ["larsseititalic"],
        opensans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
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
    require('tailwindcss-bg-patterns')
  ],
}