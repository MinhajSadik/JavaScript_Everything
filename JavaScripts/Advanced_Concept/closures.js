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
