// function addition(a, b) {
//   return a + b;
// }
// const resultAddition = addition(1, 2);
// console.log(resultAddition);

// const bioData = {
//   name: "Minhaj Sadik",
//   age: 21,
//   address: "123 Main St",
// };
// console.log(bioData.name);

// function fotballPlayerZone(player) {
//   const teamOne = player.filter((one) => one === 0).length;
//   const teamTwo = player.filter((two) => two === 1).length;
//   const dangerZone = 7;
//   if (teamOne > teamTwo && teamOne >= dangerZone) {
//     console.log(`Yes, teamOne is in danger zone`);
//   } else if (teamTwo > teamOne && teamTwo >= dangerZone) {
//     console.log(`No, teamTwo is in danger zone`);
//   } else {
//     console.log("can't find any team is denger zone");
//   }
//   // const result = teamOne.sort((a, b) => a - b);
//   // return result;
// }

// console.log(fotballPlayerZone([0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1]));

// function loopOne(arr, N) {
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       console.log(arr[i][j]++);
//     }
//   }
// }

// function loopTwo(arr, N) {
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       console.log(arr[j][i]++);
//     }
//   }
// }

// console.log(
//   loopOne(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     3
//   )
// );

// console.log(
//   loopTwo(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     3
//   )
// );

//graphQl book query
// query{
//   book(isbn: "0743273567"){
//     title,
//     author,
//     published,
//     publisher,
//     pages,
//     genres,
//     reviews(limit: 1){
//       author,
//       date,
//       content
//     }
//   }
// }

import https from "https";
https
  .get("https://coderbyte.com/api/challenges/json/json-cleaning", (resp) => {
    let data = "";
    resp.on("data", (chunk) => {
      data += chunk;
      let obj = JSON.parse(data);
      let newObj = {};
      for (let key in obj) {
        const value = obj[key];
        if (value !== "N/A" && value !== "-" && value !== "") {
          if (Array.isArray(value)) {
            newObj[key] = value.filter((item) => item !== "-");
          } else {
            newObj[key] = value;
          }
        }
        for (let key in newObj) {
          //remove all keys that have values of N/A, -, or empty strings
          const value = newObj[key];
          if (key === "name") {
            newObj[key] = {
              first: value.first,
              last: value.last,
            };
          } else if (key === "hobbies") {
            newObj[key] = value.filter((item) => item !== "-");
          } else if (key === "education") {
            newObj[key] = {
              college: value.college,
            };
          }
        }
      }

      console.log(JSON.stringify(newObj));
    });
    resp.on("end", () => {});
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });

// Check if you are all set. For this problem you just need to print "All Set!" and you're ready to go!
// Input Format

function allSet() {
  console.log("All Set!");
}
allSet();

// Problem Statement
// Rahim was decorating the book shelf with his books. He has two bookshelves, and he wants to put equal books in each book shelf. At first he put some random number of books on both shelves by guessing numbers. Now he wants to know the difference between the number of books in these two shelves so that he can rearrange them. Help him!

// You will be given two integer numbers A and B , you need to print the difference between these two numbers. Remember, difference is always positive.

// Input Format

// Input will contain two integers A and B.

// Constraints

// A (0 <= A <= 10^18)
// B (0 <= B <= 10^18)
// Output Format

// Output a single line, the difference between A and B.

function bookShelf(A, B) {
  const result = A - B;
  if (result < 0) {
    return -result;
  } else {
    return result;
  }
}
console.log(bookShelf(10, 50));

// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
function hasProperty(a, b) {
  // return a.hasOwnProperty(b);
  return b in a;
}
console.log(hasProperty({ a: 1, b: 2 }, "a"));

// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object

function createObject(str) {
  return { key: str };
}
console.log(createObject("hello"));

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function nthChar(a, n) {
  return a[n];
}
console.log(nthChar("hello", 1));

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function firstThree(a) {
  return a.substring(0, 3);
}
console.log(firstThree("hello"));

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function lastThree(a) {
  return a.substring(a.length - 3);
}

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function firstThreeElements(a) {
  return a.slice(0, 3);
}
console.log(firstThreeElements([1, 2, 3, 4, 5]));

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function nthElement(a, n) {
  return a[n];
}
console.log(nthElement([1, 2, 3, 4, 5], 3));

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array
function lastThreeElements(a) {
  return a.slice(-3);
}
console.log(lastThreeElements([1, 2, 3, 4, 5]));

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
function getProperty(obj, str) {
  return obj[str];
}
console.log(getProperty({ a: 1, b: 2 }, "a"));

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function removeFirstThreeElements(a) {
  return a.slice(3);
}
console.log(removeFirstThreeElements([1, 2, 3, 4, 5]));

//expected output
(function () {
  var a = (b = 5);
})();

console.log(b);
