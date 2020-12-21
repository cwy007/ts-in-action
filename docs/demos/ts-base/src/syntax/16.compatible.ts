/*
 * X（目标类型） = Y（源类型），X 兼容 Y
 */

// 不同类型相互赋值，灵活性
let s: string = 'a'
// str = null

// 接口兼容性
// 成员少的兼容成员多的
interface X {
    a: any;
    b: any;
}
interface Y {
    a: any;
    b: any;
    c: any;
}
let x: X = {a: 1, b: 2}
let y: Y = {a: 1, b: 2, c: 3}
x = y
// y = x

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler
}

// 兼容型要求
// 1)参数个数
// 目标函数的参数个数要多于源函数
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)

// 可选参数和剩余参数
let a = (p1: number, p2: number) => {}
let b = (p1?: number, p2?: number) => {}
let c = (...args: number[]) => {}
// 固定参数可以兼容可选参数和剩余参数
a = b
a = c
// 可选参数参数不兼容固定和可选参数类型
// b = a
// b = c
// 剩余参数可以兼容固定参数和可选参数
c = a
c = b

// 2)参数类型
// 参数类型必须要匹配
let handler3 = (a: string) => {}
// hof(handler3)

// 对象类型
interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
// 参数对象属性多的兼容参数对象属性少的
p3d = p2d
// p2d = p3d
// 函数参数的双向协变
// 将精确类型赋值给不精确类型

// 3) 返回值类型
let f = () => ({name: 'Alice'})
let g = () => ({name: 'Alice', location: 'Beijing'})
f = g
// g = f
// 鸭式

// 函数重载
function overload(a: number, b: number): number
function overload(a: string, b: string): string //
function overload(a: any, b: any): any {} // 具体实现的函数参数个数要小于上面的重载函数
// function overload(a: any): any {}
// function overload(a: any, b: any, c: any): any {}
// function overload(a: any, b: any) {}

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
// 枚举与number兼容
let fruit: Fruit.Apple = 1
let no: number = Fruit.Apple
// 枚举间不兼容
// let color: Color.Red = Fruit.Apple

// 类兼容性
class A {
    constructor(p: number, q: number) {} // 不参与比较
    id: number = 1
    private name: string = '' // 私有成员
}
class B {
    static s = 1; // 不参与比较
    constructor(p: number) {} // 不参与比较
    id: number = 2;
    private name: string = "";
}
class C extends A {}
let aa = new A(1, 2)
let bb = new B(1)
// aa = bb
// bb = aa
let cc = new C(1, 2)
aa = cc
cc = aa

// 泛型兼容性
interface Empty<T> {
    // value: T
}
let obj1: Empty<number> = {};
let obj2: Empty<string> = {};
obj1 = obj2

let log10 = <T>(x: T): T => {
    console.log('x')
    return x
}
let log20 = <U>(y: U): U => {
    console.log('y')
    return y
}
log10 = log20

// 结构之间兼容：成员少的兼容成员多的
// 函数之间兼容：参数少的兼容参数多的
