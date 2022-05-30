const { resolve } = require('path')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  mode: 'spa',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'daping',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'js/jquery.min.js' },
      { src: 'js/particles.min.js' },
      { src: 'js/effect.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css',
    '~assets/scss/app.scss'
  ],

  buildModules: [
    '@nuxtjs/composition-api/module'
  ],
  // buildModules: [
  //   '@nuxtjs/style-resources'
  // ],

  // styleResources: {
  //   scss: [
  //     '~assets/scss/app.scss'
  //   ]
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "@/plugin/vue-chartjs",
    // "@/plugin/chart.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [
  //   // https://go.nuxtjs.dev/eslint
  //   '@nuxtjs/eslint-module',
  // ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  router: {
    mode: 'hash'
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (!isDev) {
        // relative links, please.
        config.output.publicPath = './_nuxt/'
      }
      return config
    }
  }
}
