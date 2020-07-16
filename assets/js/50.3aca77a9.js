(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{459:function(t,a,v){"use strict";v.r(a);var _=v(49),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"mysql架构类问题之mmm架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql架构类问题之mmm架构"}},[t._v("#")]),t._v(" mysql架构类问题之MMM架构")]),t._v(" "),v("h2",{attrs:{id:"mmm-和-mha-架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mmm-和-mha-架构"}},[t._v("#")]),t._v(" MMM 和 MHA 架构")]),t._v(" "),v("h3",{attrs:{id:"mmm-和-mha-架构的作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mmm-和-mha-架构的作用"}},[t._v("#")]),t._v(" MMM 和 MHA 架构的作用")]),t._v(" "),v("ul",[v("li",[t._v("对主从复制集群的 master 进行监控")]),t._v(" "),v("li",[t._v("当 master 宕机后把写 VIP 迁移到新 master")]),t._v(" "),v("li",[t._v("重新配置集群中其他 slave 对新的 master 同步")])]),t._v(" "),v("h2",{attrs:{id:"mmm-架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mmm-架构"}},[t._v("#")]),t._v(" MMM 架构")]),t._v(" "),v("h3",{attrs:{id:"适用的主从复制架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#适用的主从复制架构"}},[t._v("#")]),t._v(" 适用的主从复制架构")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v(" 主  --  主备\n/ | \\\n")])])]),v("p",[t._v("从 1 从 2 从 3")]),t._v(" "),v("h3",{attrs:{id:"故障转移步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#故障转移步骤"}},[t._v("#")]),t._v(" 故障转移步骤")]),t._v(" "),v("h4",{attrs:{id:"slave-服务器上的操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#slave-服务器上的操作"}},[t._v("#")]),t._v(" slave 服务器上的操作")]),t._v(" "),v("ul",[v("li",[t._v("完成原 master 上已复制日志的恢复")]),t._v(" "),v("li",[t._v("适用 change master 命令配置新 master")])]),t._v(" "),v("h4",{attrs:{id:"主备服务器上的操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主备服务器上的操作"}},[t._v("#")]),t._v(" 主备服务器上的操作")]),t._v(" "),v("ul",[v("li",[t._v("设置 read_only=off")]),t._v(" "),v("li",[t._v("迁移写 vip 到新 master")])]),t._v(" "),v("h3",{attrs:{id:"架构需要的资源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构需要的资源"}},[t._v("#")]),t._v(" 架构需要的资源")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("资源")]),t._v(" "),v("th",[t._v("数量")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("主 DB")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("用于主备模式的主主复制配置")])]),t._v(" "),v("tr",[v("td",[t._v("从 DB")]),t._v(" "),v("td",[t._v("0-N")]),t._v(" "),v("td",[t._v("可以配置 0 台或多台从服务器")])]),t._v(" "),v("tr",[v("td",[t._v("IP 地址")]),t._v(" "),v("td",[t._v("2n+1")]),t._v(" "),v("td",[t._v("N 为 MySQL 服务器数量")])]),t._v(" "),v("tr",[v("td",[t._v("监控用户")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("用于监控数据库状态的 MySQL 用户（replication client）")])]),t._v(" "),v("tr",[v("td",[t._v("代理用户")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("用于 MMM 的 agent 端改变 read_only 状态（super，replication client，process）")])]),t._v(" "),v("tr",[v("td",[t._v("复制用户")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("用于配置数据库状态的 MySQL 用户（replication slave）")])])])]),t._v(" "),v("h3",{attrs:{id:"架构配置步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构配置步骤"}},[t._v("#")]),t._v(" 架构配置步骤")]),t._v(" "),v("ul",[v("li",[t._v("配置主主复制的集群架构")]),t._v(" "),v("li",[t._v("安装 centos 的 YUM 扩展包")]),t._v(" "),v("li",[t._v("安装所需的 Perl 支持包")]),t._v(" "),v("li",[t._v("安装 MMM 工具包")]),t._v(" "),v("li",[t._v("配置并启用 MMM 服务")])]),t._v(" "),v("h3",{attrs:{id:"架构优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构优点"}},[t._v("#")]),t._v(" 架构优点")]),t._v(" "),v("ul",[v("li",[t._v("提供了读写 VIP 配置，使读写请求都可以达到高可用")]),t._v(" "),v("li",[t._v("工具包相对完善，不需要额外开发脚本")]),t._v(" "),v("li",[t._v("完成故障转移后，可以持续对 MySQL 集群进行高可用监控")])]),t._v(" "),v("h3",{attrs:{id:"架构缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构缺点"}},[t._v("#")]),t._v(" 架构缺点")]),t._v(" "),v("ul",[v("li",[t._v("故障切换简单粗暴易丢事务（主备使用 5.7 以后的半同步复制）")]),t._v(" "),v("li",[t._v("不支持 GTID 的复制方式（自行修改 perl 脚本实现）")]),t._v(" "),v("li",[t._v("社区不活跃，很久未更新版本")])]),t._v(" "),v("h3",{attrs:{id:"架构适用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构适用场景"}},[t._v("#")]),t._v(" 架构适用场景")]),t._v(" "),v("ul",[v("li",[t._v("使用基于日志点的主从复制方式")]),t._v(" "),v("li",[t._v("使用主主复制架构")]),t._v(" "),v("li",[t._v("需要考虑读高可用的场景")])]),t._v(" "),v("h2",{attrs:{id:"欢迎扫描下方二维码，个人博客，持续关注："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#欢迎扫描下方二维码，个人博客，持续关注："}},[t._v("#")]),t._v(" 欢迎扫描下方二维码，"),v("a",{attrs:{href:"https://www.phpst.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人博客"),v("OutboundLink")],1),t._v("，持续关注：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://ww1.sinaimg.cn/large/a616b9a4gy1g4xzv954a4j20760763yo.jpg",alt:""}})]),t._v(" "),v("p",[t._v("互联网工程师（id:phpstcn），我们一起学习，一起进步")])])}),[],!1,null,null,null);a.default=r.exports}}]);