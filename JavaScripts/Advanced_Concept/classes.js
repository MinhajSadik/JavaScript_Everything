function Persons(name, age) {
  this.name = name;
  this.age = age;
}

Persons.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};

const shahid = new Persons("shahid", 24);
shahid.eat();
