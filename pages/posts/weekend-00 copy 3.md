---
title: 【每周一更】 之 Vue3 app.directive()
date: 2024-05-22 08:15:15
lang: zh
type: weekend
duration: 10分钟
description: 【每周一更】 之 Vue3 app.directive()
---
在 Vue 3 中，app.directive() 方法用于全局注册自定义指令。自定义指令可以让你在 Vue 模板中使用新的行为和功能。

### 1. 基本用法
```javascript
import { createApp } from 'vue';

const app = createApp({ /* ... */ });

app.directive('focus', {
  mounted(el) {
    el.focus();
  }
});
```
### 2. 参数说明
第一个参数 ('focus'): 自定义指令的名称，以 v- 开头在模板中使用。  
第二个参数 (指令定义对象): 包含钩子函数的对象，用于定义指令的行为。  
### 3. 钩子函数
指令定义对象可以包含以下钩子函数：  

mounted：元素被插入到 DOM 中时调用。  
updated：所在组件的 VNode 更新时调用。  
beforeUnmount：所在组件的 VNode 即将被卸载时调用。  
unmounted：所在组件的 VNode 被卸载后调用。  
bind：只调用一次，指令第一次绑定到元素时调用。  
### 4. 使用自定义指令
在模板中使用自定义指令：

```html
<input type="text" v-focus>
```
### 5. 传递参数
可以向自定义指令传递参数：

```html
<input type="text" v-focus="'selector'">
```
### 6. 接收参数
在指令定义中接收参数：

```javascript
app.directive('focus', {
  mounted(el, binding) {
    console.log(binding.value); // 'selector'
    el.focus();
  }
});
```
### 7. 示例
下面是一个完整的示例，展示如何使用 app.directive()：

```javascript
import { createApp } from 'vue';

const app = createApp({
  template: `
    <div>
      <input type="text" v-focus>
      <button @click="toggle">Toggle Focus Directive</button>
    </div>
  `,
  methods: {
    toggle() {
      this.$el.querySelector('input').focus();
    }
  }
});

app.directive('focus', {
  mounted(el) {
    el.focus();
  }
});

app.mount('#app');
```
### 8. 注意事项
指令命名：自定义指令名称应遵循 Vue 的命名规则。  
指令作用域：全局注册的指令在整个应用中都是可用的。  
### 总结
app.directive() 是 Vue 3 中全局注册自定义指令的方法。  
通过自定义指令，你可以扩展 Vue 模板的能力，实现更加复杂的 UI 行为。  
合理地使用 app.directive() 可以提高代码的可读性和可维护性。  
组件命名：组件名称应遵循 Vue 的命名规则，如使用 kebab-case 或 camelCase。  
组件复用：全局注册的组件在整个应用中都是可用的，因此要注意避免命名冲突。  
