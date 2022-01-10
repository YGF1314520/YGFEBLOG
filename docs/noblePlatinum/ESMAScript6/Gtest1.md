# 【ES6案例】 箭头函数实践

## 完整源码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>案例：箭头函数实践</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        background: #58a;
      }
    </style>
  </head>
  <body>
    <div id="ad"></div>
    <script>
      // 需求-1 点击 div 2s 后颜色变成了 [粉色]
      let ad = document.querySelector("#ad");
      ad.addEventListener("click", function () {
        // 保存 this 的值
        // let _this = this;
        // 定时器
        setTimeout(() => {
          // 修改背景颜色 this
          console.log(this);
          // _this.style.background = 'pink';
          this.style.background = "pink";
        }, 2000);
      });
      // 需求-2 从数组中返回偶数的元素
      const arr = [1, 6, 9, 10, 100, 25];
      //   const result = arr.filter(function (item) {
      //     if (item % 2 === 0) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   });
      const result = arr.filter((item) => item % 2 === 0);
      console.log(result);

      // 箭头函数适合与this 无关的回调，定时器，数组的方法回调
      // 箭头函数不适合与this 有关的回调。事件回调，对象的方法

    </script>
  </body>
</html>

```

## 需求-1 点击 div 2s 后颜色变成了 [粉色]

```js
    let ad = document.querySelector("#ad");
      ad.addEventListener("click", function () {
        // 保存 this 的值
        // let _this = this;
        // 定时器
        setTimeout(() => {
          // 修改背景颜色 this
          console.log(this);
          // _this.style.background = 'pink';
          this.style.background = "pink";
        }, 2000);
    });
```

## 需求-2 从数组中返回偶数的元素

```js
    const arr = [1, 6, 9, 10, 100, 25];
      //   const result = arr.filter(function (item) {
      //     if (item % 2 === 0) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   });
    const result = arr.filter((item) => item % 2 === 0);
    console.log(result);
```

::: tip 总结

- 箭头函数适合与this 无关的回调，定时器，数组的方法回调
- 箭头函数不适合与this 有关的回调。事件回调，对象的方法

:::