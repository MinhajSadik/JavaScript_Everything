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

function evenify_condition(givenValue) {
  if (givenValue % 2 === 0) {
    return givenValue;
  } else if (givenValue % 2 !== 0) {
    return givenValue * 2;
  }
}

export function shortFunctionCall(givenValue) {
  let evenify_array = [];
  for (let i = 0; i < givenValue.length; i++) {
    const givenNum = givenValue[i];
    const evenifyCondition = evenify_condition(givenNum);
    evenify_array.push(evenifyCondition);
  }
  return evenify_array;
}

const resultFriends_age = shortFunctionCall(friends_age);
console.log(resultFriends_age);
const resultArray = shortFunctionCall(array);
console.log(resultArray);
