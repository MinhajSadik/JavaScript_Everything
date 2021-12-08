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

function evenifyCondition(givenValue) {
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
    const resultEvenifyCondition = evenifyCondition(givenNum);
    evenify_array.push(resultEvenifyCondition);
  }
  return evenify_array;
}

const resultFriends_age = shortFunctionCall(friends_age);
console.log(resultFriends_age);
const resultArray = shortFunctionCall(array);
console.log(resultArray);

// find which team is winner
const goals = ["red", "green", "green", "red", "red", "green"];

function winnerTeam(array) {
  const teamOne = array.filter((item) => item === "red").length;
  const teamTwo = array.filter((item) => item === "green").length;
  if (teamOne > teamTwo) {
    console.log(`Team One is winner with ${teamOne.length} goals`);
  } else if (teamTwo > teamOne) {
    console.log(`Team Two is winner with ${teamTwo.length} goals`);
  } else {
    console.log("Draw");
  }
}

const resultWinnerTeam = winnerTeam(goals);

function square(x) {
  x = x * x;
  return x;
}
var y = 10;
var result = square(y);
console.log(y); // 10 -- no change
console.log(result); // 100
console.log(y);
