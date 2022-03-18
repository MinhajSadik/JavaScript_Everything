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

function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
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

//4. fibonacci using while loop
const fiboWhile = [0, 1];
let i = 2;
while (i <= 12) {
  fiboWhile[i] = fiboWhile[i - 1] + fiboWhile[i - 2];
  i++;
}
console.log(fiboWhile);

//4. fibonacci using a function and recursive way
function fibonacciRecursive(n) {
  if (n <= 0) {
    return 0;
  } else if (n <= 1) {
    return 1;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}
const fiboRecursiveResult = fibonacciRecursive(10);
console.log(fiboRecursiveResult);

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

//4. fibonacci series using function and recursive way
function fibonacciSeriesRecursive(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const series = fibonacciSeriesRecursive(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
}

const fiboSeriesResult = fibonacciSeriesRecursive(2);
console.log(fiboSeriesResult);

const checkPrime = (num) => {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return "not prime";
    } else {
      return "prime";
    }
  }
};

const checkPrimeResult = checkPrime(19);
console.log(checkPrimeResult);

function changeValue(a) {
  console.log("Value of a inside function before changing: " + a);
  a = 10;
  console.log("Value of a inside function after changing: " + a);
  return a;
}

var a = 100;
console.log("Value of a before changing function is applied: " + a);
const changeValueResult = changeValue(a);
console.log(changeValueResult);
console.log("Value of a after changing function is applied: " + a);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var max = array.reduce(function (a, b) {
  console.log("a:", a, "b:", b);
  return Math.max(b);
}, 0);

console.log(max);

console.log(typeof isNaN(+"6"));

console.log(typeof +String("true"));

console.log("Hello" + "Javascript" + "Lover" + +-55);
console.log(true + !!"false");
console.log(5 * "5" + "10" - "2000");

// 1. What will be output of following code ?
const arr = [3, 39, 32, 4, 5, 6, 7, 8, 9, 10, 30];
const arrResult = arr.reduce((acc, curr) => {
  return acc + curr;
});

// console.log(arrResult);

//same with for loop
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  sum = sum + element;
  console.log(element);
}
// console.log(sum);

// remove duplicates from array using function
function removeDuplicates(arr) {
  const unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
const arr1 = [3, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 30];
const removeDuplicatesReult = removeDuplicates(arr1);
console.log(removeDuplicatesReult);

// remove duplicates from array using for loop
const unique = [];
for (let i = 0; i < arr1.length; i++) {
  const element = arr1[i];
  if (!unique.includes(element)) {
    unique.push(element);
  }
}

console.log(unique);

// remove duplicates from array using Set
function removeDuplicateSet(arr) {
  const unique = [...new Set(arr)];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}

var arrays = [3, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 30];

const resultDuplicateSet = removeDuplicateSet(arrays);

console.log(resultDuplicateSet);

// count how many words in sentense for loop

let sentense = "Hello Programmers and Coders from Bangladesh";
let count = 0;
for (let i = 0; i < sentense.length; i++) {
  let word = sentense[i];
  if (word === " ") {
    count++;
  }
}
// count++;
console.log(count);

// count how many words in sentense function
function countSentense(sentense, count) {
  for (let i = 0; i < sentense.length; i++) {
    let char = sentense[i];
    if (char === " ") {
      count++;
    }
  }
  return count;
}
const resultCountSentense = countSentense("Minhaj Sadik ", 0);
console.log(resultCountSentense);

//Next: find how many time are replayed "A" word in sentense
function countWords(sentense, count) {
  for (let i = 0; i < sentense.length; i++) {
    const char = sentense[i];
    if (char === "A") {
      count++;
    }
  }
  return count;
}

const resultCountWords = countWords("Minhaj A Sadik ", 0);
console.log(resultCountWords);

// Next: find how many time are replayed "A" word in sentense
function countWord(sentense, count) {
  for (let i = 0; i < sentense.length; i++) {
    const char = sentense[i];
    if (char === "A") {
      count++;
    }
  }
  return count;
}

const resultCountWord = countWord("Minhaj A Sadik ", 0);
console.log("resultCountWord: ", resultCountWord);
