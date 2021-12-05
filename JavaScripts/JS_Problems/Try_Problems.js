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

const array = ["a", "b", "c", "d", "e"];
const name = "minhajsadik";
const slice = array.slice(2, -2);
console.log(slice);
const splice = array.splice(2);
console.log(splice);
const split = name.split("", 6);
console.log(split);
