// 数值类型
let age: number = 18;

// 字符串类型
let myName: String = 'chandler';

// 布尔类型
let isLoading: Boolean = false;

// undefined类型
let un: undefined = undefined;

// null类型
let timer: null = null;

// symbol类型
let uniKey: symbol = Symbol();

// 类型推论
{
  // 声明变量并初始化
  let a = 1;

  // 函数返回值
  function add(num1: number, num2: number) {
    return num1 + num2;
  }
}

// 联合类型
{
  let timer: number | null = null;
  timer = setTimeout(() => { });
}

// 类型别名
{
  type str = string;
  const s1: str = 'abc';
  const s2: string = 'cba';

  type MyType = string | number;
  let a: MyType = 1;
  a = '1';
}

// 数组类型
{
  let nums1: number[] = [1, 2, 3];
  let nums2: Array<number> = [1, 2, 3];
}

// 函数类型
{
  // 普通函数
  function add1(num1: number, num2: number): number {
    return num1 + num2;
  }

  // 箭头函数
  const add2 = (a: number = 100, b: number = 100): number => {
    return a + b;
  }

  // 统一定义函数格式
  type fn = (n1: number, n2: number) => number
  const add3: fn = (a, b) => { return a + b; }
}

// 函数返回值类型 void
{
  function greet(name: string): void {
    console.log("Hello, ", name);
  }
}

// 可选参数
{
  function slice(a: number, b?: number) {
    console.log(111);
  }
  slice(1);
  slice(1, 2);
  slice(1, 2);
}

// 对象类型
{
  // 单独使用
  const zqm1: {
    name: string,
    age: number,
    go(task: string, times: number): void,
    run: (task: string, times: number) => void
  } = {
    name: 'zqm',
    age: 18,
    go(task, times) {
      console.log(task, times);
    },
    run(task, times) {
      console.log(task, times);
    }
  }

  // 定义类型
  type Zqm = {
    name: string,
    age: number,
    go(task: string, times: number): void,
    run: (task: string, times: number) => void
  }
  const zqm2: Zqm = {
    name: 'zqm',
    age: 18,
    go(task, times) {
      console.log(task, times);
    },
    run(task, times) {
      console.log(task, times);
    }
  }
}

// 接口
{
  interface GoodItem {
    name: string,
    price: number,
    func: () => string
  }
  const good1: GoodItem = {
    name: '手表',
    price: 200,
    func: () => {
      return '看时间'
    }
  }
  const good2: GoodItem = {
    name: '手机',
    price: 2000,
    func: () => {
      return '打电话'
    }
  }
  interface MyGoodItem extends GoodItem {
    func1: () => string
  }
  const good3: MyGoodItem = {
    name: '电脑',
    price: 20000,
    func: () => {
      return '写代码'
    },
    func1: () => {
      return '打游戏'
    }
  }
  interface MultiGoodItem extends GoodItem, MyGoodItem {
    func2: () => string
  }
  const good4: MultiGoodItem = {
    name: '服务器',
    price: 20000,
    func: () => {
      return '写代码'
    },
    func1: () => {
      return '打游戏'
    },
    func2: () => {
      return '挖矿'
    }
  }
}

// 元组
{
  type Gender = 'gril' | 'boy'
  let g1: Gender = 'boy';
  let g2: Gender = 'gril';
}

// 枚举
{
  // 数值枚举 默认为从 0 开始自增的数值
  enum Direction { 'UP', 'DOWN', 'LEFT', 'RIGHT' }
  Direction.UP // 0
  Direction.DOWN // 1
  Direction.LEFT // 2
  Direction.RIGHT // 3

  // 字符串枚举
  enum Direction1 { 'UP' = 'UP', 'DOWN' = 'DOWN', 'LEFT' = 'LEFT', 'RIGHT' = 'RIGHT' }
  Direction.UP // UP
  Direction.DOWN // DOWN
  Direction.LEFT // LEFT
  Direction.RIGHT // RIGHT
}
