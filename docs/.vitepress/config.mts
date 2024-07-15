import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }]],
  title: "KK Blog",
  description: "Blog",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts' },
      { text: 'About', link: '/about' },
      { text: 'Friends', link: '/friends' },
      { text: 'Status', link: 'https://l.betteruptime.com/' }
    ],

    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/htb/': [
        {
          text: 'Hack The Box',
          items: [
            { text: 'Index', link: '/htb/' },
            { text: 'Pro Labs: Dante', link: '/htb/dante' }
          ]
        }
      ],
      '/thm/': [
        {
          text: 'TryHackMe',
          items: [
            { text: 'Index', link: '/thm/' },
            { text: 'TryHack3M: Bricks Heist', link: '/thm/tryhack3mbricksheist' }
          ]
        }
      ],
      '/offsec/': [
        {
          text: 'TryHackMe',
          items: [
            { text: 'Index', link: '/thm/' },
            { text: 'TryHack3M: Bricks Heist', link: '/thm/tryhack3mbricksheist' }
          ]
        }
      ],
      '/other/': [
        {
          text: 'Other',
          items: [
            { text: 'Index', link: '/other/' },
            { text: 'Nessus', link: '/other/Nessus' },
            { text: 'OpenVPN', link: '/other/Socks5-Proxy-On-OpenVPN' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/offsec/' },
      { icon: 'github', link: 'https://github.com/RBPi' }
    ],

    footer: {
      message: '❤️💕',
      copyright: 'Copyright © 2017-2024 KK'
    },

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },
  markdown: {
    lineNumbers: true
  }
})