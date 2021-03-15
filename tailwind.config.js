module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '340px',
      },
      colors: {
        'primary': '#DE2F4F',
        'secondary': '#008E99',
        'accent': '#D66C3D',
        'red': '#FF0000',
        'black-light': '#171717',
        'black-medium': '#111111',
        'nav-color': '#141E30',
      },
      fontFamily: {
        'Libre': ['Libre Baskerville', 'sans'],
        'teko': ['Teko', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Merriweather': ['Merriweather', 'serif'],
        'Lobster': ['Lobster', 'cursive'],
      },
      height: {
        '80': '400px',
      }
    },
  },
  variants: {
    background: ['responsive', 'hover', 'focus', 'active']
  },

  plugins: [
    function ({
      addComponents
    }) {
      addComponents({
        // '.container': {
        //   '@screen xl': {
        //     maxWidth: '85%',
        //   },
        //   '@screen md': {
        //     maxWidth: '85%',
        //   },
        // }
      });
    }
  ]
};