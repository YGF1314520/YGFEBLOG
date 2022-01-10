# ESMAScript6 模块导读

## ES6 有哪些新特性？

- let const 与 var 的区别

~~~

1: var 声明的变量有变量提升 let  const 没有
2：let 声明为变量 const 为常量
3：const 复制对象或者数组，对象与数组可以被改变便，因为const 保证的指针不变
4：let const 变量 为块级作用域
5：let const 变量不能重复
6: let const 会形成暂时性死区

~~~

- 详细介绍promise 
~~~
1：因为传统异步是通过回到函数方式结果的，为了解决回调地狱导致代码可读性差，可维护成本，所以有了promise
2: promise 三种状态 pending（进行中） resolve（已完成） reject（已拒绝）
3：promise中原型上方法 then catch  catch不会所有的错误，then 执行状态改变，then返回新的promise,then也可以执行 下一个prmise 任务。支持.then 通过链式调用完成多个异步任务
4：new Promise 中函数为同步执行  .then中函数为异步执行了
5：Promise 上静态方法：all  race resolve reject 等  
   - all 处理并发业务，所有的都成功了执行then 
   - race 多个promise 中 有一个成功了执行then 
   - resolve 将状态变为已完成
   - reject  将状态变为已拒绝

~~~

- promise 中那些是异步的那些是同步的

~~~
new promise 中函数 为同步

.then .catch 中函数为异步

~~~
 
- 如何解决回调地狱代码可读性差

~~~
promise
~~~

- 谈谈你对 async awiat 的理解

~~~
1: async 函数 返回值为 promie实例
2：await 只能在 async 中使用
3：async awati 同步写法异步的程序
4：await 后面需要跟 promise 实例
   - async 返回的    ----> await返回值  return
   - new Promise    -----> await 返回值 resolve实参
   - then 返回的promise ----> await 返回值 then中函数的 return

~~~

- 说一下class 的作用

~~~
是 es6中新增的class 类型
1：可以实例化对象
2: extends 继承
3：constructor 构造器，当class 类执行时候；触发constructor 狗爪槭
4：super 触发父类中的构造器
5：static 关键字可以定义，类的静态属性和静态方法
~~~


- class 中super 你是怎么应用的
~~~
1：触发父类的构造器
2：在子类中调用父类的静态方法

~~~


- es6 对象扩展有那些内容
~~~
1：解构赋值  
2：对象属性简写
3：扩展运算符
~~~


- 异步编程语言进化的过程是什么？
~~~
回调函数---> promise --->generator ---->async await
~~~

- 请说出箭头函数有什么特点

~~~
1: 匿名函数改为箭头函数
2：没有this 使用上一层中的this
3: 没有arguemets  用 rest 参数代替

~~~