import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/new-logo-htb.svg' }]],
  title: "Huge's Blog",
  description: "Security",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/index' },
      { text: 'About Me', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Hack The Box',
        items: [
          { text: 'Hack The Box', link: '/' }
        ]
      },
      {
        text: 'TryHackMe',
        items: [
          { text: 'TryHackMe', link: '/' }
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'Nessus', link: '/posts/Nessus' }
        ]
      }
      ,
      {
        text: 'Wireless',
        items: [
          { text: 'Wireless', link: '/posts/Wireless' }
        ]
      }
      ,
      {
        text: 'To-Do',
        items: [
          { text: 'Need update', link: '/posts/' }
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
