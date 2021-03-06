export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css'
      }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js',
        async: true,
        defer: true
      }
    ],
    bodyAttrs: {
      class: [
        'font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear '
      ]
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#41B883' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/init.js',
    '~/plugins/directives',
    '~/plugins/intersection-observer.client.js',
    '~/plugins/vue-observe-visibility.client.js',
    '~/plugins/ga.client.js',
    '~/plugins/adblock.client.js',
    '~/plugins/newsletter.client.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['~/modules/docs/', { port: 3001 }],
    '~/modules/crawler/',
    '~/modules/static/',
    '~/modules/components/',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/netlify-files-module
    '@nuxtjs/netlify-files',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/Developmint/nuxt-svg-loader/
    'nuxt-svg-loader',
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://http.nuxtjs.org
    '@nuxt/http',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  colorMode: {
    preference: 'light' // disable system
  },
  http: {
    proxy: true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
