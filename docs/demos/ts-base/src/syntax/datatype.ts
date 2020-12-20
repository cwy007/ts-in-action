// (变量/函数):type

// 原始类型
let bool: boolean = true;
let num: number | undefined | null = 123;
let str: string = "abc";
// str = 123
// console.log(str)

// 数组
let arr1: number[] = [1, 2, 3];
// Array 为 ts 预定义的泛型接口
// 联合类型 ｜
let arr2: Array<number | string> = [1, 2, 3, "4"];

// 元组
// 数组元素的类型和个数
let tuple: [number, string] = [0, "1"];
tuple.push(2)
// console.log(tuple)
// 允许插入新的元素，不允许访问，不能越界访问
// TS2493: Tuple type '[number, string]' of length '2' has no element at index '2'.
// tuple[2]

// 函数
// 类型注解
// 通常返回值类型可以省略
// let add = (x: number, y: number) => x + y;
// 函数类型
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// 对象
// 要定义具体包含哪些属性
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 3;

// symbol
// 含义：具有唯一的值
let s1: symbol = Symbol();
let s2 = Symbol();
// console.log(s1 === s2)

// 特殊的数据类型
// undefined, null 任何类型的子类型
let un: undefined = undefined;
let nu: null = null;
num = undefined;
num = null;


// void
// 确保返回的值一定是 undefined
let noReturn = () => {};

// any
// 默认类型为 any
// 不是特殊情况，不建议使用 any 类型
let x;
x = 1;
x = [];
x = () => {};

// never
// 永远不会有返回值的类型
let error = () => {
  throw new Error("error");
};

let endless = () => {
  while (true) {} // 死循环
};

// 通过 any 实现对js 的兼容