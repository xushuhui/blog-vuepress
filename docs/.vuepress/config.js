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
    }],
    '@vuepress/blog',{
      directories: [
        {
          // Unique ID of current classification
          id: 'post',
          // Target directory
          dirname: '_posts',
          // Path of the `entry page` (or `list page`)
          path: '/',
        },
      ],
    },
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

    lastUpdated: '上次更新',
    nav: [
      { text: '基础知识', link: '/base/' },
      { text: '编程语言', link: '/code/' },
      { text: '数据库', link: '/database/' },
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
          title: 'node',
          collapsable: true,
          children: [
            'node/node新手课（0）项目介绍',
            'node/node新手课（1）nodejs 下载安装',
            'node/node新手课（2）Hello World',
            'node/node新手课（3）nodejs 和 javascript 区别',
            'node/node新手课（4）nodejs处理http请求',
            'node/node新手课（5）callback-promise和async-await',
            'node/node新手课（6）项目需求分析和展示',
            'node/node新手课（7）搭建项目，配置开发环境',
            'node/node新手课（8）路由',
            'node/node新手课（9）nodejs操作mysql',
            'node/node新手课（10）nodejs操作redis',
            'node/node新手课（11）微信小程序登录',
            'node/node新手课（12）手机登录',
            'node/node新手课（13）用户信息',
            'node/node新手课（14）修改用户信息',
            'node/node新手课（15）图片上传',
            'node/node新手课（16）打卡',
            'node/node新手课（17）点赞',
            'node/node新手课（18）首页列表',
            'node/node新手课（19）项目打包和部署',
          ]
        },
        {
          title: 'go',
          collapsable: true,
          children: [
            'go/go',
          ]
        },
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
      '/database/':[{
          title: 'node',
          collapsable: true,
          children: [
            'mysql/mysql基础（1）字段类型',
            'mysql/mysql基础（2）存储引擎',
            'mysql/mysql基础（3）事务',
            'mysql/mysql基础（4）执行计划',
            'mysql/mysql基础（5）索引'
          ]
      }
      ]
    }
  }
}