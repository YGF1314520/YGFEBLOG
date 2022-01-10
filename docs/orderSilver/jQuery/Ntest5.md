# 【jQuery案例】jQuery中的tab切换

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>练习：jQuery中的tab切换</title>
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
        width: 500px;
      }
      .tab_list {
        display: flex;
        justify-content: center;
      }
      .tab_list li {
        width: 90px;
        text-align: center;
        border: 1px solid #000;
        background-color: yellow;
        display: inline-block;
        cursor: pointer;
      }
      .tab_list .current{
        color: white;
        background-color: red;
      }
      .tab_con{
        width: 500px;
        height: 200px;
        border: 1px solid #000;
        position: relative;
      }
      .item{
        width: 500px;
        line-height: 200px;
        background-color: skyblue;
        text-align: center;
        position: absolute;
        color: white;
        font-size: larger;
        font-weight: bolder;
        font-family: "楷书";
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="tab_list">
        <ul>
          <li class="current">导航1</li>
          <li>导航2</li>
          <li>导航3</li>
          <li>导航4</li>
          <li>导航5</li>
        </ul>
      </div>
      <div class="tab_con">
        <div class="item" style="display:block">内容1</div>
        <div class="item">内容2</div>
        <div class="item">内容3</div>
        <div class="item">内容4</div>
        <div class="item">内容5</div>
      </div>
    </div>

    <script>
      $(function () {
        // 1.点击上部的li，当前li 添加current类，其余兄弟移除类
        $(".tab_list li").click(function () {
          // 链式编程操作
          $(this).addClass("current").siblings().removeClass("current");
          // 2.点击的同时，得到当前li 的索引号
          var index = $(this).index();
          console.log(index);
          // 3.让下部里面相应的索引号的item显示，其余的item隐藏
          $(".tab_con .item").eq(index).show().siblings().hide();
        })
      });
    </script>
  </body>
</html>

```

::: warning 注意

`<script src="./JQquery运行文件/jquery.min.js"></script>`本文中的jQuery来自网络下载到本地的运行文件，需要预先下载，建议去官网下载一下。

:::