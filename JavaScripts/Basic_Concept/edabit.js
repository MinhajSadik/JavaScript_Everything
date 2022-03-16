// Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
  return age * 365;
}

const resultCalcAge = calcAge(65);
console.log(resultCalcAge);

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.?
function nextStage(part1, part2) {
  return part1 + part2 - 1;
}

const resultNextStage = nextStage(5, 7);
console.log(resultNextStage);

//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(x, y) {
  return x % y;
}

const reusltRemainder = remainder(1, 3);
console.log(reusltRemainder);

// Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
  // return "something" + " " + a;
  return `something ${a}`;
}
const resultGiveMeSomething = giveMeSomething(5);
console.log(resultGiveMeSomething);

//Write a function that converts hours into seconds.
function howManySeconds(hours) {
  // return hours * 3600; // 3600 is the number of seconds in an hour
  // return hours * 60;
  return hours * 60 * 60;
}

const resultHowManySeconds = howManySeconds(10);
console.log(resultHowManySeconds);

// Write a function that takes a number as an argument and returns true if it's divisible by 3, otherwise return false.
function isDivisibleByThree(num) {
  return num % 3 === 0;
}
const resultIsDivisibleByThree = isDivisibleByThree(9);
console.log(resultIsDivisibleByThree);

// write a function that return voltage and current of a circuit
function voltageAndCurrent(voltage, current) {
  return voltage * current;
}

const resultVoltageAndCurrent = voltageAndCurrent(10, 5);
console.log(resultVoltageAndCurrent);

//Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function polygon(n) {
  return (n - 2) * 180;
}

const resultPolygon = polygon(6);
console.log(resultPolygon);

//Write a function that takes an integer minutes and converts it to seconds.
function convertMinutes(minutes) {
  return minutes * 60;
}
const resultConvertMinutes = convertMinutes(5);
console.log(resultConvertMinutes);

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function plusOne(num) {
  return num + 1;
}

const resultPlusOne = plusOne(5);
console.log(resultPlusOne);

//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

function animals(chickens, cows, pigs) {
  return chickens * 2 + cows * 4 + pigs * 4;
}

const resultAnimals = animals(2, 3, 5);
console.log(resultAnimals);

// When we sum the integers  and , we get the integer .
// When we sum the floating-point numbers  and , we get .
// When we concatenate HackerRank with is the best place to learn and practice coding!
var i = 4;
var d = 4.0;
var s = "HackerRank ";

// Declare second integer, double, and String variables.
// Read and save an integer, double, and String to your variables.
var i2 = +readLine();
var d2 = +readLine();
var s2 = readLine();

// Print the sum of both integer variables on a new line.
console.log(i + i2);

// Print the sum of the double variables on a new line.
console.log((d + d2).toFixed(1));

// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(s + s2);
