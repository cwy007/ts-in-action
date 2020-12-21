// ts 的映射类型
// 从旧类型生成新类型
//
interface Obj33 {
    a: string;
    b: number;
}

// 成员的属性变成只读
// 同态
type ReadonlyObj = Readonly<Obj33>;
type PartialObj = Partial<Obj33>;
type PickObj = Pick<Obj33, "a" | "b">;

// 创建新的属性
// "x" | "y" 预定义的新的属性
// Obj33 已知的类型
//
type RecordObj = Record<"x" | "y", Obj33>;
