/**
 * prototype basic defination and practice as well
 * prototype is a property of an object
 * prototype is an object
 * prototype is a prototype of all objects
 * prototype is a prototype of all functions
 * prototype is a prototype of all arrays
 * prototype is a prototype of all strings
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
