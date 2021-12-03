var a, b, c;
// 2. What will be the output of following code ?
console.log(typeof isNaN(+"6"));

console.log(typeof +String("true"));

// 7. What will be the output of following code ?
console.log("Hello" + "Javascript" + "Lover" + +-55);
console.log(true + !!"false");
console.log(5 * "5" + "10" - "2000");

// 8. What will be output of following code ?
var a = 5;
var b = ++a;
b = b++;
var c = b;
console.log(b);
console.log(c);

// 9. What will be output of following code?
a = null;
b = 0;
c;
// output: false false true false true
console.log(a == b);
console.log(a > b);
console.log(a <= b);
console.log(a >= c);
console.log(a == c);

// 10. What will be output of following code ?

// var a, b, c;

a = 5;
b = new Number("5");
c = +"5";

console.log(a == b);
console.log(a === b);
console.log(a == c);
console.log(a === c);
console.log(b == c);
console.log(b === c);

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

// 2. What will be output of following code ?
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

var array = [3, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 30];

const resultDuplicateSet = removeDuplicateSet(array);

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
function countWords(sentense, count) {
  for (let i = 0; i < sentense.length; i++) {
    let char = sentense[i];
    if (char === " ") {
      count++;
    }
  }
  return count;
}
const resultCountWords = countWords("Minhaj Sadik ", 0);
console.log(resultCountWords);

//Next: find how many time are replayed a word in sentense
