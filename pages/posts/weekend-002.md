---
title: 【每周一个Api】 之 Vue3-createApp
date: 2024-05-01T13:14:77Z
lang: zh
type: weekend
duration: 10分钟
description: 【每周一个Api】 之 Vue3-createApp
---

### 1. 基本用法

```
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');
```
### 2. 参数说明
构造函数的第一个参数 (App): 通常是一个定义了组件选项的对象，也可以是一个返回此对象的函数。
可选配置对象: 可以通过 .use() 和 .component() 等方法来扩展应用实例的功能。
### 3. 使用插件和注册全局组件
```
import { createApp } from 'vue';
import App from './App.vue';
import MyPlugin from './plugins/my-plugin';

const app = createApp(App);

// 使用插件
app.use(MyPlugin);

// 注册全局组件
app.component('my-component', {
  // 组件定义
});

app.mount('#app');
```
### 4. 提供全局状态管理
可以利用 provide/inject API 来传递数据或服务。

```
import { createApp, provide } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.provide('myService', {
  // 服务定义
});

app.mount('#app');
```
### 5. 配合 TypeScript 使用
当使用 TypeScript 时，可以利用类型定义来增强开发体验。
```
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App as any);

app.mount('#app');
```

### 6. 单元测试支持
在编写单元测试时，可以通过 createApp 创建一个虚拟的应用实例。

```
import { createApp } from 'vue';
import App from './App.vue';

describe('App', () => {
  const app = createApp(App);
  // 测试代码
});
```
## 总结
createApp 是 Vue 3 中创建和配置应用程序的主要入口点。它简化了 Vue 2 中繁琐的配置过程，使得启动一个新项目变得更加简单直接。