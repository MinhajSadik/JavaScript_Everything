function Persons(name, age) {
  this.name = name;
  this.age = age;
}

Persons.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};

const sadik = new Persons("sadik", 24);
sadik.eat();
