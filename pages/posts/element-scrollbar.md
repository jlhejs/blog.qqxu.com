---
title: element-ui的隐藏组件el-scrollbar的使用(解决原生滚动条没有隐藏的问题 高宽设置)
date: 2020-02-05T16:32:00Z
lang: zh
type: web
duration: 5分钟
description: element-ui的官网页面使用的这个滚动条，但是在官网文档中没有介绍这个组件。在vue+elementui搭建的前端项目中使用这个el-scrollbar组件。在项目中使用这个组件时由于各层的样式没有设置好，可能会显示出原生的滚动条，特此记录。。
---

### 介绍
element-ui的官网页面使用的这个滚动条，但是在官网文档中没有介绍这个组件。不知为何，文档中未作表述。

[github 源码位置 https://github.com/ElemeFE/element/tree/dev/packages/scrollbar](https://github.com/ElemeFE/element/tree/dev/packages/scrollbar)


### 安装
```javascript
import Vue from 'vue'
import {
  Scrollbar
} from 'element-ui'

Vue.use(Scrollbar)
```
### 使用

```javascript
<div class="main">
    <el-scrollbar>
      。。。要滚动的内容
    </el-scrollbar>
</div>

```
### Attributes
```javascript

 props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },

```
