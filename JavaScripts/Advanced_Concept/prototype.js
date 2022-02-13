/**
 * prototype basic defination and practice as well
 * prototype is a property of an object
 * prototype is an object
 * prototype is a prototype of all objects
 */

// prototype example 00
const person = {};

person.name = "minhajsadik";
person.age = 24;
person.expertise = "javascript, golang";
person.eat = function () {
  console.log("minhajsadik, eating");
};
person.sleep = function () {
  console.log("minhajsadik, sleeping");
};

console.log(person.sleep);

// prototype example 01
function Person(name, age) {
  const person = {};

  person.name = "minhajsadik";
  person.age = 24;
  person.expertise = "javascript, golang";
  person.eat = function () {
    console.log("minhajsadik, eating");
  };
  person.sleep = function () {
    console.log("minhajsadik, sleeping");
  };
  return person;
}

const minhaj = Person("minhaj", 24);
const sadik = Person("sadik", 24);

// prototype example 02
const personMethod = {
  eat() {
    console.log("person eating");
  },
  sleep() {
    console.log("person sleeping");
  },
  play() {
    console.log("person playing");
  },
};

function Person1(name, age) {
  const person = {};
  person.eat = personMethod.eat;
  person.sleep = personMethod.sleep;
  person.play = personMethod.play;
  return person;
}

const minhaj1 = Person1("minhaj1", 24);
const sadik1 = Person1("sadik1", 24);

const captain = {
  name: "minhajsadik",
  age: 24,
  expertise: "javascript, golang, cricket, badminton, tennis",
};

const player = Object.create(captain);
console.log(player.name);
