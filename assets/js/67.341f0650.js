(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{476:function(t,v,_){"use strict";_.r(v);var a=_(49),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"mysql面试（5）存储引擎类问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql面试（5）存储引擎类问题"}},[t._v("#")]),t._v(" mysql面试（5）存储引擎类问题")]),t._v(" "),_("h2",{attrs:{id:"mysql-常用存储引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-常用存储引擎"}},[t._v("#")]),t._v(" MySQL 常用存储引擎")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("引擎名称")]),t._v(" "),_("th",[t._v("事务")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("MYISAM")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[t._v("MySQL5.6 之前的默认引擎，最常用的非事务型存储引擎")])]),t._v(" "),_("tr",[_("td",[t._v("CSV")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[t._v("以 CSV 格式存储的非事务型存储引擎")])]),t._v(" "),_("tr",[_("td",[t._v("Archive")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[t._v("只运行查询和新增数据不允许修改的非事务型存储引擎")])]),t._v(" "),_("tr",[_("td",[t._v("Memory")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[t._v("是一种易失性非事务型存储引擎")])]),t._v(" "),_("tr",[_("td",[t._v("InnoDB")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[t._v("最常用事务性存储引擎")])]),t._v(" "),_("tr",[_("td",[t._v("NDB")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[t._v("MySQL 集群使用的内存型事务存储引擎")])])])]),t._v(" "),_("h2",{attrs:{id:"myisam"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#myisam"}},[t._v("#")]),t._v(" MYISAM")]),t._v(" "),_("h3",{attrs:{id:"特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),_("ul",[_("li",[t._v("非事务存储引擎")]),t._v(" "),_("li",[t._v("以堆表方式存储")]),t._v(" "),_("li",[t._v("使用表级锁")]),t._v(" "),_("li",[t._v("支持 BTree 索引，空间索引，全文索引")])]),t._v(" "),_("h3",{attrs:{id:"使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),_("ul",[_("li",[t._v("读操作远远大于写操作")]),t._v(" "),_("li",[t._v("不需要使用事务")])]),t._v(" "),_("h2",{attrs:{id:"csv"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#csv"}},[t._v("#")]),t._v(" CSV")]),t._v(" "),_("h3",{attrs:{id:"特点-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-2"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),_("ul",[_("li",[t._v("非事务型存储引擎")]),t._v(" "),_("li",[t._v("数据以 CSV 格式存储")]),t._v(" "),_("li",[t._v("所有列都不能为 NULL")]),t._v(" "),_("li",[t._v("不支持索引")])]),t._v(" "),_("h3",{attrs:{id:"使用场景-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-2"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),_("ul",[_("li",[t._v("作为数据交换的中间表使用")])]),t._v(" "),_("h2",{attrs:{id:"archive"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#archive"}},[t._v("#")]),t._v(" Archive")]),t._v(" "),_("h3",{attrs:{id:"特点-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-3"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),_("ul",[_("li",[t._v("非事务型存储引擎")]),t._v(" "),_("li",[t._v("表数据使用 zlib 压缩")]),t._v(" "),_("li",[t._v("只支持 Insert 和 Select")]),t._v(" "),_("li",[t._v("只允许在自增 ID 上建立索引")])]),t._v(" "),_("h3",{attrs:{id:"使用场景-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-3"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),_("ul",[_("li",[t._v("日志和数据采集类应用")]),t._v(" "),_("li",[t._v("数据归档存储")])]),t._v(" "),_("h2",{attrs:{id:"memory"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#memory"}},[t._v("#")]),t._v(" Memory")]),t._v(" "),_("h3",{attrs:{id:"特点-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-4"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),_("ul",[_("li",[t._v("非事务型存储引擎")]),t._v(" "),_("li",[t._v("数据保存在内存中")]),t._v(" "),_("li",[t._v("所有字段长度固定")]),t._v(" "),_("li",[t._v("支持 Btree 和 Hash 索引")])]),t._v(" "),_("h3",{attrs:{id:"使用场景-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-4"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),_("ul",[_("li",[t._v("用于缓存字典映射表")]),t._v(" "),_("li",[t._v("缓存周期性分析数据")])]),t._v(" "),_("h2",{attrs:{id:"innodb"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[t._v("#")]),t._v(" InnoDB")]),t._v(" "),_("h3",{attrs:{id:"特点-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-5"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),_("ul",[_("li",[t._v("事务型存储引擎")]),t._v(" "),_("li",[t._v("数据按主键聚集存储")]),t._v(" "),_("li",[t._v("支持行级锁和 MVCC")]),t._v(" "),_("li",[t._v("支持 Btree 和自适应 Hash 索引")]),t._v(" "),_("li",[t._v("支持全文和空间索引")])]),t._v(" "),_("h3",{attrs:{id:"使用场景-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-5"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),_("ul",[_("li",[t._v("大多数 OLTP 场景")])]),t._v(" "),_("h2",{attrs:{id:"ndb"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ndb"}},[t._v("#")]),t._v(" NDB")]),t._v(" "),_("h3",{attrs:{id:"特点-6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-6"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),_("ul",[_("li",[t._v("事务型存储引擎")]),t._v(" "),_("li",[t._v("数据保存在内存中")]),t._v(" "),_("li",[t._v("支持行级锁")]),t._v(" "),_("li",[t._v("支持高可用集群")]),t._v(" "),_("li",[t._v("支持 Ttree 索引")])]),t._v(" "),_("h3",{attrs:{id:"使用场景-6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-6"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),_("ul",[_("li",[t._v("需要数据完全同步的高可用场景")])]),t._v(" "),_("h2",{attrs:{id:"什么情况下-innodb-无法在线修改表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么情况下-innodb-无法在线修改表"}},[t._v("#")]),t._v(" 什么情况下 InnoDB 无法在线修改表")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("操作")]),t._v(" "),_("th",[t._v("语法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("加全文索引")]),t._v(" "),_("td",[t._v("CREATE FULTEXT INDEX name ON table(column)")])]),t._v(" "),_("tr",[_("td",[t._v("加空间索引")]),t._v(" "),_("td",[t._v("ALTER TABLE geom ADD SPATIAL INDEX(g)")])]),t._v(" "),_("tr",[_("td",[t._v("删除主键")]),t._v(" "),_("td",[t._v("ALTER TABLE tb_name DROP PRIMARY KEY")])]),t._v(" "),_("tr",[_("td",[t._v("增加自增列")]),t._v(" "),_("td",[t._v("alert table t add column id int auto_increment not null primary key")])]),t._v(" "),_("tr",[_("td",[t._v("修改列类型")]),t._v(" "),_("td",[t._v("alter table t change c1 c1 NEW_TYPE")])]),t._v(" "),_("tr",[_("td",[t._v("修改字符集")]),t._v(" "),_("td",[t._v("alter table t character set = charset_name")])])])]),t._v(" "),_("h3",{attrs:{id:"在线-ddl-存在的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在线-ddl-存在的问题"}},[t._v("#")]),t._v(" 在线 DDL 存在的问题")]),t._v(" "),_("ul",[_("li",[t._v("有部分语句不支持在线 DDL")]),t._v(" "),_("li",[t._v("长时间 DDL 操作会引起严重主从延迟")]),t._v(" "),_("li",[t._v("无法对 DDL 操作进行资源限制")])]),t._v(" "),_("h3",{attrs:{id:"如何更安全执行-ddl"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何更安全执行-ddl"}},[t._v("#")]),t._v(" 如何更安全执行 DDL")]),t._v(" "),_("ul",[_("li",[t._v("pt-online-shema-change [OPTIONS]DSN")])]),t._v(" "),_("h2",{attrs:{id:"innodb-如何实现事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#innodb-如何实现事务"}},[t._v("#")]),t._v(" InnoDB 如何实现事务")]),t._v(" "),_("h3",{attrs:{id:"原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[t._v("特征")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("原子性（A）")]),t._v(" "),_("td",[t._v("一个事务的所有操作，或全部成功或全部失败")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("一致性（C）")]),t._v(" "),_("td",[t._v("事务开始之前和事务结束只会，数据库保持完整性")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("隔离性（I）")]),t._v(" "),_("td",[t._v("每个读写事务的对象和其他事务的操作对象相互分离，该事务提交前对其他事务都不可见")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("持久性（D）")]),t._v(" "),_("td",[t._v("事务一旦提交，结果就是永久性，如果宕机也能恢复")])])])]),t._v(" "),_("h3",{attrs:{id:"实现方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[t._v("#")]),t._v(" 实现方式")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[t._v("特征")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("原子性（A）")]),t._v(" "),_("td",[t._v("回滚日志（Undo log）: 用于记录数据修改前的状态")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("一致性（C）")]),t._v(" "),_("td",[t._v("重作日志（Redo log）: 用于记录数据修改后的状态")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("隔离性（I）")]),t._v(" "),_("td",[t._v("锁：用于资源隔离，分为共享锁和排他锁")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("持久性（D）")]),t._v(" "),_("td",[t._v("重作日志（Redo log）+ 回滚日志（Undo log）")])])])]),t._v(" "),_("h2",{attrs:{id:"innodb-锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#innodb-锁"}},[t._v("#")]),t._v(" INNODB 锁")]),t._v(" "),_("ul",[_("li",[t._v("查询需要对资源加共享锁（S）")]),t._v(" "),_("li",[t._v("修改需要对资源加排他锁（X）")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th"),t._v(" "),_("th",[t._v("排他锁")]),t._v(" "),_("th",[t._v("共享锁")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("排他锁")]),t._v(" "),_("td",[t._v("不兼容")]),t._v(" "),_("td",[t._v("不兼容")])]),t._v(" "),_("tr",[_("td",[t._v("共享锁")]),t._v(" "),_("td",[t._v("不兼容")]),t._v(" "),_("td",[t._v("兼容")])])])]),t._v(" "),_("h2",{attrs:{id:"欢迎扫描下方二维码，个人博客，持续关注："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#欢迎扫描下方二维码，个人博客，持续关注："}},[t._v("#")]),t._v(" 欢迎扫描下方二维码，"),_("a",{attrs:{href:"https://www.phpst.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人博客"),_("OutboundLink")],1),t._v("，持续关注：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ww1.sinaimg.cn/large/a616b9a4gy1g4xzv954a4j20760763yo.jpg",alt:""}})]),t._v(" "),_("p",[t._v("互联网工程师（id:phpstcn），我们一起学习，一起进步")])])}),[],!1,null,null,null);v.default=r.exports}}]);