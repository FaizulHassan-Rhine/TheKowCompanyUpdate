/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'tag-font' : ['Rubik Doodle Shadow', 'system-ui']
    },
    container: {

      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '20px',
        xl: '20px',
        '2xl': '20px',
      },

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'kow-shadow': '-3px 3px 7px gray',
        'kow-shadow-sm': '5px 5px 5px #818181'
      },
      colors: {
        'kow-gray-light': '#dde1e1', 
        'kow-green': '#7c9c30',
        'kow-green-light': '#b1cc40',
        'kow-text-black': '#333333',
      },
    },
  },
  plugins: [],
}