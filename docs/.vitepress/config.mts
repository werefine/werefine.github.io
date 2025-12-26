import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
const vitepressOptions = {
  title: "WeRefine",
  description: "WeRefine的主页 - 技术、思考",
  lang: "zh-Hans",
  base: '/weref.cn/',
  head: [
    ['link', { rel: 'icon', href: '/weref.cn/ava.jpg', color: '#000000'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '技术', link: '/tech' },
      { text: '关于', link: '/about' }
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
}

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: true
};

export default defineConfig(withSidebar(vitepressOptions, vitePressSidebarOptions))
