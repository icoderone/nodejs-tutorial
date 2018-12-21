(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{182:function(t,s,a){t.exports=a.p+"assets/img/connection-pool.f6eda4aa.png"},208:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=a(5),c=Object(o.a)(n,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("h1",{attrs:{id:"第10章-使用数据库存储网站数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第10章-使用数据库存储网站数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 第10章 使用数据库存储网站数据")]),t._v(" "),n("p",[n("strong",[t._v("学习目标")])]),t._v(" "),n("ul",[n("li",[t._v("使用 mysql 包操作 MySQL 数据库")]),t._v(" "),n("li",[t._v("使用数据库的动态网站")]),t._v(" "),n("li",[t._v("基于数据库的网站（增删改查）")])]),t._v(" "),n("h2",{attrs:{id:"使用-mysql-包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-mysql-包","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 mysql 包")]),t._v(" "),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm install mysql\n")])])]),n("h3",{attrs:{id:"hello-world"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hello-world","aria-hidden":"true"}},[t._v("#")]),t._v(" Hello World")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mysql      "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'mysql'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" connection "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mysql"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createConnection")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  host     "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'localhost'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  user     "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'me'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  password "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'secret'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  database "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'my_db'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconnection"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("connect")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconnection"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("query")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'SELECT 1 + 1 AS solution'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" results"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fields"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'The solution is: '")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" results"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("solution"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconnection"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"增删改查"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#增删改查","aria-hidden":"true"}},[t._v("#")]),t._v(" 增删改查")]),t._v(" "),n("h4",{attrs:{id:"查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询","aria-hidden":"true"}},[t._v("#")]),t._v(" 查询")]),t._v(" "),n("p",[t._v("基本查询：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("connection"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("query")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'SELECT * FROM `books` WHERE `author` = \"David\"'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" results"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fields"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// error will be an Error if one occurred during the query")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// results will contain the results of the query")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// fields will contain information about the returned results fields (if any)")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("条件查询：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("connection"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("query")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'SELECT * FROM `books` WHERE `author` = ?'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'David'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" results"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fields"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// error will be an Error if one occurred during the query")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// results will contain the results of the query")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// fields will contain information about the returned results fields (if any)")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h4",{attrs:{id:"添加"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" post  "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Hello MySQL'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" query "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("query")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'INSERT INTO posts SET ?'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" post"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" results"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fields"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// Neat!")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'")]),t._v("\n")])])]),n("h4",{attrs:{id:"删除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("connection"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("query")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'DELETE FROM posts WHERE title = \"wrong\"'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" results"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fields"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'deleted '")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" results"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("affectedRows "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("' rows'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h4",{attrs:{id:"修改"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("connection"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("query")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'a'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'b'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'c'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userId"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" results"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fields"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"连接池"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#连接池","aria-hidden":"true"}},[t._v("#")]),t._v(" 连接池")]),t._v(" "),n("p",[n("img",{attrs:{src:a(182),alt:"connection-pool.png"}})]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mysql "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'mysql'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pool  "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mysql"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createPool")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  host     "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'example.org'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  user     "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'bob'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  password "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'secret'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  database "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'my_db'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  connectionLimit"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 默认是 10 个")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\npool"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getConnection")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" connection"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// Use the connection")]),t._v("\n  connection"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("query")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'SELECT something FROM sometable'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" results"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fields"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 释放回连接池")]),t._v("\n    connection"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("release")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 处理错误")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"封装-dbhelper-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#封装-dbhelper-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 封装 dbHelper.js")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mysql "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'mysql'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pool "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mysql"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createPool")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  host"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'localhost'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  user"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'root'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  password"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'123456'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  database"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'test'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  connectionLimit"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 默认是 10 个")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nexports"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("query")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 从数组中弹出最后一个元素 callback 回调函数")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" callback "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("pop")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  pool"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getConnection")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" connection"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("callback")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    connection"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("query")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("results"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// ...results => [err, results, fields]")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 释放回连接池")]),t._v("\n      connection"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("release")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 把 ...results => [err, results, fields] 展开调用 callback 继续往外抛")]),t._v("\n      "),n("span",{attrs:{class:"token function"}},[t._v("callback")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("results"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"结合数据库的网站"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结合数据库的网站","aria-hidden":"true"}},[t._v("#")]),t._v(" 结合数据库的网站")])])},[],!1,null,null,null);c.options.__file="10-web_db.md";s.default=c.exports}}]);