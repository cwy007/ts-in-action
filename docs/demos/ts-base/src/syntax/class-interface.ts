// 类类型接口
// 自能约束共有成员
// 不能约束类的构造函数
interface Human {
  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  eat() {}
  age: number = 0;
  sleep() {}
}

interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: "",
  run() {},
  eat() {},
  cry() {},
};

class Auto {
  state = 1;
  // private state2 = 1
}

// 接口继承类
// 只有类的成员接口，没有具体实现
//
interface AutoInterface extends Auto {}
// class C implements AutoInterface {
//   state = 1;
// }
class Bus extends Auto implements AutoInterface {}

// 接口可以继承接口，实现接口的复用
// 类可以继承类，实现类的复用
// 类可以实现接口，这时接口只能约束类的共有成员
// 接口可以抽离类，会抽离出公共，私有和受保护的属性和方法
