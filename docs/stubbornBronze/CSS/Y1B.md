# 元素的三大类型

## 2.元素的三大类型

### A.块元素【block】

**常见的块元素**：`div,p,ul,li,ol,header,nav,main,footer,section....`

::: warning 注意

别忘了，**p**是**块元素**，虽然和**文字使用**

:::

**块元素的特点：**

```
1.内容独占一行
2.可以设置宽高，如果不设置宽高，则宽取决于父元素的宽，高取决于内容的高
3.可以设置内外边距
4.多个块元素之间从上到下排列
```

**块元素**可以通过设置`margin: 0 auto;`来实现在**父元素**中**水平居中**的效果(又叫做**定宽居中**==>即**先定宽，再居中**)

::: tip 【拓展延伸】

块级元素(block)特性：

        总是独占一行，表现为另起一行开始，而且其后的元素也必须另起一行显示;
        宽度(width)、高度(height)、内边距(padding)和外边距(margin)都可控制;
        
块级元素主要有：

address , blockquote , center , dir , div , dl , fieldset , form , h1 , h2 , h3 , h4 , h5 , h6 , hr , isindex , menu , noframes , noscript , ol , p , pre , table , ul , li

:::

### B.行元素【inline】

**常见的行元素**：`span,a,b,del,strong,em...`

**行元素的特点**：

```
1.内容不独占一行，而是在同一行显示
2.不能设置宽高，宽高取决于内容的宽高
3.可以设置内外边距，但是外边距上下无效
4.多个行元素从左到右排列，如果右边位置不够，则自动换行显示。
```
**行元素**可以通过给**父元素**设置`text-align: center;`来实现在**父元素**中**水平居中**的效果

::: tip 【拓展延伸】

内联元素(inline)特性：

        和相邻的内联元素在同一行;
        宽度(width)、高度(height)、内边距的top/bottom(padding-top/padding-bottom)和外边距的top/bottom(margin-top/margin-bottom)都不可改变，就是里面文字或图片的大小;
        
内联元素主要有：

 a , abbr , acronym , b , bdo , big , br , cite , code , dfn , em , font , i , img , input , kbd , label , q , s , samp , select , small , span , strike , strong , sub , sup ,textarea , tt , u , var

:::

### C.行内块元素【inline-block】

**常见的行内块元素**：`img,input,button...`

**行内块元素的特点**：

```
1.内容不独占一行，而是在同一行显示
2.可以设置宽高，如果不设置宽高，宽高取决于内容的宽高
3.可以设置内外边距
4.多个行内块元素从左到右排列，如果右边位置不够，则自动换行显示
```
**行内块元素**可以通过给**父元素**设置`text-align: center;`来实现在**父元素**中**水平居中**的效果

### D.行元素，块元素和行内块元素之间的相互转换：

```
1.display:block;把元素转换成块元素

2.display:inline;把元素转换成行元素

3.display:inline-block;把元素转换成行内块元素

```

::: tip 提示

如**div:块元素**，设置`display:inline`就可以和**span:行元素**一起显示了

:::

::: tip 【拓展延伸】

可变元素(根据上下文关系确定该元素是块元素还是内联元素)：

        applet ,button ,del ,iframe , ins ,map ,object , script

CSS中块级、内联元素的应用：

    利用CSS我们可以摆脱上面表格里HTML标签归类的限制，自由地在不同标签/元素上应用我们需要的属性。

主要用的CSS样式有以下三个：

        display:block  -- 显示为块级元素
        display:inline  -- 显示为内联元素
        display:inline-block -- 显示为内联块元素，表现为同行显示并可修改宽高内外边距等属性

我们常将所有`<li>`元素加上display:inline-block样式，原本垂直的列表就可以水平显示了。

:::