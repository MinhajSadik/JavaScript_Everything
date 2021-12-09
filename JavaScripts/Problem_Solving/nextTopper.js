let codeOne = false / 0;
let codeTwo = true / 0;

console.log(codeOne); // NaN
console.log(codeTwo); // Infinity

console.log(null !== undefined);
let a = 3;
console.log((a **= 2));

console.log("055" == 55);
console.log(055 == 55);

codeOne = false + +"1" - 0 + +5 - "6";
console.log(codeOne == null);
console.log(codeOne >= null);

codeOne = 55;

if ((codeOne == 1, 55)) {
  console.log("if block");
} else {
  console.log("else block");
}

codeOne = 5;
codeTwo = 5;

codeTwo = codeTwo++ + codeTwo++ + --codeOne + codeOne++ + ++codeTwo;
console.log(codeTwo);
console.log(codeOne++);

let age = 25;

const isCanVote = age >= 18 ? "You can vote" : "You can't vote";
console.log(age >= 18 ? "You can vote" : "You can't vote");

var code;

if (!code) {
  console.log("If Block");
} else {
  console.log("Else Block");
}


//falsey values in javascript
//false
//0
//""
//null
//undefined
//NaN
