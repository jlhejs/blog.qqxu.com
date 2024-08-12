---
title: 四大Webgis地图框架的对比选择
date: 2023-08-16 00:00:00
lang: zh
type: web
duration: 15分钟
description: 我不在我的项目中使用 Prettier 的理由。
---

### 1、Leaflet 
leaflet是常规的的最适合常规gis开发的地图，因此核心功能就是“传统GIS”功能.
+ 优点
  1. 主流投影坐标支持：几乎所有的主流投影坐标系都可以支持;
  2. 矢量表达：矢量专题图，矢量空间分析，矢量瓦片，矢量可视化等矢量表达;
  3. 全样式表达：可结合主流的互联网可视化技术，如D3,Echarts,Mapv，几乎主要的地图的可视化表达都可以实现;
  4. 功能全，操作友好：功能全，插件丰富，社区生态完善.出现bug几乎百度找到，对开发者友好;
  5. 跨平台：兼容大部分浏览器，跨平台强;
  6. 移动设备的支持：内部代码框架设计的时候考虑到移动设备的支持.针对移动设备天然支持;
+ 缺点
  1. 没有使用webgl进行渲染，在可视化表达上差一点点;
  2. 没有使用硬件加速，在数据量上没有发挥硬件的最大效果;

_[文档链接：https://leafletjs.cn/reference.html#marker](https://leafletjs.cn/reference.html#marker)_
### 2、Openlayers
openlayers强调的是老ie等浏览器的兼容性.
+ 优点
  1. 主流投影坐标系支持：几乎所有的主流投影坐标系都可以支持;
  2. 脚本一体化：功能全并且集成到官方脚本;
  3. ogc协议：几乎是最遵循ogc协议的脚本了;
  4. 兼容性：兼容老的ie6789等疑难浏览器问题;
+ 缺点
  1. 功能大而虚，很多功能有实现但是实际使用效果不理想;
  2. 可视化表达差劲;
  3. 内存释放与优化差;

_[文档链接：https://openlayers.org/](https://openlayers.org/)_

### 3、Mapbox GL
Mapbox GL主要是构建世界上最漂亮的地图，因此核心功能就是一个“看”字.相关可视化库还有：Kepler-GL、Echarts-GL
+ 优点
  1. 高效矢量瓦片：真正高效实用的矢量瓦片;
  2. 顶级可视化：真正顶级的可视化渲染，mapboxGL，echartGL，KeplerGl等;
  3. 高清矢量图形：真正顶级的高清矢量图形绘制SVG，Canvas;
  4. 顶级互联网技术加持：国内Baidu，国外Uber，Mapbox等顶级可视化巨头技术加持;
+ 缺点
  1. 只支持web墨卡托投影(EPSG：3857);
  2. 三维表达局限于高程和基本高程无法支持浮空真三维模型，这就是mapbox的关于三维的设置项叫做fill-extrusion而不是model的原因;

_[文档链接：https://www.mapbox.com/mapbox-gljs](https://www.mapbox.com/mapbox-gljs)_


### 4、Cesium
Cesium强调的是BIM三维模型，倾斜摄影的表达，重点在于三维建模与时态模拟.
+ 优点
  1. 倾斜摄影：支持倾斜摄影，地形，海洋环境等三维场景展现;
  2. BIM三维建模：支持BIM管网建模和3dx,gltf模型的展示;
  3. 时态表达：支持时态，时间播放，时间动画，时空聚类等时空展现;
+ 缺点
  1. 没有类似unity的特殊光晕效果，虽然使用了webgl但效果平平;
  2. 自成体系的模型与几何绘制策略，需要重新学习;
  3. 代码过重，并且主视图必须获取顶级div，影响工程代码结构;

   _[文档链接：https://cesium.com/platform/cesiumjs/](https://cesium.com/platform/cesiumjs/)_
