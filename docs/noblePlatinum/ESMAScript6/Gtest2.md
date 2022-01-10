# 【ES6案例】 let 案例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>案例：let 案例</title>
    <style>
      h2 {
        font-size: larger;
      }
      .item {
        width: 100px;
        height: 50px;
        display: inline-block;
        border: 1px solid #000;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>点击切换颜色</h2>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <script>
      var items = document.querySelectorAll(".item");
      for (let i = 0; i < items.length; i++) {
        items[i].onclick = function () {
          console.log(i);
          this.style.background = "pink";
        };
      }
    </script>
  </body>
</html>

```