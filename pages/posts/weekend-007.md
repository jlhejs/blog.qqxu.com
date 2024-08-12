---
title: 【每周一更】 之 Vue3 Vue3 app.provide() 与 app.inject()
date: 2024-06-06 08:15:15
lang: zh
type: weekend
duration: 10分钟
description: 【每周一更】 之 Vue3 Vue3 app.provide() 与 app.inject()
---
在 Vue 3 中，app.provide() 和 app.inject() 是用于在组件层级之间传递数据的强大工具。  
这些方法允许开发者跨越多个组件层级直接传递数据，而不需要通过每个层级逐层传递 props。

### 1. 基本用法
``` javascript
import { createApp, provide, inject } from 'vue';

const app = createApp({
  setup() {
    const myData = 'Hello from parent!';
    
    // 在根组件中提供数据
    provide('myData', myData);
  },
  template: `<ChildComponent />`
});

// 子组件
const ChildComponent = {
  setup() {
    // 在子组件中注入数据
    const myData = inject('myData');
    return { myData };
  },
  template: `<div>{{ myData }}</div>`
};

app.component('ChildComponent', ChildComponent);
app.mount('#app');
```
### 2. 参数说明
provide:

第一个参数: 键名，用于标识提供的数据。  
第二个参数: 要提供的数据或值。  
inject:  

第一个参数: 键名，用于从祖先组件中获取提供的数据。   
第二个参数 (可选): 默认值，如果没有找到对应的提供数据，则使用这个值。  
### 3. 在 setup 函数中使用
provide 和 inject 主要在 setup 函数中使用。

``` javascript
const app = createApp({
  setup() {
    const myData = 'Hello from parent!';
    
    // 提供数据
    provide('myData', myData);
  },
  template: `<ChildComponent />`
});

const ChildComponent = {
  setup() {
    // 注入数据
    const myData = inject('myData');
    return { myData };
  },
  template: `<div>{{ myData }}</div>`
};
```
### 4. 注入默认值
可以为 inject 提供默认值。

``` javascript
const ChildComponent = {
  setup() {
    const myData = inject('myData', 'Default value');
    return { myData };
  },
  template: `<div>{{ myData }}</div>`
};
```
### 5. 在非 setup 函数中使用
虽然推荐在 setup 函数中使用 provide 和 inject，但也可以在 Vue 2 风格的选项 API 中使用。

``` javascript
const app = createApp({
  data() {
    return {
      myData: 'Hello from parent!'
    };
  },
  provide() {
    return {
      myData: this.myData
    };
  },
  template: `<ChildComponent />`
});

const ChildComponent = {
  inject: ['myData'],
  template: `<div>{{ myData }}</div>`
};
```
### 6. 示例
下面是一个完整的示例，展示如何使用 app.provide() 和 app.inject()：

``` javascript
import { createApp, provide, inject } from 'vue';

const app = createApp({
  setup() {
    const myData = 'Hello from parent!';
    
    // 提供数据
    provide('myData', myData);
  },
  template: `<ChildComponent />`
});

const ChildComponent = {
  setup() {
    // 注入数据
    const myData = inject('myData');
    return { myData };
  },
  template: `<div>{{ myData }}</div>`
};

app.component('ChildComponent', ChildComponent);
app.mount('#app');
```
### 7. 注意事项
键名唯一性：确保提供的键名在整个应用中是唯一的。  
性能考虑：虽然 provide 和 inject 很方便，但过度使用可能导致性能问题。  
### 总结
app.provide() 和 app.inject() 是 Vue 3 中用于组件间通信的强大工具。  
它们简化了跨组件层级的数据传递，使得构建复杂的应用程序变得更加容易。  
合理地使用这些工具可以帮助开发者更好地组织和管理组件间的依赖关系。