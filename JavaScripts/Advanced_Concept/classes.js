/**
 * class example in javascript
 * @class
 * @constructor
 * inherit from person and inheritance
 */

// class example with inheritance in javascript
class Person {
  // parent class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  play() {
    console.log(`${this.name} is playing`);
  }
}

class Profession extends Person {
  //sub class
  constructor(name, age, type, details) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.type = type;
    this.details = details;
  }
  play() {
    super.play();
    console.log(`${this.name} is playing cricket`);
  }
}

const sadik = new Profession("Sadik", 25, "Student", "CSE");
sadik.play();

const minhaj = new Person("Minhaj", 25);
minhaj.eat();

// class example with getter and setter
class Person1 {
  constructor(name, age) {
    // property
    this.name = name;
    this.age = age;
  }
  eat() {
    // method
    console.log(`${this.name} is eating`);
  }
  get setName() {
    //getter is nothing, just a method, it behaves like a method but we'll access it like a property
    return this.name;
  }
  //setter takes a parameter and sets the value of the property to the parameter, then outside of the class we'll set/change the value of the property
  set setName(name) {
    this.name = name;
  }

  static isEqualStatic(person1, person2) {
    // the static method is a method that is not associated with any instance of the class but rather with the main class itself.
    return person1.age === person2.age;
  }
}

const sadik1 = new Person1("MINHAJ", 25);
const minhaj1 = new Person1("SADIK", 25);

sadik1.setName = "SHARMINA";

console.log(Person1.isEqualStatic(sadik1, minhaj1));

console.log(sadik1.name);

// class example with polymorphism
class Programmers {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  play() {
    console.log(`${this.name} is playing`);
  }
}

class Coders extends Programmers {
  constructor(name, age, type, info) {
    super(name, age);
    this.type = type;
    this.info = info;
  }
  play() {
    super.play();
    console.log(`${this.name} is playing with code`);
  }
}

const minhajs = new Coders("minhaj", 25, "coding", "javascript");
minhajs.play();
