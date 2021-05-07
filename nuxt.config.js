import store from './store'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ivan-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap/dist/css/bootstrap-reboot.min.css',
    '~/assets/styles/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/i18n.ts' }],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
  ],

  i18n: {
    locales: [
      { code: 'en', dir: 'ltr' },
      { code: 'ar', dir: 'rtl' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix',
    // locale: localStorage.getItem('i18n') || 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      // onlyOnRoot: true, // recommended
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          destination: 'Enter Destination',
          routes: 'Routes',
          tripInfo: {
            name: 'Trip Info.',
            id: '#ID',
            destination: 'Destination Stop',
            route: 'Route Name',
            confirm: 'Confirm',
          },
        },
        ar: {
          destination: 'ادخل الوجهة',
          routes: 'الطرق',
          tripInfo: {
            name: 'تفاصيل الرحلة',
            id: '#ID',
            destination: 'الوجهة',
            route: 'الطريق',
            confirm: 'تأكيد',
          },
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js'),
    },
  },
  buildDir: 'nuxt-dist',
  target: 'static',
  generate: { subFolders: true },
  router: { base: '/', middleware: ['setlocale'] },
  mode: 'universal',
}
