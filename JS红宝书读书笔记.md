# JS红宝书读书笔记

## 第一章	什么是 JS ？

​	略

## 第二章	HTML中的JS

​	略

## 第三章	语言基础

### 3.1	语法

### 3.2	关键字和保留字

### 3.3	变量

### 3.4	 数据类型

### 3.5	操作符

### 3.6	语句

### 3.7	函数

### 3.8	小结

## 第四章 	变量、作用域 与内存

###	4.1	变量

#### 4.1.1	原始值和引用值

​	原始值：symbol	string	number	boolean	null	undefined

​	引用值：多个值构成的对象

​	JS不允许直接访问内存位置，所以操作对象的时候，实际操作的是对该对象的引用。

#### 4.1.2	动态属性

​	引用值可以通过 Object.property 来动态增加属性。

#### 4.1.3	复制

​	原始值复制的时候会是拷贝一个新的副本赋值，而引用值复制的时候只是复制了一个引用，本质上指向堆内存中的同一个对象。

#### 4.1.4	函数传值

​	JS函数传值本质上全部都是复制传值，当传入一个对象时，也会复制一个引用值给函数内的局部变量，使得函数内的局部变量也指向这个对象，看起来似乎传入了这个对象，实际上只是复制了对象的引用。

#### 4.1.5	判断变量类型

​	typeof 操作符适合判断原始值类型，instanceof 适合判断引用值类型。

​	所有引用值都是 Object 的实例。

### 4.2	执行上下文和作用域

​	函数会创造一个局部作用域，嵌套的函数就形成了一个作用域链。

​	作用域决定了可以访问的变量和函数的范围，作用域链就决定了访问的先后顺序。

​	举例：在浏览器中，作用域链从 window（全局作用域） --> arguments（函数默认参数对象，在这个场景下可称为活动对象）

#### 4.2.1	作用域增强

- with语句
- try / catch 的 catch 块

例子：

```js
function buildUrl() {
	let qs = "?debug=ture";
	
	with (location) {
		let url = href + qs;	// 此处就改变了作用域，href === location.href
	}
	
	return url;
}
```

#### 4.2.2	变量声明

ES6新变量和var作用域方面的区别：

使用 var 声明变量

> 变量会被自动添加到最近的作用域上，并会被拿到函数或全局作用于的顶部，位于作用域中所有代码之前，这个现象叫做`变量提升`。
>
> ```js
> console.log(name);	// undefinded 而不是 Reference Error
> var name = 'Jack';
> ```
>
> 

使用 let 声明变量

> 块级作用域，只在 { } 内有效，且不会变量提升。
>
> ```js
> console.log(z);	// Reference Error
> let z = 123;使用 let 声明变量
> ```

使用 const 声明常量

> 除了初始化后不能修改，其他特性与 let 相同。
>
> 但是如果声明的是一个对象，那么添加属性不受限制，可以通过 `Object.freeze()`使得添加属性静默失败。
>
> ```js
> const o1 = {};
> o1 = {}; // TypeError: Assignment to a constant variable 
> 
> const o2 = {};
> o2.name = 'Jack';
> console.log(o2); // 'Jack'
> 
> const o3 = Object.freeze({});
> o3.name = 'Jack';
> console.log(o3); // undefined
> ```

### 4.3	垃圾回收

#### 4.3.1	标记清理法

​	基本的垃圾回收算法称为**“标记-清除”**，定期执行以下“垃圾回收”步骤:

- 垃圾回收器获取根并**“标记”**(记住)它们。
- 然后它访问并“标记”所有来自它们的引用。
- 然后它访问标记的对象并标记它们的引用。所有被访问的对象都被记住，以便以后不再访问同一个对象两次。
- 以此类推，直到有未访问的引用(可以从根访问)为止。
- 除标记的对象外，所有对象都被删除。

例如，对象结构如下:

![图片描述](C:\Users\Admin_zqm\Desktop\笔记\JS红宝书读书笔记.assets\bVbqd7y)

我们可以清楚地看到右边有一个“不可到达的块”。现在让我们看看**“标记并清除”**垃圾回收器如何处理它。

**第一步标记根**

![图片描述](C:\Users\Admin_zqm\Desktop\笔记\JS红宝书读书笔记.assets\bVbqd7V)

**然后标记他们的引用**

![图片描述](C:\Users\Admin_zqm\Desktop\笔记\JS红宝书读书笔记.assets\bVbqd71)

**以及子孙代的引用:**

![图片描述](C:\Users\Admin_zqm\Desktop\笔记\JS红宝书读书笔记.assets\bVbqd8a)

**现在进程中不能访问的对象被认为是不可访问的，将被删除:**

![图片描述](C:\Users\Admin_zqm\Desktop\笔记\JS红宝书读书笔记.assets\bVbqd8A)

这就是垃圾收集的工作原理。JavaScript引擎应用了许多优化，使其运行得更快，并且不影响执行。

#### 4.3.2	引用计数法

为每个变量分配一个被引用数，当被变量被声明时，引用数+1；当变量引用的值被赋值给另外一个变量，引用数+1；当保存这个值的引用的变量被覆盖了，引用数-1。

当引用数变为 0 的时候，任何变量都没有引用该值，则回收该值的内存。

> 引用计数法存在循环引用的问题，即两个对象相互应用，导致值无法被回收，所以逐渐弃用。

#### 4.3.3	性能

GC基于已分配对象的大小和数量来判断何时进行。

#### 4.3.4	内存管理

1. 把不需要的对象赋值为 null ，从而解除引用。
2. 使用 const 和 let 声明，块级作用域可以更早触发GC。
3. 在构造函数内一次性声明所有属性，从而配和 V8 引擎的隐藏类。
4. 避免内存泄漏（不意外声明全局变量、避免使用内部闭包）。
5. 使用静态分配和对象池（极端，很少使用）。

## 第五章  基本引用类型

​	引用值（对象）是某个特定引用类型的实例。

### 5.1	Date

​	新建 Date 对象： 

```js
let  date = new Date("May 23, 2019");
	
let  date = new Date("5/23/2019");

new Date() 中隐式调用了 Date.parse("May 23, 2019"); 将字符串转为时间戳。
```

​	新建 Date 对象（UTC）：

```js
let  date = new Date( 2019, 5, 23, 17, 55, 55 ); 

new Date() 中隐式调用了 Date.UTC( 2019, 5, 23, 17, 55, 55 ); 将参数转为时间戳。
```

​	获取当前时间戳：

```js
let timeStamp = Date().now()
```

### 5.2	RegExp

​	创建正则表达式的方法：

```js
let expression =  /pattern/flags;
```

​	其中 flags 的值可以如下：

```js
g	-全局匹配多次
i	-不区分大小写
m	-多行模式
y	-粘附模式
u	-Unicode模式
s	-dotAll模式，表示元字符.匹配任何字符（包括\n或\r）

eg	let pattern1 = /at/g; // 匹配字符串中所有的"at"
	let pattern2 = /[bc]at/i; // 匹配第一个"bat"或"cat",忽略大小写
	let pattern3 = /.at/gi; // 匹配所有以"at"结尾的三字符组合，忽略大小写
	let pattern4 = /\.at/gi; // 匹配所有的".at"，忽略大小写	
```

​	正则的使用方法：

​	1. exec()	提取

```js
let text = "cat, bat, sat, fat";

let pattern = /.at/;	// 非全局
let matches = pattern.exec(text);
// 第一次
matches.index	// 0
matches[0]		// cat
pattern.lastIndex	// 0
// 第二次
matches.index	// 0
matches[0]		// cat
pattern.lastIndex	// 0

let pattern = /.at/g;	// 非全局
let matches = pattern.exec(text);
// 第一次
matches.index	// 0
matches[0]		// cat
pattern.lastIndex	// 3
// 第二次
matches.index	// 5
matches[0]		// cat
pattern.lastIndex	// 8

```

2. test()	匹配

```js
let text = "000-00-0000";
let pattern = /\d{3}-d{2}-\d{4}/;

pattern.test(text);		// true
```

正则详细语法：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

### 5.3 原始值包装类型

```js
为什么 "some text".substring(2) 可以运行？字面量怎么可以像对象一样调用方法？
原理：
	以读模式访问字符串时，后台会进行这样的操作
    1. let _str = new String("some text");
	2. _str.substring(2);
	3. _str = null;
简而言之，就是临时创建一个对象对字面量进行包装，包装对象对 valueof(), toString() 等方法，使其可以有相应工具属性等；
对于 布尔值 和 数值 而言，也是同样的过程。
```

Tips：

Object 可作为工厂函数，根据不同参数返回不同的包装类型
eg. 

```js
let obj1 = new String("some text");
console.log( obj1 instanceof String ); // true

let obj2 = new Object("some text");
console.log( obj2 instanceof String ); // true

let obj3 = new Object(1);
console.log( obj2 instanceof number ); // true

let obj4 = new Number(1);
console.log( obj4 instanceof number ); // true
```

#### 5.3.1 Boolean

所有原始值包装对象在被判断真假时，都会被认为是true
eg.

```js
let falseObject = new Boolean(false);
let result = falseObject && true;
console.log(result); // true
```

所以不建议使用Boolean包装类型，容易产生歧义

#### 5.3.2 Number类型

重写了valueOf()、toLocaleString()和 toString()等方法，有几个主要工具函数：

```js
// 进制转换 toString()
let num = 10
num.toString() // "10"
num.toString(2) // "1010"
num.toString(8) // "12"
num.toString(10) // "10"
num.toString(16) // "a"

// 格式化-四舍五入 toFixed()
let num = 10
num.toFixed(2) // "10.00"
let num = 10.005
num.toFixed(2) // "10.01"

// 科学计数法 toExponential()
let num = 10
num.toExponential(1)  // "1.0e+1"

// 自动toFixed()或者toExponential() toPrecision()
let num = 99
num.toPrecision(1) // "1e+2"
num.toPrecision(2) // "99"
num.toPrecision(3) // "99.0"

// 判断是否是整数-ES6 Number.isInteger()
Number.isInteger(1)    // true
Number.isInteger(1.00) // true
Number.isInteger(1.01) // false

// 判断数字是否溢出-ES6 Number.isSafeInteger()
// 范围：从 Number.MIN_SAFE_INTEGER(-2^53 + 1)到 Number.MAX_SAFE_INTEGER(2^53 - 1)
Number.isSafeInteger(-1 * (2 ** 53))      // false
Number.isSafeInteger(-1 * (2 ** 53) + 1)  // true
Number.isSafeInteger(2 ** 53)             // false
Number.isSafeInteger((2 ** 53) - 1)       // true
```

#### 5.3.3 String

1. JS字符

   js字符采用两种 unicode 编码混合的策略：USC-2 和 UTF-16，实际上都是用两个字节（16位）来表示一个字符

   ```js
   使用 String.formCharCode() 由 utf-16 码元 => 字符 （编码）
   使用 "stirng".charCodeAt() 由 字符 => utf-16 码元 （解码）
   码元：字符在 unicode 字符集中的位置
   ```

   由于部分字符不在 utf-16 常规编码范围内，所以可以使用  ==charPointAt()== 代替 charCodeAt()

2. nomalize()方法、

   略

3. 字符串操作方法

   1）截取字符串：

   ==splice==，substring，substr（三个API干类似的事情，推荐splice）

   ```js
   "string".splice(起始位置, 结束位置(不包括自己)) 
   ```

   注：当结束位置为负值时，结束位置 => 字符串长度+负值

   2）字符位置：

   ```js
   // ==>
   "string".indexOf('t')			// 从前往后找't'的下标
   
   // <==
   "string".lastIndexOf('t')		// 从后往前查找't'的下标
   
   // 指定起点
   "string".indexOf('t', 2)		// 从前往后找't'的下标, 从下标 2 往后
   "string".lastIndexOf('t', 3)	// 从后往前查找't'的下标，从下标 3 往前
   ```

   3）字符串包含：

   ```js
   "string".startWith("")		// 字符串首匹配
   "string".endWith("")		// 字符串尾匹配
   "string".include("")		// 字符串包含匹配
   
   // 指定起点
   ```

   4）trim()

   ```js
   " string ".trim()			// "string"
   " string ".trimLeft()		// "string "
   " string ".trimRight()		// " string"
   ```

   5) repeat()

   ```js
   "na ".repeat(5)				// "na na na na na "
   ```

   6) 填充

   ```js
   "zqm".padStart(6)			// "   zqm"
   "zqm".padStart(6, '.')			// "...zqm"
   
   // padEnd() 同理
   ```