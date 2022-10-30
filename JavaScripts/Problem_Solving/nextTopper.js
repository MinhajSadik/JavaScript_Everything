let codeOne = false / 0;
let codeTwo = true / 0;

console.log(codeOne); // NaN
console.log(codeTwo); // Infinity

console.log(null !== undefined); //true
let a = 3;
console.log((a **= 2)); //9

console.log("055" == 55); //true
console.log(55 == 55); //true

codeOne = false + +"1" - 0 + +5 - "6";
console.log(codeOne == null); //false
console.log(codeOne >= null); //true

codeOne = 1;

if ((codeOne == 1, 55)) {
  console.log("if_block"); //if block
} else {
  console.log("else block");
}

codeOne = 5;
codeTwo = 5;

codeTwo = codeTwo++ + codeTwo++ + --codeOne + codeOne++ + ++codeTwo;
console.log(codeTwo); //27
console.log(codeOne++); //5

let age = 25;

const isCanVote = age >= 18 ? "You can vote" : "You can't vote";
console.log(age >= 18 ? "You can vote" : "You can't vote"); //you can vote

var code;

if (!code) {
  console.log("If Block"); //If_Block
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

var firstName = "Minhaj";
{
  let firstName = "Sadik";
}

console.log(firstName); //Minhaj

const workers = [
  "hafiz",
  "kamil",
  "nahim",
  "sami",
  "sufiha",
  "samira",
  "minhaj",
  "sadik",
  "tamanna",
  "hamida",
];

function randomName(arr) {
  let worker;
  let nth = Math.random().toFixed(1) * arr.length;
  for (let i = 0; i < arr.length; i++) {
    worker = arr[nth === 10 ? arr.length - 1 : nth];
  }
  return worker;
}

const worker = randomName(workers);
console.log("worker:=", worker);

function infinityLoop() {
  // while (true) {
  //   console.log("Infinity");
  // }
  for (let i = 0; i < Infinity; i++) {
    console.log("infinity");
  }
}
