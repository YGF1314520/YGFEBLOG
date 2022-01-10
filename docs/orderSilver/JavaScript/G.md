# JavaScript 简介

## 1.初识JavaScript

**JavaScript** 是 Web 的**编程语言**。

**JavaScript** 是一种**轻量级的编程语言**。

**JavaScript** 是可插入 **HTML页面的编程代码**。

**JavaScript** 插入 **HTML 页面**后，可由**所有的现代浏览器执行**。

### **为什么要学习JavaScript？？？**

1. `HTML` 定义了**网页的内容**
2. `CSS` 描述了**网页的布局**
3. `JavaScript` 控制了**网页的行为**

## 2.JavaScript的两种用法：

### **第一种**：**js**写在我们 **script标签**中

**一般我们写在 body结束标签的上方**

```js
    <script></script>
```

### **第二种**：**外部引用js文件**

```js
    <script src=""></script>
```

## 3.JavaScript的三种打印方法：

### 在网页中打印**document.write(" ");**

::: warning 注意

可以解析,标签结构的字符串

:::

```js
    document.write("Hello World!!");
```

**也可以打印HTML标签**

```js
    document.write("<div>我是打印的第一个div标签</div>");
    
    document.write("<div><p>我是嵌套的段落</p></div>");
```

### 在控制台中打印**console.log(" ");**

::: warning 注意

不可以解析 标签结构的字符串

:::

```js
    console.log("Hello World!!!");
```

**也可以打印其他功能**：

#### 打印信息:

```js
    console.info("info");
```
#### 打印错误：

```js
    console.error("error");
```
#### 打印警告：

```js
    console.warn("warn"); 
```

### 弹窗**alert(" ");**

::: warning 注意

**不可以解析** **标签结构**的**字符串**

:::

会**造成代码**的**阻塞** 只有**点击确定后**代码**才会继续执行**

```js
    alert("弹窗");
```

::: tip 提示

**在后期的学习中，要多敲代码，多使用`console.log(" ");`这将会是对学习JavaScript很有帮助的！！！**

:::