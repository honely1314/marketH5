const pkg = require('./package')

module.exports = {
  mode: 'universal',
  env:{
    PATH_TYPE: process.env.PATH_TYPE
  },
  /*
  ** Headers of the page
  */
  head: {
    //title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      //{ name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=1.0' },
      //{ hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      //{ rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }
    ],
    script: [
        { src: '/js/flexible.js' },
        { src: '//api.map.baidu.com/api?v=2.0&ak=KD82S4nts9LL7M5fkW4ENIEn3HumEhct' },
        { src: '/js/config.js' },
      ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/base.css',
    '@/assets/style/border.css',
    '@/assets/style/fonts/fonts.css',
    'swiper/dist/css/swiper.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/vue-swiper.js", ssr: false },
    { src: "~/plugins/vue-config.js", ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
    //prefix: '/api/'
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*proxy: {
    '/controller/carSearch/searchCarInfoDoc': {
      target: 'https://testclient.anpxd.com/controller/carSearch/searchCarInfoDoc',
      pathRewrite: {
        '^/controller/carSearch/searchCarInfoDoc' : '/'
        }
    }
  },*/
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    /*extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },*/
    vendor: ['axios']
  }
}
