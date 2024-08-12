---
title: lottie-web的基本用法
date: 2023-07-05T14:06:00Z
lang: zh
type: web
duration: 5分钟
description: 我不在我的项目中使用 Prettier 的理由。
---


### 基本使用
```javascript
const animation = lottie.loadAnimation({
    container: document.getElementById("lottie"), // Dom元素
    renderer: 'svg', // 渲染方式 可以是svg、canvas和html
    loop: true, // 循环播放 指定动效是不是加载后就立即播放，true是立即播放，false不是立即播放
    autoplay: true, // 自动播放
    path:"", // 用来指定Lottie Web动效的JSON文件路径，一般由AE软件中导出的JSON文件
    animationData: animationData, // animationData与path互斥，是一个包含导出的动画数据的对象 
    rendererSettings:{
        context: canvasContext, // the canvas context, only support "2d" context
        preserveAspectRatio: 'xMinYMin slice', // Supports the same options as the svg element's preserveAspectRatio property
        title: 'Accessible Title', // Adds SVG title element for accessible animation title
        description: 'Accessible description.', // Adds SVG desc element for accessible long description of animation
        clearCanvas: false,
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
        className: 'some-css-class-name',
        id: 'some-id',
    }
});
```

### lottie-web常用方法

```javascript
animation.play(); // 播放该动画，从目前停止的帧开始播放
animation.stop(); // 停止播放该动画，回到第0帧
animation.pause(); // 暂停该动画，在当前帧停止并保持
animation.goToAndStop(value, isFrame); // 跳到某个时刻/帧并停止。isFrame(默认false)指示value表示帧还是时间(毫秒)
animation.goToAndPlay(value, isFrame); // 跳到某个时刻/帧并进行播放
animation.goToAndStop(30, true); // 跳转到第30帧并停止
animation.goToAndPlay(300); // 跳转到第300毫秒并播放
animation.playSegments(arr, forceFlag); // arr可以包含两个数字或者两个数字组成的数组，forceFlag表示是否立即强制播放该片段
animation.playSegments([10,20], false); // 播放完之前的片段，播放10-20帧
animation.playSegments([[0,5],[10,18]], true); // 直接播放0-5帧和10-18帧
animation.setSpeed(speed); // 设置播放速度，speed为1表示正常速度
animation.setDirection(direction); // 设置播放方向，1表示正向播放，-1表示反向播放
animation.destroy(); // 删除该动画，移除相应的元素标签等。在unmount的时候，需要调用该方法
```
