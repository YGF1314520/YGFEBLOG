# 数值篇【E.Number 数值对象】

## 实例化一个对象

```js
    var num1 = new Number(1);
    console.log(num1);
```

## 直接赋值创建对象

```js
    var num2 = 1;
```

## typeof 判断数据类型

```js
    console.log(typeof(num1),typeof(num2));//object和number
```

当遇见**算术运算符**时 `Number`类型的**对象**会**自动拆箱** 变成**基本数据类型**

**自动拆箱**(将**Number类型的对象自动转为数字**)和**自动装箱**(将**数字转为Number类型的对象**)
    
当**number类型**的**基本数据类型** 遇到**调用方法**时会**自动装箱****变成一个对象**

```js
    console.log(num1 == num2);
    console.log(num1 + 3);
```

## Number 对象的API

### js中最大值 Number.MAX_VALUE

```js
    console.log(Number.MAX_VALUE);//1.7976931348623157e+308
```

### js中最小值 Number.MIN_VALUE 

```js
    console.log(Number.MIN_VALUE);//5e-324
```

### 表示非数值 NaN

```js
    console.log(Number.NaN);
```

### Number判断API 返回值是：true && false

```js
    var num = Infinity;//无限 Infinity
```

### 判断一个数是否是有限的 isFinite

```js
    console.log(Number.isFinite(num));
```

### 判断一个数是否是整数 isInteger

```js
    console.log(Number.isInteger(3));
```

### 判断一个数是否是NaN isNaN

```js
    console.log(Number.isNaN(2));
```

### 从字符串中找到数字  必须是开头就是 如果不是就返回 NaN parseFloat

```js
    console.log(Number.parseFloat("5555我和你555555心连心5555同住地球村"));
```

###  将一个小数或 字符串类型的小数 变成 整数 parseInt

```js 
    console.log(Number.parseInt(66.666));
    console.log(Number.parseInt("99.999"));
```

### 数值转字符串toString 

```js
    var num = 99;
    console.log(num.toString());
```

### 保留几位小数 

```js
    var num = 100;
    console.log(num.toFixed(2));
```

::: tip 常用的Number的Api:

isNaN (判断是否为非数值) 

parseInt(取整)  

parseFloat(寻找数字【必须第一个就是】) 

toString(数字转字符串)  

toFixed(保留小数)

:::