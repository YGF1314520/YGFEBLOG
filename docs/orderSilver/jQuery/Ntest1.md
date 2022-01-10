# 【jQuery案例】弹幕效果

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>练习：弹幕效果</title>
    <script src="./JQquery运行文件/jquery.min.js"></script>
    <style>
      .box {
        width: 600px;
        padding: 10px;
        border: 1px solid #000;
      }
      .txt {
        width: 450px;
      }
      ul {
        width: 450px;
        padding-left: 80px;
        list-style: none;
      }
      ul li {
        line-height: 25px;
        border-bottom: 1px dashed #ccc;
        display: none;
      }
      ul a{
          float: right;
      }
    </style>
  </head>
  <body>
    <div class="box" id="weibo">
      <span>微博发布</span>
      <textarea name="" class="txt" cols="30" rows="10"></textarea>
      <button class="btn">发布</button>
      <ul></ul>
    </div>
    <script>
      $(function () {
        //  1.点击发布按钮，动态创建一个小li,放入文本框的内容和删除按钮，并添加到ul中
        $(".btn").on("click", function () {
          var li = $("<li></li>");
          li.html($(".txt").val() + "<a href='javascript:;'>删除</a>");
          $("ul").prepend(li);
          li.slideDown();
          $(".txt").val("");
        });
        // 2.点击的删除按钮，可以删除当前的微博留言li
        // $("ul a").click(function () { //此时的click不能给动态创建的a添加事件
        //     alert(11);
        // })
        // on可以给动态创建的元素绑定事件
        $("ul").on("click","a",function () {
            $(this).parent().slideUp(function () {
                $(this).remove();
            })
        })
      });
    </script>
  </body>
</html>

```

::: warning 注意

`<script src="./JQquery运行文件/jquery.min.js"></script>`本文中的jQuery来自网络下载到本地的运行文件，需要预先下载，建议去官网下载一下。

:::