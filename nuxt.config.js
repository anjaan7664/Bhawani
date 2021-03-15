import i18n from './plugins/i18n';
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bhawani Industries Jodhpur',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Bhawani Industries is Exporter, Manufacturer & Supplier of guar gum products in Jodhpur(Raj.)'
      },
      {
        hid: 'keywords',
        name: "keywords",
        content: "guar gum, guar gum powder, organic guar gum, food grade guar gum, fast hydration guar gum, Jodhpur, Rajasthan, India"
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Lobster&family=Merriweather:wght@300&family=Montserrat&family=Poppins:wght@400;800&family=Teko&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~/plugins/aos.client.js',
  }, {
    src: '~/plugins/photoSwipe.js',
    mode: 'client'
  }, {
    src: '~/plugins/carousel.js',
    mode: 'client'
  }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-i18n', {
      locales: [{
          name: 'English',
          code: 'en',
          iso: 'en-US'
        },
        {
          name: 'Hindi',
          code: 'hi',
          iso: 'hi-IN'
        },

      ],
      defaultLocale: 'en',
      vueI18n: i18n
    }]
  ],
  googleAnalytics: {
    id: 'G-7JHM3683BX'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

};
