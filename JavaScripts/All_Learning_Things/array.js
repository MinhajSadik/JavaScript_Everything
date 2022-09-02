// Cast a value as an array
const castArray = (arr) => (Array.isArray(arr) ? arr : [arr]);
console.log(castArray(1, 1));

//Check if an array is empty
const isEmpty = (arr) => Array.isArray(arr) && !arr.length;
console.log(isEmpty([1]));
