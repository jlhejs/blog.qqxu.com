---
title: 看到阿里云Datav代码恶补一下Seajs
date: 2023-04-17T14:00:00Z
lang: zh
type: plan
duration: 15分钟
description: 看到阿里云Datav代码恶补一下Seajs
---

### pm2是什么

Seajs是一款模块化开发框架，遵循CMD规范。虽然到如今为止不少模块打包工具比它更加的完善，但仍是有必要拜读一下的，毕竟为前端模块化的发展作了很大的贡献，分析一下涨涨姿式。
文章主要从如下几个方面来分析。有不对的地方，欢迎你们指出。前端

### 什么是CMD规范
CMD（Common Module Definition）是seajs在推广中规范出来的。详情请看 CMD模块定义规范node

### 模块化开发的好处
- 一、提升代码可维护性
- 二、按需加载
- 三、避免变量污染
- 四、为前端工程化发展打下基础
### seajs是如何加载模块，如何设计api的