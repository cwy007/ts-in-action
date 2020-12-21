// ts 编译器
// 类型推断
// 基础类型的类型推断
// 辅助开发，提高效率
// 最佳通用类型推断
//
// let a = 1;
// let b = [1, null, 'a']
// let c = {x: 1, y: 'a'}

let d = (x = 1) => x + 1

window.onkeydown = (event: KeyboardEvent) => {
    // console.log(event.button)
}

interface Foo {
    bar: number
}
// 类型断言
// 不能乱用
// 没有依据的类型断言，会带来一些安全隐患
// let foo = {} as Foo
// let foo = <Foo>{}

let foo: Foo = {
    bar: 1
}
// foo.bar = 1
