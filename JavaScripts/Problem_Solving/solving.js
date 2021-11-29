//1. program: leap year check with arrow function
const checkIfLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
};

checkIfLeapYear(2024);

//1. program: to check leap year with normal function
function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || year % 400 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

checkLeapYear(2024);

//2. program: find any number of factorial number using for loop itarative way
function factorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
    console.log("factorial:", factorial, "i:", i);
  }
  return factorial;
}

const results = factorial(5);
console.log(results);

//2. program: find any number of factorial number using while loop inside function itarative way
function factorialFuncWhile(num) {
  let fact = 1;
  let i = 1;
  while (i <= num) {
    fact = fact * i;
    console.log("factorial:", fact, "i:", i);
    i++;
  }
  return fact;
}

const result = factorialFuncWhile(10);
console.log(result);

//2.program: find any number of factorial using function & recursive way
/*
0! = 1;
1! = 1*1;
2! = 2*1; //2*1;
3! = 3*2*1; //6
4! = 4*3*2*1; //24
5! = 5*4*3*2*1; //120
6! = 6*(6-1)!; //720
7! = 7*(7-1)! //5040
8! = 8*(8-1)! //40320
n! = n*factorial(n-1)!
*/

function factorialRecursive(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialRecursive(num - 1);
  }
}

const resultRecursive = factorialRecursive(10);
console.log(resultRecursive);

//3. program: check null is object or not
const next = null;
console.log(typeof next === "object");

//4. program: fibonacci sequence using forLoop.
/* fibonacci sequence is common interview question,
it is a series of numbers in which each number
( Fibonacci number ) is the sum of the two preceding numbers.
The simplest is the series [1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55]
it's start with 0 and 1, and the next number is the sum of the previous two numbers always.
*/

let fibo = [0, 1];
for (let i = 2; i <= 12; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
  console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
}
console.log(fibo);

//4. fibonacci convert a function
function fibonacci(n) {
  const fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
const fiboResult = fibonacci(12);
console.log(fiboResult);
