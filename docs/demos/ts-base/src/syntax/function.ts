// 函数相关知识梳理
//
// 函数定义
// ts 的类型推断
function add1(x: number, y: number) {
  return x + y;
}

// 变量
let add2: (x: number, y: number) => number;

// 别名
type add3 = (x: number, y: number) => number;

// 接口
interface add4 {
  (x: number, y: number): number;
}

// ts 中形参和实参必须一一对应
// 对函数参数的要求
//
// add1(1, 2, 3);

// 可选参数
// 位于必须参数之后
//
function add5(x: number, y?: number) {
  return y ? x + y : x;
}
add5(1);

// 默认值
//
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}
// 必须参数前，参入 undefined 获取默认值
// 在必选参数之后，可选参数可以不填
//
// console.log(add6(1, undefined, 3))

// 参数不确定时
// 剩余参数
//
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}
add7(1, 2, 3, 4, 5);

// 函数重载
// 不用为相似的功能起不同的函数名
// 名称相同的函数
// 在类型最为宽泛的函数中定义
//
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
  let first = rest[0];
  if (typeof first === "number") {
    return rest.reduce((pre, cur) => pre + cur); // 求和
  }
  if (typeof first === "string") {
    return rest.join(""); // 字符串拼接
  }
}
// console.log(add8(1, 2));
// console.log(add8("a", "b", "c"));
