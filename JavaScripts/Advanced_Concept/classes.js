function Persons(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  };
}

Persons.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};

const sadik = new Persons("sadik", 24);
sadik.eat();
sadik.getName();

// prototype chaining in javascript

const f = function Perosn() {};
Object.prototype.mina = function () {
  console.log("minaj");
};

const p = {};
p.mina();

// class and prototype use case in javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Professions(name, age, type, details) {
  Person.call(this);
  this.name = name;
  this.age = age;
  this.type = type;
  this.details = details;
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};

Professions.prototype = Object.create(Person.prototype);
Professions.prototype.constructor = Professions;

let minhaj = new Professions(
  "minhaj",
  24,
  "student, cricketer, developer",
  "all-rounder"
);

console.log(minhaj);
