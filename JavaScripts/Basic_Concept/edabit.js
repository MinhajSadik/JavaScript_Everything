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
