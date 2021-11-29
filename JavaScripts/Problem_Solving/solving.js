//1. leap year check with arrow function
const checkIfLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
};

checkIfLeapYear(2024);

//1. program to check leap year with normal function
function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || year % 400 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

checkLeapYear(2024);

//2. program: any number of factorial number using for loop itarative way
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

//2. program: any number of factorial number using while loop inside function itarative way
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

//3. program: check null is object or not
const next = null;
console.log(typeof next === "object");
