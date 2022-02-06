// closures itself a function with some remember values in it.
// closures are functions that refer to variables in their parent scope.
var num1 = 30;
var num2 = 20;

const sum = function () {
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

const sum = function () {
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

function stopWatch() {
  const startTime = Date.now();
  function delayTime() {
    return Date.now() - startTime;
  }
  return delayTime;
}

const timer = stopWatch();

for (let i = 0; i < 1000000; i++) {
  var a = Math.random() * 1000000;
}

timer();

console.dir(timer);
console.log(timer());
