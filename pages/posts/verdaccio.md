---
title: verdaccio的基本用法
date: 2022-12-12T17:09:00Z
lang: zh
type: web
duration: 5分钟
description: 我不在我的项目中使用 Prettier 的理由。
---


### 前言
在公司里我们有很多需要公共组件或者是工具函数工具类，和一些封装的sdk,这样的代码有的核心的不方便发布到外网中，所以这就是我们为什么需要搭建npm私有仓库。
verdaccio是一个非常方便使用和管理的npm私有仓库搭建工具，搭建好后设置npm源为verdaccio服务就可以使用npm私有仓库了。


### 下载 直接npm下载到全局安装

```javascript
npm install -g verdaccio
```
### 运行

```javascript
verdaccio
```
看到这个界面就说明运行成功了

```javascript
 warn --- config file  - C:\*******\config.yaml
(node:6488) Warning: deprecate: multiple logger configuration is deprecated, please check the migration guide.
(Use `node --trace-warnings ...` to show where the warning was created)
 warn --- "crypt" algorithm is deprecated consider switch to "bcrypt". Read more: https://github.com/verdaccio/monorepo/pull/580
 info --- plugin successfully loaded: verdaccio-htpasswd
 info --- plugin successfully loaded: verdaccio-audit
 warn --- http address - http://localhost:4873/ - verdaccio/5.14.0
```

### 运行verdaccio可以看到当前你的verdaccio配置文件的位置
```javascript
 warn --- config file  - C:\*******\config.yaml
```
### nrm常见操作
使用这个就可以快速地在 npm 源间切换，简化npm命令操作。


### 使用verdaccio搭建私有npm服务

#### 安装
```javascript
npm install -g verdaccio
```
### 运行

```javascript
verdaccio
```
看到这个界面就说明运行成功了,启动时间会很久，断开cmd会关掉服务，可以使用pm2守护进程即可。

```javascript
 warn --- config file  - C:\*******\config.yaml
(node:6488) Warning: deprecate: multiple logger configuration is deprecated, please check the migration guide.
(Use `node --trace-warnings ...` to show where the warning was created)
 warn --- "crypt" algorithm is deprecated consider switch to "bcrypt". Read more: https://github.com/verdaccio/monorepo/pull/580
 info --- plugin successfully loaded: verdaccio-htpasswd
 info --- plugin successfully loaded: verdaccio-audit
 warn --- http address - http://localhost:4873/ - verdaccio/5.14.0
```

访问[verdacciohttp://localhost:4837](http://localhost:4837)

### 配置config.yaml，使局域网下能共享访问，否则只能本机访问。
最后面添加以下配置

```javascript
listen: 0.0.0.0:4873
```

### 重启，必须重启电脑配置才能生效。重新运行

```javascript
// 访问http://ip:port/
// 不要访问本地localhost下的
verdaccio
```


### 使用nrm新建本地仓库
```javascript
nrm add <registry> http://localhost:4873
verdaccio
```
### 使用nrm切换到本地仓库
```javascript
nrm use <registry>
verdaccio
```
### 使用nrm查看是否新增成功
```javascript
nrm ls
```

### 注册verdaccio账号，一定要先保证切换到本地的源仓库的前提下，因为你注册的账号是保存在对应仓库源上的。
```javascript
npm adduser
```
// 输入账号和密码
###  上传仓库
```javascript
// 登录
npm login
// 发布
npm publish
```

访问http://ip:port 进行登录