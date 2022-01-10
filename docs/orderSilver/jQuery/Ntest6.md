# 【jQuery案例】jQuery中的tab切换(垂直列表)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>练习：jQuery中的tab切换(垂直列表)</title>
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
      .wrapper{
          width: 400px;
          border: 1px solid #000;
      }
      .wrapper::before,.wrapper::after{
          display: block;
          content: "";
          clear: both;
      }
      #left{
          width: 100px;
          text-align: center;
          float: left;
          background-color: yellow;
      }
      #left li{
          border: 1px solid #000;
      }
      #content{
          float: left;
          position: relative;
          background-color: yellowgreen;
      }
      #content div{
          width: 300px;
          line-height: 203px;
          text-align: center;
          border: 1px solid #000;
          position: absolute;
          background-color: pink;
      }
      #content a{
        color: white;
        font-size: 21px;
        font-weight: bolder;
        font-family: "隶书";
      }
  </style>
</head>
<body>
  <div class="wrapper">
      <ul id="left">
          <li><a href="#">标题1</a></li>
          <li><a href="#">标题2</a></li>
          <li><a href="#">标题3</a></li>
          <li><a href="#">标题4</a></li>
          <li><a href="#">标题5</a></li>
          <li><a href="#">标题6</a></li>
          <li><a href="#">标题7</a></li>
          <li><a href="#">标题8</a></li>
          <li><a href="#">标题9</a></li>
      </ul>
      <div id="content">
          <div><a href="#">内容1</a></div>
          <div><a href="#">内容2</a></div>
          <div><a href="#">内容3</a></div>
          <div><a href="#">内容4</a></div>
          <div><a href="#">内容5</a></div>
          <div><a href="#">内容6</a></div>
          <div><a href="#">内容7</a></div>
          <div><a href="#">内容8</a></div>
          <div><a href="#">内容9</a></div>
      </div>
  </div>
  <script>
     $(function () {
        //  1.鼠标经过左侧的小li
        $("#left li").mouseover(function () {
            $(this).css("background","red");
            $(this).siblings().css("background","");
            // 2.得到当前小li的索引号
            var index = $(this).index();
            console.log(index);
            // 3.让我们右侧的盒子相应的索引号的图片显示出来就好了
            // $("#content div").eq(index).show();
            // 4. 让其余的图片 (就是其他的兄弟) 隐藏起来
            // $("#content div").eq(index).siblings().hide();
            // 链式编程
            $("#content div").eq(index).show().siblings().hide();
        })
     })
  </script>
</body>

</html>
```

::: warning 注意

`<script src="./JQquery运行文件/jquery.min.js"></script>`本文中的jQuery来自网络下载到本地的运行文件，需要预先下载，建议去官网下载一下。

:::