# 【jQuery案例】jQuery突出显示

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>练习：jQuery突出显示</title>
  <script src="./JQquery运行文件/jquery.min.js"></script>
  <style>
      *{
          margin: 0;
          padding: 0;
      }
      div{
          width: 340px;
          background-color: black;
      }
      li{
          width: 100px;
          height: 100px;
          display: inline-block;
          margin: 5px;
          text-align: center;
          line-height: 100px;
          font-size: larger;
          font-weight: bolder;
          color: yellowgreen;
          background-color: white;
      }
  </style>
</head>
<body>
  <div class="wrap">
      <ul>
          <li>第1块</li>
          <li>第2块</li>
          <li>第3块</li>
          <li>第4块</li>
          <li>第5块</li>
          <li>第6块</li>
      </ul>
  </div>
  <script>
     $(function () {
        //  鼠标进入的时候，其他的li标签透明度：0.5
        $(".wrap li").hover(function() {
            $(this).siblings().stop().fadeTo(400,0.5);
        },function () {
            // 鼠标离开，其他li 透明度改为1
            $(this).siblings().stop().fadeTo(400,1);
        })
        
     })
  </script>
</body>

</html>
```

::: warning 注意

`<script src="./JQquery运行文件/jquery.min.js"></script>`本文中的jQuery来自网络下载到本地的运行文件，需要预先下载，建议去官网下载一下。

:::