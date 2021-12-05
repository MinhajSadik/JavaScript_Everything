var a, b, c;
// 2. What will be the output of following code ?
console.log(typeof isNaN(+"6"));

console.log(typeof +String("true"));

// 7. What will be the output of following code ?
console.log("Hello" + "Javascript" + "Lover" + +-55);
console.log(true + !!"false");
console.log(5 * "5" + "10" - "2000");

// 8. What will be output of following code ?
var a = 5;
var b = ++a;
b = b++;
var c = b;
console.log(b);
console.log(c);

// 9. What will be output of following code?
a = null;
b = 0;
c;
// output: false false true false true
console.log(a == b);
console.log(a > b);
console.log(a <= b);
console.log(a >= c);
console.log(a == c);

// 10. What will be output of following code ?

// var a, b, c;

a = 5;
b = new Number("5");
c = +"5";

console.log(a == b);
console.log(a === b);
console.log(a == c);
console.log(a === c);
console.log(b == c);
console.log(b === c);

// callback function in javascript
function creator(name, others) {
  let age = 22;
  let height = 5.9;
  others(age, height);
  console.log("MR", name);
}

function others(age, height) {
  return console.log("age", age, "height", height);
}

console.log(creator("Raj", others));

function callMyName(name, callback) {
  var myAge = 20;
  callback(myAge);
  console.log("Mr." + name);
}

function ages(age) {
  console.log("my age is: " + age);
}

callMyName("Minhaj Sadik", ages);

function test() {
  let n = () => {
    console.log("1");
  };

  n();

  return 0;

  n = () => {
    console.log("2");
  };
}

console.log(test());

let array = ["a", "b", "c", "d", "e"];
let name = "minhajsadik";
let slice = array.slice(2, -2);
console.log(slice);
let splice = array.splice(2);
console.log(splice);
let split = name.split("", 6);
console.log(split);

console.log("I");

setTimeout(() => {
  console.log("love");
}, 0);

console.log("JavaScript!");

let foo = [1, 2, 3];
let [n] = foo;
console.log(n);

let rainForests = ["Amazon", "Borneo", "Cerrado", "Congo"];
rainForests.splice(0, 2);
console.log(rainForests);

let foos = {
  bar() {
    console.log("Hello, world!");
  },
  name: "Albert",
  age: 26,
};

console.log(foos.bar());

console.log("dirt worm worm dirt dirt worm".split("dirt").length);

// let foo = {
//   name: "Albert",
// };

// delete foo.name;

let numbers = [1, 2, 3, 4, 5];

let myFunc = () => {
  let s = 2;
  return () => console.log("a is " + s);
};

let s = 1;

let tests = myFunc();
tests();

console.log(tests);

export let printMe = (str) => console.log(str);

let matrix = [
  ["You", "Can"],
  ["Do", "It"],
  ["!", "!", "!"],
];

matrix[(1)[2]];
