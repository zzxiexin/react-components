---
title: Button
subtitle: 按钮
demo:
  cols: 1
group:
  title: 基础组件
  order: 1
---

### 类型

按钮有六种类型：默认按钮、主题按钮、虚线按钮、危险按钮、链接按钮和文本按钮。  
<code src="./demo/default.tsx"></code>

### 大小

按钮有大、中、小三种尺寸。

通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。

<code src="./demo/size.tsx"></code>

### 禁用

添加 disabled 属性即可让按钮处于不可用状态，按钮事件将不会被执行，同时按钮样式也会改变。
<code src="./demo/disabled.tsx"></code>

### 防抖

配置倒计时按钮，在配置的时间过后才可点击。
<code src="./demo/canClick.tsx"></code>

### 节流

配置倒计时按钮，在配置的时间过后才可点击。
<code src="./demo/throttle.tsx"></code>

### 幽灵

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上
<code src="./demo/ghost.tsx"></code>

### 圆形按钮

通过添加shape： circle，可将按钮设置成圆形，但是如果文字长宽不相等，则出不了圆形效果
<code src="./demo/circle.tsx"></code>
