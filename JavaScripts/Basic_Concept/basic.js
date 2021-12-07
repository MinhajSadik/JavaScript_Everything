// language : javascript
// Path : JavaScripts/Basic_Concept/basic.js

// for (let i = 0; i < friends_age.length; i++) {
//   if (array[i] % 2 === 0) {
//     console.log("Jur Sonkha: " + array[i]);
//   } else if (array[i] % 2 !== 0) {
//     console.log("Bijor Sonkha: " + array[i]);
//   }
// }

// for (let i = 0; i < array.length; i++) {
//   const num = array[i];
//   if (num % 2 === 0) {
//     console.log(`Jur Sonkha: ${num}`);
//   } else {
//     console.log(`Bijor Sonkha: ${num}`);
//   }
// }

const array = [1, 2, 3, 4, 5];
const friends_age = [5, 6, 7, 8, 9, 10];

export function shortFunctionCall(givenValue) {
  for (let i = 0; i < givenValue.length; i++) {
    const givenNum = givenValue[i];
    if (givenNum % 2 === 0) {
      console.log(`Jur Sonkha: ${givenNum}`);
    } else if (givenNum % 2 !== 0) {
      console.log(` Jor Sonkha Hoye Gese: ${givenNum * 2}`);
    }
  }
}

shortFunctionCall(friends_age);
shortFunctionCall(array);
