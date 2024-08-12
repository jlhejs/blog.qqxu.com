---
title: 关于vue组件中使用this.$router.push不奏效的可能原因分析
date: 2024-08-16 00:00:00
lang: zh
type: web
duration: 15分钟
description: 我不在我的项目中使用 Prettier 的理由。
---

### 问题
如果你发现this.$router.push 在使用时不触发 beforeEach 导航守卫，那么可能的原因是你对 router 的理解或使用方式有误。
beforeEach 是路由守卫之一，它会在路由跳转前被调用，用于处理路由跳转的预操作。如果你发现 beforeEach 没有被触发，可能是因为以下原因：
1. 你可能在使用 router-link 时没有正确设置 to 属性，或者在代码中没有正确地使用 this.$router.push。

2. 你可能在 beforeEach 钩子中有某种条件导致跳转被取消或者抛出错误，从而阻止了守卫的继续执行。

3. 你可能在 beforeEach 钩子中使用了 next(false) 来取消路由的跳转。

解决方法：

1. #### 路由地址没有变化！

2. 检查 beforeEach 守卫中的代码，确保没有抛出异常或者调用 next(false) 导致路由跳转被中断。

3. 如果你在 beforeEach 中使用了异步的路由守卫逻辑，确保调用 next 方法时没有异常，并且总是在异步逻辑结束后调用它。
4. 确保你正确地使用了 router-link 或 this.$router.push。
5. 没有写next()回调

### 示例代码
```
router.beforeEach((to, from, next) => {
  // 确保始终在异步逻辑结束后调用 next()
  if (someAsyncCondition) {
    checkPermission()
      .then(permission => {
        if (permission) {
          next();
        } else {
          next(false);
        }
      })
      .catch(error => {
        // 处理错误
        next(false);
      });
  } else {
    next(); // 确保调用 next() 继续路由跳转
  }
});
```
### 路由地址没有变化解决方案
```
  var timestamp = new Date().getTime()
  this.$router.push({ path: '/你的路由地址',query:{ timestamp:timestamp } });
```