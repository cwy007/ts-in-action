// 函数重载
// 联合类型
// any 类型丢失一些信息，参数类型，返回值类型
//
// 一般的，广泛的，不需要预先定义的
//
// 泛型
function log<T>(value: T): T {
  console.log(value);
  return value;
}
// 两种调用方式
log<string[]>(["a", ",b", "c"]);
log(["a", ",b", "c"]); // ts 的类型推断，推荐的方式

// 类型别名，定义一个泛型函数类型
// type Log = <T>(value: T) => T
// 泛型函数的实现
// let myLog: Log = log

// 泛型使用在接口中
// 代表类型而不是值的参数
// 另一个维度的函数
//
// interface Log<T> {
//     (value: T): T
// }
// let myLog: Log<number> = log
// myLog(1)

// 静态成员不能引用类型参数
//
class Log<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}
let log1 = new Log<number>();
log1.run(1);
// 不指定类型参数时，value 可以为任意值
let log2 = new Log();
log2.run({ a: 1 });

// 类型约束 T extends Length
// 参数必须具有length属性
//
interface Length {
  length: number;
}
function logAdvance<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}
logAdvance([1]);
logAdvance("123");
logAdvance({ length: 3 });
