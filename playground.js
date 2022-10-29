function fibonacci(n) {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let result = fibonacci(8);
console.log(result);

const exOne = Array(5);
console.log(exOne);

const exTwo = [];
exTwo[2] = "two";

console.log(exTwo);

const exThree = [, , ,];
console.log(exThree);

function fibonacci1(targetIndex) {
  const sequence = [0n, 1n];
  for (let i = 2; i < targetIndex + 1; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }
  return sequence[targetIndex];
}

// console.log(fibonacci1(2023));

// function perameter wise behavior
function foo(b) {
  let a = 10;
  return a + b + 11; // 10 + 11 = 21;
}

function bar(x) {
  let y = 3;
  return foo(x * y); // 7 * 3 = 21
}

const baz = bar(7); // result 42 to baz

console.log(baz);

function swap(a, b) {
  return ([a, b] = [b, a]);
}

console.log(swap(1, 2));

console.log(5 + "2" * false);

function sumOfDigits(a, b, c, sum) {
  sum = a + b + c;
  return sum;
}

sumOfDigits(1, 2, 3);

const arr = [
  "next topper",
  10,
  20,
  true,
  100,
  false,
  "",
  NaN,
  "next topper",
  10,
  "",
  20,
  100,
];

const remove_falsey_value = arr.filter((isFalse) => {
  return (
    isFalse !== undefined &&
    isFalse !== null &&
    isFalse !== "" &&
    !isNaN(isFalse) &&
    isFalse !== NaN &&
    isFalse !== false
  );
});

console.log(remove_falsey_value);

const remove_duplicate_value = arr.filter((isDuplicate, index) => {
  return arr.indexOf(isDuplicate) === index;
});

console.log(remove_duplicate_value);

function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

console.log(mul(3)(3)(3));

function largestNumber(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const largestNumberOfArraySort = (array) => {
  return array.sort((a, b) => {
    return b - a;
  })[0];
};

const result1 = largestNumberOfArraySort([10, 20, 30, 40, 50]);
console.log(result1);

const output = largestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(output);

let x = 5;
let y = 9;

//greter than
if (x > 8) {
  console.log("YES");
} else {
  console.log("NO");
}

//less than
if (x < 8) {
  console.log("YES");
} else {
  console.log("NO");
}

//less than or equal
if (x <= 8) {
  console.log("YES");
} else {
  console.log("NO");
}

//greater than or equal
if (x >= 8) {
  console.log("YES");
} else {
  console.log("NO");
}

let a = 0,
  b = "",
  c = false,
  d = null,
  e = undefined,
  f = NaN,
  g = true;

console.log(+a, typeof a);
console.log(+b, typeof b);
console.log(+c, typeof c);
console.log(+d, typeof d);
console.log(+e, typeof e);
console.log(+f, typeof f);
console.log(+g, typeof g);

if (5 > 9) {
  console.log("YES");
}

// const button = document.getElementById("button");

function debounced(func, delay) {
  let timeout;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func();
    }, delay);
  };
}

// button.addEventListener(
//   "click",
//   debounced(function () {
//     console.log("Clicked");
//   }, 500)
// );

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

let longestName = "";

function bestFriends(allFriends) {
  for (let i = 0; i < allFriends.length; i++) {
    const friendName = allFriends[i];
    if (friendName.length > longestName.length) {
      longestName = friendName;
    }
  }
  return longestName;
}

console.log(bestFriends(["minhaj", "sadik", "salam", "himuislam"]));

var languages = ["php", "javascript"];
languages.length = 0;
languages.push("golang");
console.log(languages);

function sayHi(name) {
  return { say: `welcome ${name}` };
}

console.log(sayHi("turing"));

(function (foo) {
  console.log(typeof foo);
})([1, 2, 3]);

let index = 1,
  count = {};

count: {
  begin: 2;
  baz: ++index;
}

console.log(count.begin + count.index + index);

let turingArr = [1, "Turing", { x: 2 }, [3, 4]];

for (let i = 0; i < turingArr.length; i++) {
  if (turingArr[i] === "Turing") turingArr.splice(i, 1);
  else console.log(turingArr[i]);
}

console.log(turingArr);

function hello(name) {
  console.log(name);
}
console.log("Hi" + hello("min"));

var t = 99;
t = "turing";
console.log(t);

function welcome(name) {
  console.log("hi");

  setTimeout(() => {
    console.log(`i am ${name}`);
  }, 0);
  console.log(`bye ${name}`);
}

welcome("turing");

const xs = [1, 2];

xs[0] = 10;
xs[1] = 20;
xs[2] = 30;

console.log(xs);

console.log(Number("10") - 10 == 0);

let ys = { y: 1 };
ys.x = ys;

// let outputs = JSON.stringify(ys);
// console.log(outputs);

let bc = [];
let cs = [] + bc + "Turing".split("");

console.log(cs);

const day = "mon";
const values = {
  sat: 0,
  sun: 1,
};

console.log(values[day] ?? -1);

const array = ["Like", "Share", "Comment"];
array.splice(2, 1, "JS Startup");

import { URL } from "url";
const myUrl = new URL("https://voiceroom.com:3000");
console.log(myUrl.port);
myUrl.port = 5000;
console.log(myUrl.port);
myUrl.port = 1234;
console.log(myUrl.port);
console.log(myUrl.href);
myUrl.port = "abcd";
console.log(myUrl.port);
myUrl.port = "5678abcd";
console.log(myUrl.port);
myUrl.port = 1234.1234;
console.log(myUrl.port);
console.log(myUrl.href);

try {
  const m = 1;
  const n = m + z;
  console.log(n);
} catch (error) {
  console.log(error.name);
}

const user = {
  hello: "welcome to turing",
  sayHello() {
    console.log(this.hello);
  },
};

setTimeout(user.sayHello.bind(user), 1000);

// console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

// Promise.resolve(3).then(console.log);
// console.log(4);

console.time("time");

let ax = 0;
for (ax; ax < 5; ax++);
console.log("ax", ax);

console.log("what is the syntex", 23.43 | 1);

let name = {
  firstName: "Minhaj",
  lastName: "Sadik",
};

function printFullName(hometown, state) {
  console.log(this.firstName + this.lastName + hometown + state);
}

printFullName.call(name, "sylhet", "bangladesh");

printFullName.apply(name, ["sylhet", "Bangladesh"]);
const printMyName = printFullName.bind(name, "-sylhet", "-Bangladesh");
printMyName();
