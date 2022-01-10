# 布尔篇【B.Boolean 布尔对象】

## 实例化一个Boolean对象

```js
    var bool = new Boolean(true);//默认是false
    console.log(bool);
```

## Boolean对象也是包装对象  会自动拆箱

```js
    console.log(bool&&false);
```

## 返回 Boolean 对象的原始值。

```js
     console.log(bool.valueOf());
```

## 把布尔值转换为字符串，并返回结果。

```js
    console.log(bool.toString());
```