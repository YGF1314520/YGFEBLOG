# 绪论

## 一、什么是CSS？

**CSS** 指的是**层叠样式表** (**Cascading Style Sheets**)。

## 二、为什么要使用CSS？

**CSS** 用于定义**网页的样式**，包括**针对不同设备**和**屏幕尺寸**的**设计**和**布局**。

## 三、CSS语法

```
    选择器{属性 值}
    {属性 值}：声明
```
# CSS层叠样式表

## 1.CSS样式的三种基本方式

**样式的优先级顺序：内联样式>内部样式>外部样式**

### A．内联样式

```
    <标签 style="css样式内容"></标签>
```

**行内样式**（也称**内联样式**）可用于为**单个元素**应用**唯一**的**样式**。

如需使用**行内样式**，请将 **style** 属性添加到**相关元素**。**style** 属性可包含**任何 CSS 属性**。

::: tip 提示

**行内样式**失去了样式表的许多优点（通过将内容与呈现混合在一起）。请谨慎使用此方法。但是它的优先级最高！

:::

### B．内部样式

```
    <style>css样式内容</style>
```
如果一张 **HTML 页面**拥有**唯一的样式**，那么可以使用**内部样式表**。
**内部样式**是在**head部分**的 `<style>` 元素中进行定义。

### C．外部样式（外部引用样式）

```
    <link rel="stylesheet" href="外部css样式文件">
```
通过使用**外部样式表**，您只需修改**一个文件**即可改变**整个网站**的外观！

每张 **HTML 页面**必须在 **head 部分**的 `<link>` 元素内包含对**外部样式表文件**的引用。

**外部样式表**可以在任何文本编辑器中编写，并且必须以 **.css 扩展名**保存。

**外部 .css 文件**不应包含**任何 HTML 标签**。

::: warning 注意

请勿在**属性值**和**单位**之间**添加空格**

:::