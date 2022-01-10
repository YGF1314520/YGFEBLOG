# 【jQuery案例】jQuery下拉菜单

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>练习：jQuery下拉菜单</title>
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
      .nav {
        width: 200px;
        height: 30px;
        background-color: pink;
      }
      .nav li {
        width: 64px;
        height: 30px;
        border: 1px solid #000;
        float: left;
        line-height: 30px;
        text-align: center;
      }
      .nav li ul {
        width: 65px;
        height: 95px;
        background-color: #f00;
        display: none;
      }
      /* ul li:hover ul{
          display: block;
      } */
    </style>
  </head>
  <body>
    <ul class="nav">
      <li>
        <a href="#">导航1</a>
        <ul>
          <li><a href="#">项目1</a></li>
          <li><a href="#">项目2</a></li>
          <li><a href="#">项目3</a></li>
        </ul>
      </li>
      <li>
        <a href="#">导航2</a>
        <ul>
          <li><a href="#">项目1</a></li>
          <li><a href="#">项目2</a></li>
          <li><a href="#">项目3</a></li>
        </ul>
      </li>
      <li>
        <a href="#">导航3</a>
        <ul>
          <li><a href="#">项目1</a></li>
          <li><a href="#">项目2</a></li>
          <li><a href="#">项目3</a></li>
        </ul>
      </li>
    </ul>
    <script>
      $(function () {
        // // 鼠标经过
        // $(".nav>li").mouseover(function () {
        //   // $(this) jQuery 当前元素 this不要加引号
        //   // show() 显示元素 hide() 隐藏元素
        //   // $(this).children("ul").show();
        //   $(this).children("ul").slideDown(200);
        // });

        // //鼠标离开
        // $(".nav>li").mouseout(function () {
        //   // $(this).children("ul").hide();
        //   $(this).children("ul").slideUp(200);
        // });
        // 1.事件切换 hover 就是鼠标经过和离开的复合写法
        // $(".nav>li").hover(
        //   function () {
        //     $(this).children("ul").slideDown(200);
        //   },
        //   function () {
        //     $(this).children("ul").slideUp(200);
        //   }
        // );
        // 2.事件切换 hover 如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数
        $(".nav>li").hover(function () {
          // stop 方法必须写到动画的前面
          $(this).children("ul").stop().slideToggle();
        })
      });
    </script>
  </body>
</html>

```

::: warning 注意

`<script src="./JQquery运行文件/jquery.min.js"></script>`本文中的jQuery来自网络下载到本地的运行文件，需要预先下载，建议去官网下载一下。

:::