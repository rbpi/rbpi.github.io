import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/new-logo-htb.svg' }]],
  title: "♾️ Huge's Blog",
  description: "Notes",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/index' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Hack The Box',
        items: [
          { text: 'Summary', link: '/posts/htb/index.md' },
          { text: 'Pro Labs: Dante', link: '/posts/htb/dante.md' }
        ]
      },
      {
        text: 'TryHackMe',
        items: [
          { text: 'Summary', link: '/posts/thm/index.md' }
        ]
      },
      {
        text: 'Offsec',
        items: [
          { text: 'Wireless Network Attacks', link: '/posts/Wireless-Network-Attacks' },
          { text: 'CTP', link: '/posts/OSCE' }
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'Nessus', link: '/posts/Nessus' }
        ]
      },
      {
        text: 'Linux',
        items: [
          { text: 'OpenVPN', link: '/posts/Socks5-Proxy-On-OpenVPN' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/offsec/' },
      { icon: 'github', link: 'https://github.com/RBPi' }
    ],

    footer: {
      message: '❤️💕',
      copyright: 'Copyright © 2017-2024 Huge'
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
  }
})
