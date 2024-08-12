---
title: 【每周一个Api】 之 Vue3 app.mount()
date: 2024-05-08T08:15:15Z
lang: zh
type: weekend
duration: 10分钟
description: 【每周一个Api】 之 Vue3 app.mount()
---

在 Vue 3 中，app.mount() 方法用于将 Vue 应用程序挂载到 DOM 元素上。这是启动 Vue 应用的关键步骤之一。

### 1. 基本用法

```javascript
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');
```
### 2. 参数说明
选择器字符串 ('#app'): 指定挂载点的 DOM 元素的选择器。
### 3. 返回值
app.mount() 方法返回挂载后的根组件实例。

### 4. 挂载到已存在的元素
如果需要挂载到一个已经存在的 DOM 节点上，可以直接传入该节点。

``` javascript
import { createApp } from 'vue';
import App from './App.vue';

const container = document.getElementById('app');
const app = createApp(App);
app.mount(container);
```

### 5. 挂载多个实例
可以在同一个页面中挂载多个 Vue 应用实例。


``` javascript
import { createApp } from 'vue';
import App1 from './App1.vue';
import App2 from './App2.vue';

const app1 = createApp(App1);
app1.mount('#app1');

const app2 = createApp(App2);
app2.mount('#app2');
```
### 6. 注意事项
确保 DOM 已经加载完成：在挂载应用之前，需要确保 DOM 已经完全加载完毕。
避免重复挂载：对于同一个应用实例，多次调用 mount 方法可能会导致错误。
### 7. 示例
下面是一个简单的示例，展示如何使用 app.mount()：
```
import { createApp } from 'vue';
import App from './App.vue';

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App);
  app.mount('#app');
});
```
### 总结
app.mount() 是 Vue 3 中启动和显示应用程序的关键方法。它负责将 Vue 应用程序挂载到指定的 DOM 节点上，从而让应用程序可见并开始运行。正确地使用 app.mount() 可以帮助开发者轻松地管理和控制 Vue 应用的生命周期。