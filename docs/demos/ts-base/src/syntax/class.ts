// 类成员的属性和方法
// 内部属性只在实例上
// 实例的属性必须有初始值
// 抽象类
// 只能继承，不能实例化
abstract class Animal {
  eat() {
    console.log("eat");
  }
  // 方法复用
  // 在子类中实现
  //
  abstract sleep(): void;
}
// let animal = new Animal()

// 派生类的构造函数必须包括 super 调用
// super 为父类的实例
// 类的成员修饰符
// public、
// private 只能在类中被调用
// 实例化，继承
// protected 在类和子类中被访问，不能在实例上访问
// 基类
// readonly 只读属性一定要被初始化
// 在参数上加修饰符，将参数自动变成实例属性
// static
// 多态
class Dog extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
    this.pri();
  }
  public name: string = "dog";
  run() {}
  private pri() {}
  protected pro() {}
  readonly legs: number = 4;
  static food: string = "bones";
  sleep() {
    console.log("Dog sleep");
  }
}
// console.log(Dog.prototype)
let dog = new Dog("wangwang");
// console.log(dog)
// dog.pri()
// dog.pro()
console.log(Dog.food);
dog.eat();

class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name);
    this.color = color;
    // this.pri()
    this.pro();
  }
  // color: string
}
console.log(Husky.food);

// 多态：
// 子类中相同方法，不同实现方式
class Cat extends Animal {
  sleep() {
    console.log("Cat sleep");
  }
}
let cat = new Cat();

// 多态
let animals: Animal[] = [dog, cat];
animals.forEach((i) => {
  i.sleep();
});

// return this
// 实现链式调用
//
class Workflow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}
new Workflow().step1().step2();

class MyFlow extends Workflow {
  next() {
    return this;
  }
}
new MyFlow().next().step1().next().step2();
