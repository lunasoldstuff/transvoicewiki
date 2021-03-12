module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Trans Voice Wiki',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Resources for trans people to help train their voice',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#6f42c1' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Trans Voice Wiki' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'application-name', content: 'Trans Voice Wiki' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#6f42c1' }],
    ['meta', { name: 'msapplication-TileColor', content: '#603cba' }],
    ['script', { src: 'https://twemoji.maxcdn.com/v/latest/twemoji.min.js', crossorigin: 'anonymous' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/lunaisnotaboy/transvoicewiki',
    logo: '/uploads/logo.png',
    editLinks: true,
    docsDir: 'src',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Get Started',
        link: '/start/',
      },
    ],
    sidebar: {
      '/start/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '',
            'starter-resources',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
}
