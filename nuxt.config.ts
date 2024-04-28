export default {
  nitro: {
    preset: 'vercel-edge',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-icon'
  ],
  head: {
    title: 'The Oddward Garden',
    link: [
      { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=beVietnam-pro@1,2&f[]=satoshi@1,2&display=swap' },
    ],
  },
  css: [
    '@/assets/css/theme.scss'
    // '@/assets/css/tailwind.css'
  ]
};
