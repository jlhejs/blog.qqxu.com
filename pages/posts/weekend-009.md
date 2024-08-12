---
title: 【每周一更】 之 Vue3 app.config()
date: 2024-06-20 08:15:15
lang: zh
type: weekend
duration: 10分钟
description: 【每周一更】 之 Vue3 app.config()
---
在 Vue 3 中，app.config 是一个对象，用于配置 Vue 应用的各种行为。通过 app.config，你可以调整 Vue 的默认行为，例如错误处理、全局属性注册等。

### 1. 基本用法
``` javascript
import { createApp } from 'vue';

const app = createApp({ /* ... */ });

app.config.globalProperties.$myMethod = function () {
  console.log('Called my method!');
};
``` 
### 2. 可配置项
app.config 对象包含以下可配置项：

app.config.globalProperties: 用于注册能够被应用内所有组件实例访问到的全局 property 的对象。    
app.config.errorHandler: 错误处理函数，用于处理 Vue 运行时抛出的错误。    
app.config.warnHandler: 警告处理函数，用于处理 Vue 发出的警告。    
app.config.performance: 是否开启性能模式。  
app.config.optionMergeStrategies: 用于自定义合并策略的对象。  
app.config.runtimeCompiler: 是否使用运行时编译器。  
app.config.silent: 是否静默模式，关闭所有的 Vue 日志和警告。  
app.config.devtools: 是否启用 Vue DevTools 的集成。  
app.config.keyCodes: 用于自定义按键别名的对象。  
app.config.runWithContext: 是否在渲染过程中捕获错误时保留错误上下文。  
### 3. 示例  
下面是一个简单的示例，展示如何使用 app.config：  

``` javascript
import { createApp } from 'vue';

const app = createApp({
  template: `<div>{{ message }}</div>`,
  data() {
   return {
     message: undefined
   };
  }
});

/**
 *@Description: 设置全局属性
 *@ClassAuthor: sunny @Date: 2024-08-12 10:58:19
 */
app.config.globalProperties.$myMethod = function () {
  console.log('Called my method!');
};

/**
 *@Description: 设置错误处理
 *@param {Error} err
 *@param {Vue} vm
 *@param {String} info
 *@ClassAuthor: sunny @Date: 2024-08-12 10:58:19
 */
app.config.errorHandler = (err, vm, info) => {
  console.error(`Error in ${info}: ${err.stack}`);
};

/**
 *@Description: 设置警告处理
 *@param {String} msg
 *@param {Vue} vm
 *@param {String} info
 *@ClassAuthor: sunny @Date: 2024-08-12 10:58:19
 */
app.config.warnHandler = (msg, vm, trace) => {
  console.warn(`Warning: ${msg}`, vm, trace);
};

app.mount('#app');
``` 
### 4. 注意事项
性能影响：一些配置选项可能会影响应用的性能，例如开启性能模式。  
全局属性：注册的全局属性可以在所有组件中直接访问。  
## 总结
app.config 是 Vue 3 中用于配置应用行为的重要工具。  
通过合理地使用 app.config，可以定制 Vue 应用的行为，比如添加全局属性、配置错误处理等。  
这有助于提高应用的稳定性和用户体验。