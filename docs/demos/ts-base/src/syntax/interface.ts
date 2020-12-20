// 鸭子类型
// 鸭式变形法
// 对象字面量赋值给变量
//
interface List {
  readonly id: number; // 指定为只读 readonly
  name: string;
  // [x: string]: any; // 字符串索引签名，含义：用任意字符串去索引list，可以得到任意值，这样就可以支持多个属性了
  age?: number; // 可选属性
}
interface Result {
  data: List[];
}
function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
    // value.id++
  });
}
let result = {
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B", age: 10 },
  ],
};
render(result);
// render({
//   data: [
//     { id: 1, name: "A", sex: "male" },
//     { id: 2, name: "B", age: 10 },
//   ],
// } as Result); // 类型断言，绕过类型检查

// render(<Result>{
//   data: [
//     { id: 1, name: "A", sex: "male" },
//     { id: 2, name: "B", age: 10 },
//   ],
// }); // 类型断言，绕过类型检查

// 可索引类型接口
// 用数字索引的接口
//
interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ["a", "b"];

interface Names {
  [x: string]: any;
  // y: number;
  [z: number]: number; // 子类型
}

// 变量类型，接口边界

// 用变量定义函数类型
// let add: (x: number, y: number) => number
// 使用接口定义函数类型
// interface Add {
//     (x: number, y: number): number
// }

// 类型别名，为函数类型起一个名字
type Add = (x: number, y: number) => number;
// let add: Add = (a: number, b: number) => a + b;

// 混合接口，定义一个类型
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

// 单例，多例

// 多次生产lib，封装在函数里面
function getLib() {
  let lib = (() => {}) as Lib; // 类型断言
  lib.version = "1.0.0";
  lib.doSomething = () => {};
  return lib;
}
let lib1 = getLib();
lib1();
lib1.version
let lib2 = getLib();
lib2.doSomething();
