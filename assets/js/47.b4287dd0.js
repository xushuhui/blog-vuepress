(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{456:function(t,a,_){"use strict";_.r(a);var s=_(49),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"mysql基础（5）索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql基础（5）索引"}},[t._v("#")]),t._v(" mysql基础（5）索引")]),t._v(" "),_("h2",{attrs:{id:"innodb-支持索引类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#innodb-支持索引类型"}},[t._v("#")]),t._v(" InnoDB 支持索引类型")]),t._v(" "),_("ul",[_("li",[t._v("Btree 索引")])]),t._v(" "),_("ul",[_("li",[t._v("以 B+ 树的结构存储索引数据")]),t._v(" "),_("li",[t._v("适用于全值匹配的查询（class_name='mysql', class_name in ('mysql', 'postgresql')）")]),t._v(" "),_("li",[t._v("范围查找（study_cnt between 100 and 300, study_cnt >300）")]),t._v(" "),_("li",[t._v("从索引最左侧列开始匹配查找列")])]),t._v(" "),_("ul",[_("li",[t._v("自适应 HASH 索引")]),t._v(" "),_("li",[t._v("全文索引（elasticseach）")]),t._v(" "),_("li",[t._v("空间索引")])]),t._v(" "),_("h2",{attrs:{id:"建索引的列"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#建索引的列"}},[t._v("#")]),t._v(" 建索引的列")]),t._v(" "),_("ul",[_("li",[t._v("where 子句中的列")]),t._v(" "),_("li",[t._v("包含 order by 、group by 、distinct 中的字段")]),t._v(" "),_("li",[t._v("多表 join 的关联列")])]),t._v(" "),_("h2",{attrs:{id:"选择复合索引键的顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#选择复合索引键的顺序"}},[t._v("#")]),t._v(" 选择复合索引键的顺序")]),t._v(" "),_("ul",[_("li",[t._v("区分度最高的列放在联合索引的最左侧")]),t._v(" "),_("li",[t._v("使用最频繁的列放在联合索引的最左侧")]),t._v(" "),_("li",[t._v("尽量把字段长度小的列放在联合索引的最左侧")])]),t._v(" "),_("h2",{attrs:{id:"btree-索引的限制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#btree-索引的限制"}},[t._v("#")]),t._v(" Btree 索引的限制")]),t._v(" "),_("ul",[_("li",[t._v("只能从最左侧开始按索引键的顺序使用索引，不能跳过索引键")]),t._v(" "),_("li",[t._v("not in 和 <>操作无法使用索引")]),t._v(" "),_("li",[t._v("索引列上不能使用表达式或函数")])]),t._v(" "),_("h2",{attrs:{id:"索引使用误区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引使用误区"}},[t._v("#")]),t._v(" 索引使用误区")]),t._v(" "),_("ul",[_("li",[t._v("索引越多越好")]),t._v(" "),_("li",[t._v("使用 in 列表查询不会使用到索引")]),t._v(" "),_("li",[t._v("查询过滤顺序必须同索引键顺序相同才能使用到索引")])]),t._v(" "),_("h2",{attrs:{id:"sql-改写原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sql-改写原则"}},[t._v("#")]),t._v(" sql 改写原则")]),t._v(" "),_("ul",[_("li",[t._v("使用 outer in 代替 not in (5.7 以下）")]),t._v(" "),_("li",[t._v("使用 CTE 代替子查询")]),t._v(" "),_("li",[t._v("拆分复杂的大 sql 为多个简单的小 sql")]),t._v(" "),_("li",[t._v("巧用计算列优化查询")])]),t._v(" "),_("h2",{attrs:{id:"欢迎扫描下方二维码，个人博客，持续关注："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#欢迎扫描下方二维码，个人博客，持续关注："}},[t._v("#")]),t._v(" 欢迎扫描下方二维码，"),_("a",{attrs:{href:"https://www.phpst.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人博客"),_("OutboundLink")],1),t._v("，持续关注：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ww1.sinaimg.cn/large/a616b9a4gy1g4xzv954a4j20760763yo.jpg",alt:""}})]),t._v(" "),_("p",[t._v("互联网工程师（id:phpstcn），我们一起学习，一起进步")])])}),[],!1,null,null,null);a.default=v.exports}}]);