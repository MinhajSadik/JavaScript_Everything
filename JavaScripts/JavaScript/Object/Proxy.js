//Proxy
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    for (let arg of arguments) {
      console.log(arg);
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world

class ClassWithPrivate {
  #private = 102;
  #privateField = 42;

  #privateMethod() {
    console.log(this.#privateField);
  }
  nonPrivateMethod() {}
}

class SubPrivate extends ClassWithPrivate {
  #private = 100;
  #privateField = 42;

  #privateMethod() {
    console.log(this.#privateField);
  }

  nonPrivateMethod() {
    console.log(this.#private);
  }
}

const privates = new ClassWithPrivate();
console.log(privates.nonPrivateMethod());
