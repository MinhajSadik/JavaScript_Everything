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

const myAccount = bankAccount(100, 000);
console.dir(myAccount);
