//nullish coaliscing operator
let language;
language = 0;
language = undefined;
//if left hand value is null or undefiend then it will show right hand
console.log(language ?? "javascript");

const name = {};
//there is small difference between nullish and logical or operator
console.log((name.firstname || name.lastname) ?? "guest");

//BigInt
let largest_number = Number.MAX_SAFE_INTEGER;

largest_number += 1;
largest_number = BigInt(largest_number) + 3n;

console.log(largest_number);

console.log(10n === BigInt(10)); // true

//Dynamic Import
//problem
// (async function () {
//   const { add } = await import("./external.js");
//   const { remove } = await import("./external.js");
//   add();
//   remove();
// })();

//solution
const { add } = await import("./external.js");
const { remove } = await import("./external.js");

console.log("solution here");

add();
remove();

//String matchAll
const text = "My favorite colors are #ffffff and #000000";
const regex =
  /#?(?<group1>[\da-fA-F]{2})(?<group2>[\da-fA-F]{2}(?<group3>[\da-fA-F]{2}))/g;

const matchAll = text.matchAll(regex);

for (let match of matchAll) {
  console.log(match);
}

//global this
globalThis.setTimeout(() => console.log("hello"), 100);
