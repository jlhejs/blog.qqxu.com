---
title: 【每周一更】 之 Vue3 setup()
date: 2024-07-10 08:15:15
lang: zh
type: weekend
duration: 14分钟
description: 【每周一更】 之 Vue3 setup()
---
在 Vue 3 中，setup() 是组合 API 的核心函数，是一个新引入的概念。  
用于定义组件的初始状态和行为。它是 Vue 3 中用于替换传统选项 API (data, methods, computed, watch, 等) 的主要方式。
setup 函数的引入使得组件的逻辑更加清晰和灵活，本文将主要介绍Setup的基本用法和少量原理
- **更灵活的组织逻辑:**  
    setup 函数可以将相关逻辑按照功能进行组织，使得组件更加清晰和易于维护。不再受到 Options API 中选项的限制，可以更自由地组织代码。
- **逻辑复用:**  
    可以将逻辑抽取为可复用的函数，并在 setup 函数中进行调用，实现逻辑的复用，避免了在 Options API 中通过 mixins 或混入对象实现逻辑复用时可能出现的问题。
- **更好的类型推断:**  
    由于 setup 函数本身是一个普通的 JavaScript 函数，可以更好地与 TypeScript 配合，提供更好的类型推断和代码提示。
- **更好的响应式处理:  **
    setup 函数中可以使用 ref、reactive 等函数创建响应式数据，可以更方便地处理组件的状态，实现数据的动态更新。
- **更细粒度的生命周期钩子:**  
    setup 函数中可以使用 onMounted、onUpdated、onUnmounted 等函数注册组件的生命周期钩子，可以更细粒度地控制组件的生命周期行为。
- **更好的代码组织:**  
    setup 函数将组件的逻辑集中在一个地方，使得代码更易读、易维护，并且可以更清晰地看到组件的整体逻辑。
1. 基本用法
``` javascript
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    return {
      count,
      increment
    };
  }
};
``` 
2. 参数说明
props: 组件接收的外部属性。
context: 包含 emit 和 attrs 等属性的对象。
3. 使用 props
setup 函数的第一个参数是 props，它是一个响应式的对象，包含了组件接收到的所有属性。

``` javascript
import { ref } from 'vue';

export default {
  props: {
    initialCount: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const count = ref(props.initialCount);

    function increment() {
      count.value++;
    }

    return {
      count,
      increment
    };
  }
};
``` 
4. 使用 context
setup 函数的第二个参数是 context，它是一个对象，包含了 emit 和 attrs 等属性。

``` javascript
import { ref } from 'vue';

export default {
  setup(_, context) {
    const count = ref(0);

    function increment() {
      count.value++;
      context.emit('increment', count.value);
    }

    return {
      count,
      increment
    };
  }
};
``` 
5. 返回值
setup 函数的返回值将作为组件模板的上下文。

``` javascript
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    return {
      count,
      increment
    };
  },
  template: `<button @click="increment">{{ count }}</button>`
};
``` 
6. 使用组合 API
setup 函数通常与组合 API 一起使用，例如 ref、reactive、computed 等。

``` javascript
import { ref, computed } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);

    function increment() {
      count.value++;
    }

    return {
      count,
      doubleCount,
      increment
    };
  }
};
``` 
7. 示例
下面是一个完整的示例，展示如何使用 setup 函数: 

``` javascript
import { ref, computed } from 'vue';

export default {
  props: {
    initialCount: {
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    const count = ref(props.initialCount);
    const doubleCount = computed(() => count.value * 2);

    function increment() {
      count.value++;
      context.emit('increment', count.value);
    }

    return {
      count,
      doubleCount,
      increment
    };
  },
  template: `
    <div>
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <button @click="increment">Increment</button>
    </div>
  `
};
``` 
8. 注意事项
只读属性: props 是只读的，如果需要修改，应该通过 context.emit 触发父组件的更新。
模板上下文: setup 函数的返回值将成为模板的上下文。
总结
setup 函数是 Vue 3 中用于定义组件状态和行为的核心函数。通过使用组合 API，可以编写更加简洁、易于维护的代码。合理地使用 setup 函数可以帮助开发者更好地管理组件的状态和行为。