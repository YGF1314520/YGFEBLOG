# 日期篇【C.Date 日期对象】

## 实例化一个date对象

```js
    var date = new Date();
```

## 获取号（天）数  getDate()

```js
    console.log(date.getDate());
```

## 获取周几（星期） 0-6 getDay

```js
    console.log(date.getDay());
```

## 获取年份 getFullYear()

```js
    console.log(date.getFullYear());
```

## 获取小时  getHours()

```js
    console.log(date.getHours());
```

## 获取分钟  getMinutes()

```js
    console.log(date.getMinutes());
```

## 获取秒  getSeconds()

```js
    console.log(date.getSeconds());
```

## 获取毫秒 getMilliseconds 

```js
    console.log(date.getMilliseconds());
```

## 获取月份 从0开始算  getMonth 因此需要+1

```js
    console.log(date.getMonth()+1);
```

## 获取从 1970年 1月1号 到现在的毫秒数 

```js
    console.log(date.getTime());
```

## UTC 格林威治时间 

```js
    console.log(date.getUTCFullYear());//年
    console.log(date.getUTCMonth());//月
    console.log(date.getUTCDate());//日
    console.log(date.getUTCDay());//周
    console.log(date.getUTCHours());//时
    console.log(date.getUTCMinutes());//分
    console.log(date.getUTCSeconds());//秒
    console.log(date.getUTCMilliseconds());//毫秒
```

## 重置日期

```js
    date.setDate(1);
    console.log(date.getDate());
```

## 返回字符串格式的日期 周次 月份  年份

## 获取周 月 日 年 toDateString()

```js
    console.log(date.toDateString());
    console.log(date.toJSON());
```

## 获取年月日 toLocaleDateString()

```js
    console.log(date.toLocaleDateString());
```

## 获取时间 toLocaleTimeString()

```js
    console.log(date.toLocaleTimeString());
```

## 获取中国标准时间 toString()

```js
    console.log(date.toString());
```