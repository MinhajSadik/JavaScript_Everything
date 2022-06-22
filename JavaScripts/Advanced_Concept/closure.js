// closures itself a function with some remember values in it.
// closures are functions that refer to variables in their parent scope.

var num1 = 30;
var num2 = 20;

var sum = function () {
  var num = 10;
  return function () {
    return num + num1 + num2;
  };
};

const myFunc = sum();
console.dir(myFunc);

const bankAccount = function (initialBalance) {
  var balance = initialBalance;
  return function () {
    return balance;
  };
};

const myAccount = bankAccount(100000);
console.dir(myAccount);

//closours with var
for (var i = 0; i < 3; i++) {
  const myFunc = () => {
    console.log(i);
  };
  console.log(i);
  console.dir(myFunc);
  setTimeout(myFunc, 3000);
}

console.log(i);

//closours with let
for (let i = 0; i < 3; i++) {
  const myFunc = () => {
    console.log(i);
  };
  console.log(i);
  console.dir(myFunc);
  setTimeout(myFunc, 3000);
}

console.log(i);

//closures another example
var num1 = 30;

var sum = function () {
  var num2 = 10;
  return num1 + num2;
};

console.dir(sum);

// closure another concept
// here function never kept remembering the exact value,
// function keeps remembering their reference value.

(function () {
  var num1 = 30;

  const sum = function () {
    var num2 = 10;
    return num1 + num2;
  };

  console.log(sum());
  console.dir(sum);

  num1 = 40;
  num2 = 20;
  console.log(sum());
  console.dir(sum);
})();

// closures another example
// closure experiment with let and var keyword, cause it's behave differently in different keyword.
function stopWatch() {
  const startTime = Date.now();
  function delayTime() {
    return Date.now() - startTime;
  }
  return delayTime;
}

var timer = stopWatch();

for (var i = 0; i < 1000000; i++) {
  var a = Math.random() * 1000000;
}

timer();
console.dir(timer);
console.log(timer());

timer = null; // to free the memory of the timer function
// timer(); // undefined

// async(); closure another example.
var a;
function async() {
  a = 1;

  var myFunc = () => {
    console.log(a);
  };
  setTimeout(myFunc, 3000);
  console.dir(myFunc);
}

a = 2;
async();

// closures api call example

function apiCallFunction(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(url));
}

apiCallFunction("https://jsonplaceholder.typicode.com/todos/1");
console.log("i'm here");

// closures sync & async example with var & let keyword
// var i = 0;
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000);
}

// var and let experiment and closure behave differently in a different situations.
// var i = 0;
for (var i = 0; i < 3; i++) {
  var myFunc1 = () => {
    console.log(i);
  };
  console.log(i);
  console.dir(myFunc1);
  setTimeout(myFunc1, 3000);
}
console.log(i);

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const fn = outer();
fn();
fn();
