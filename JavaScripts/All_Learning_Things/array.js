const array = [1, 2, 3, 4, 5, 6, 7, 8];

// Cast a value as an array
const castArray = (arr) => (Array.isArray(arr) ? arr : [arr]); //array
// console.log(castArray(array));

//Check if an array is empty
const isEmpty = (arr) => Array.isArray(arr) && !arr.length; //false
// console.log(isEmpty(array));

//Clone an array
const clone = (arr) => arr.slice(0);

// Or
// const clone = (arr) => [...arr]; //array

// Or
// const clone = (arr) => Array.from(arr); //array

// Or
// const clone = (arr) => arr.map((x) => x); //array

// Or
// const clone = (arr) => JSON.parse(JSON.stringify(arr)); //array

// Or
// const clone = (arr) => arr.concat([]); //array

//*Compare two arrays regardless of order

const isEqual = (first, second) =>
  JSON.stringify([...new Set(first)].sort()) ===
  JSON.stringify([...new Set(second)].sort());

console.log(isEqual(array, array)); // true
