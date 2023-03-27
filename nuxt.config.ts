export default {
  nitro: {
    preset: 'vercel-edge',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-icon'
  ],
  app: {
    head: {
      link: [
        { rel:'icon', sizes:'152', type:'image/png', href:'/favicon-152.png' },
        { rel:'apple-touch-icon', sizes:'180', type:'image/png', href:'/favicon-180.png' },
        { rel:'icon', sizes:'512', type:'image/png', href:'/favicon-512.png' },
        { rel:'icon', sizes:'any', type:'image/svg+xml', href:'/favicon.svg' },
        { rel:'icon', sizes:'any', type:'image/x-icon', href:'/favicon-32.ico' }
      ],
      noscript: [
        { children: 'Please enable Javascript to ensure the site works properly' }
      ]
    }
  }
};
