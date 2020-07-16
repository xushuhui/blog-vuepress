(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{457:function(t,_,v){"use strict";v.r(_);var a=v(49),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"mysql架构类问题之mgr架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql架构类问题之mgr架构"}},[t._v("#")]),t._v(" mysql架构类问题之MGR架构")]),t._v(" "),v("h2",{attrs:{id:"mgr-复制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mgr-复制"}},[t._v("#")]),t._v(" MGR 复制")]),t._v(" "),v("h3",{attrs:{id:"定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),v("ul",[v("li",[t._v("MGR（MySQL Group Repliacation）")]),t._v(" "),v("li",[t._v("官方退出的一种基于 paxos 协议的复制")]),t._v(" "),v("li",[t._v("是一种不同于异步复制的多 master 复制集群")])]),t._v(" "),v("h3",{attrs:{id:"两种模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#两种模式"}},[t._v("#")]),t._v(" 两种模式")]),t._v(" "),v("h4",{attrs:{id:"单主模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单主模式"}},[t._v("#")]),t._v(" 单主模式")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v(" app\n/ | \\\n")])])]),v("p",[t._v("主 1 主 2 主 3\n（读写）（读）（读）")]),t._v(" "),v("ul",[v("li",[t._v("group_replication_single_primary_mode=ON")])]),t._v(" "),v("h4",{attrs:{id:"多主模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多主模式"}},[t._v("#")]),t._v(" 多主模式")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v(" app\n/ | \\\n")])])]),v("p",[t._v("主 1 主 2 主 3\n（读写）（读写）（读写）")]),t._v(" "),v("ul",[v("li",[t._v("group_replication_single_primary_mode=OFF")])]),t._v(" "),v("h3",{attrs:{id:"架构需要的资源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构需要的资源"}},[t._v("#")]),t._v(" 架构需要的资源")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("集群大小")]),t._v(" "),v("th",[t._v("投票数")]),t._v(" "),v("th",[t._v("允许宕机数量")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("7")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("3")])]),t._v(" "),v("tr",[v("td",[t._v("8")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",[t._v("3")])]),t._v(" "),v("tr",[v("td",[t._v("9")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",[t._v("4")])])])]),t._v(" "),v("h3",{attrs:{id:"架构配置步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构配置步骤"}},[t._v("#")]),t._v(" 架构配置步骤")]),t._v(" "),v("ul",[v("li",[t._v("安装 group_replication 插件")]),t._v(" "),v("li",[t._v("在第一个实例上建立复制用户")]),t._v(" "),v("li",[t._v("配置第一个组实例")]),t._v(" "),v("li",[t._v("把其他实例加到组")])]),t._v(" "),v("h3",{attrs:{id:"架构优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构优点"}},[t._v("#")]),t._v(" 架构优点")]),t._v(" "),v("ul",[v("li",[t._v("group replication 组内成员间基本无延迟")]),t._v(" "),v("li",[t._v("可以支持多写操作，读写服务高可用")]),t._v(" "),v("li",[t._v("数据强一致，可以保证不丢失事务")])]),t._v(" "),v("h3",{attrs:{id:"架构缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构缺点"}},[t._v("#")]),t._v(" 架构缺点")]),t._v(" "),v("ul",[v("li",[t._v("只支持 InnoDB 存储引擎的表，并且每个表必须有一个主键")]),t._v(" "),v("li",[t._v("单主模式下很难确认下一个主键")]),t._v(" "),v("li",[t._v("只能用在 GTID 模式的复制形式下，且日志格式必须是 row")])]),t._v(" "),v("h3",{attrs:{id:"架构适用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构适用场景"}},[t._v("#")]),t._v(" 架构适用场景")]),t._v(" "),v("ul",[v("li",[t._v("对主从延迟十分敏感的应用场景")]),t._v(" "),v("li",[t._v("希望可以对读写提供高可用的场景")]),t._v(" "),v("li",[t._v("希望可以保证数据强一致的场景")])]),t._v(" "),v("h2",{attrs:{id:"欢迎扫描下方二维码，个人博客，持续关注："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#欢迎扫描下方二维码，个人博客，持续关注："}},[t._v("#")]),t._v(" 欢迎扫描下方二维码，"),v("a",{attrs:{href:"https://www.phpst.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人博客"),v("OutboundLink")],1),t._v("，持续关注：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://ww1.sinaimg.cn/large/a616b9a4gy1g4xzv954a4j20760763yo.jpg",alt:""}})]),t._v(" "),v("p",[t._v("互联网工程师（id:phpstcn），我们一起学习，一起进步")])])}),[],!1,null,null,null);_.default=r.exports}}]);