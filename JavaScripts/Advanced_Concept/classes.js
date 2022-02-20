function Persons(name, age) {
  constructor(name, age) {
  this.name = name;
  this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

Persons.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};

const sadik = new Persons("sadik", 24);
sadik.eat();
