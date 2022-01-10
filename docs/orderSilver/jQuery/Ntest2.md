# 【jQuery案例】jQuery手风琴

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>练习：jQuery手风琴</title>
  <script src="./JQquery运行文件/jquery.min.js"></script>
  <style>
      * {
        margin: 0;
        padding: 0;
      }
      a {
        text-decoration: none;
      }
      ul {
        list-style: none;
      }
      .box{
          width: 1000px;
          height: 100px;
          padding: 5px;
          border: 1px solid #000;
      }
      .box li{
          width: 100px;
          height: 100px;
          display: inline-block;
          text-align: center;
          line-height: 100px;
          color: white;
          border-radius: 5px;
          background-color: yellowgreen;
      }
      .box .current{
          width: 300px;
      }
  </style>
</head>
<body>
  <div class="box">
      <ul>
          <li class="current">第1块</li>
          <li>第2块</li>
          <li>第3块</li>
          <li>第4块</li>
          <li>第5块</li>
          <li>第6块</li>
          <li>第7块</li>
      </ul>
  </div>
  <script>
     $(function () {
         $(".box li").mouseenter(function () {
             $(this).stop().animate({
                 width:300
             });
             $(this).siblings("li").stop().animate({
                 width:100
             })
         })
     })
  </script>
</body>

</html>
```

::: warning 注意

`<script src="./JQquery运行文件/jquery.min.js"></script>`本文中的jQuery来自网络下载到本地的运行文件，需要预先下载，建议去官网下载一下。

:::