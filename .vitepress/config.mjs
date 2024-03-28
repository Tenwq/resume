import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Wang Qi的简历",
  description: "欢迎访问，这是Wang Qi的个人简历，他是一位从业9年的前端开发工程师。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tenwq/resume' }
    ]
  },
  cleanUrls: true,
  base: "/resume/",
  head: [
    ['link', { rel: 'icon', href: '/resume/favicon.ico' }]
  ],
})
