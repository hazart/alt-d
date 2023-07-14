// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'alt-d',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Alt-d' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/reset.stylus',
    '~/assets/styles/variables.stylus',
    '~/assets/styles/global.stylus',
  ],  

  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    /* PWA options */
  }
})
