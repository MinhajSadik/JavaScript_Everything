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

//graphql book query
// Using GraphQL, write a query to return a book with an argument of ISBN which is equal to the string 0743273567. A book is retrieved from the database and converted into an object with the following structure:

//For the book query, return the fields in the following order:
// title, author, published, publisher, pages, genres, reviews;

// A review object has the fields: author, date, and content. Finally, make sure to set a limit of 1 for the reviews field.

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

// Back-end Challenge
// In the JavaScript file, write a program to perform a GET request on the route https:
//coderbyte.com/api/challenges/json/json-cleaning and then clean the object according to the following rules:

// Remove all keys that have values of N/A, -, or empty strings. If one of these values appear in an array, remove that single item from the array. Then console log the modified object as a string.

// Example Input
//  {
//   "name": { "first": "Robert", "middle": "", "last": "Smith" },
//   "age": 25,
//   "DOB": "-",
//   "hobbies": ["running", "coding", "-"],
//   "education": { "highschool": "N/A", "college": "Yale" }
// }

// Example Output
// //  {
//   "name": { "first": "Robert", "last": "Smith" },
//   "age": 25,
//   "hobbies": ["running", "coding"],
//   "education": { "college": "Yale" }
// }
// {"name":{"first":"Robert","last":"Smith"},"age":25,"hobbies":["running","coding"],"education":{"college":"Yale"}}

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
