const highlight = require('./public/js/highlight')

module.exports = {
  title: '徐曙辉个人博客',
  description: '徐曙辉个人博客',
  host: 'localhost',
  port: 3000,
  base: '/',
  dest: './dist',
  plugins: [
    'vuepress-plugin-medium-zoom',
    ['vuepress-plugin-code-copy', {
      align:"bottom",
      color:"#3963bc",
      successText:"复制成功~"
    }]
  ],
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }], ["script", {
      async: true,
      type: "text/javascript",
      src: "https://s9.cnzz.com/z_stat.php?id=1279053128&web_id=1279053128"
    }], ["script", {
      async: true,
      type: "text/javascript",
      src: "https://hm.baidu.com/hm.js?8628fff92d16599a4cb40c15288bf5e3"
    }]
  ],
  chainMarkdown(config) {
    config
      .options
      .highlight(highlight)
      .end()
  },
  themeConfig: {
    sidebarDepth: 0,
    smoothScroll: true,
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '纠正错误',
    repo: "TaleLin/lin-ui-doc",
    logo: '/images/left-logo.png',
    lastUpdated: '上次更新',
    nav: [
      { text: '基础知识', link: '/base/' },
      { text: '编程语言', link: '/code/' },
      { text: '数据库', link: '/database' },
      { text: '书籍', link: '/book' },
      
      { text: '关于我', link: '/about/' },
      {text: 'GitHub',link: 'https://github.com/xushuhui'}
    ],
    sidebar: {
      '/base/': [{
        title: '数据结构',
        collapsable: true,
        children: [
          'datastruct/并查集',
          'datastruct/最大堆',
          'datastruct/AVL树',
        ]
      }, {
        title: '网络协议',
        collapsable: true,
        children: [
          'network-protocol/传输层',
        ]
      }],
      '/code/': [
        {
          title: 'java',
          collapsable: true,
          children: [
            'java/java',
          ]
        },
        {
          title: 'php',
          collapsable: true,
          children: [
            'php/php',
          ]
        },
      ],
    }
  }
}