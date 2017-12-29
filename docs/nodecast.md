# 综合案例：多人社区

## 案例介绍

---

## 需求分析

---

## 数据库设计

---

## 路由设计

### 用户模块

| 请求方法 |  请求路径 |     作用     | 备注 |
|----------|-----------|--------------|------|
| GET      | /register | 渲染注册页面 |      |
| POST     | /register | 处理用户注册 |      |
| GET      | /login    | 渲染登陆页面 |      |
| POST     | /login    | 处理用户登陆 |      |
| GET      | /logout   | 处理用户退出 |      |

### 话题模块

| 请求方法 |        请求路径        |       作用       | 备注 |
|----------|------------------------|------------------|------|
| GET      | /topic/new             | 渲染发布话题页面 |      |
| GET      | /topic/new             | 渲染发布话题页面 |      |
| GET      | /topic/:topicId        | 渲染话题详情页   |      |
| GET      | /topic/:topicId/edit   | 渲染编辑话题页面 |      |
| POST     | /topic/:topicId/edit   | 处理编辑话题     |      |
| GET      | /topic/:topicId/delete | 删除话题         |      |

### 评论模块

| 请求方法 |          请求路径          |       作用       | 备注 |
|----------|----------------------------|------------------|------|
| POST     | /:topicId/comment          | 处理发布评论     |      |
| GET      | /:topicId/comment          | 获取评论列表数据 |      |
| GET      | /comment/:commentId/edit   | 渲染编辑评论     |      |
| POST     | /comment/:commentId/edit   | 处理编辑评论     |      |
| GET      | /comment/:commentId/delete | 处理删除评论     |      |

---

## 项目初始化

### 目录结构

### MVC

---

## 用户模块

### 用户注册

### 用户退出

### 用户登陆

---

## 话题模块

### 查看话题

### 修改话题

### 删除话题

### 首页分页列表展示话题

---

## 评论模块

### 发表评论

### 评论列表展示

### 修改评论

### 删除评论

---

## 用户中心模块

### 个人主页

### 修改个人信息

### 用户头像

### 修改密码

### 注销账户

---

## 2017-12-12 案例编写步骤

- 拿到我的案例
- 把数据库文件导入自己的数据
- 使用 md5 加密注册的用户密码
- 把原来注册成功存储的 Session 改为 user
- 用户退出
  + delete req.session.user
  + res.redirect('/login')
- 用户登陆
  + 渲染登陆页面
  + 处理登陆请求
  + 登陆成功记录把 user 记录到 Session 中
  + 登陆成功跳转到首页
- 处理登陆成功显示当前登陆用户名
  + 从 Session 中的 user 获取
- 发布话题
  + 渲染发布话题页面
  + 处理发布话题请求
- 查看话题详情
  + 如果话题不存在提示用户
  + 如果存在则渲染话题
  + markdown 转 html
    * 模板引擎默认会把 html 转义为字符串进行输出 < &lt;
    * 所我们使用 {{@变量}} 的方式来输出 html
    * 但是这里还有安全性问题：把内容中的 `<script>...</script>` 给去除
- 处理发布话题成功之后跳转到话题详情页
- 话题详情页根据权限显示：编辑、删除 链接
- 删除话题
  + 注意：一定要昨晚业务验证之后再删除
  + 话题是否存在
  + 用户是否登陆
  + 话题是否属于当前登陆用户
  + 然后再执行删除操作
- 编辑话题
  + 显示要编辑的话题
    * 话题是否存在
    * 用户是否登陆
    * 话题是否属于当前登陆用户
    * 最后正常渲染编辑页面
  + 处理编辑话题（和处理添加类似） 