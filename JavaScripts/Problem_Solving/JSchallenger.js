// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
//1. youtube uploaded
function stringToObject(a, b) {
  return new Object({ [a]: b });
}

function string_to_object(a, b) {
  return { [a]: b };
}

// console.log(stringToObject("d", "b"));
// console.log(string_to_object("c", "d"));

// Write a function that takes two strings (a and b) as arguments
// return how many times does the character occur in this sentence?
//2. youtube uploaded

function countStringOccur(a, b) {
  // return b.split(a).length - 1;
  return [...b].filter((val) => val === a).length;
}

// console.log(
//   countStringOccur(
//     "h",
//     "how many times does the character occur in this sentence?"
//   )
// );

// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

//solution
function merge_options(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}

function mergeOption(x, y) {
  y["d"] = y["b"];
  delete y["b"];

  return { ...x, ...y };
}

// console.log(merge_options({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));

// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise
function property_checker(a, b) {
  return Boolean(a[b]);
}

function propertyChecker(a, b) {
  return a[b] ? true : false;
}

// console.log(propertyChecker({ a: 1, b: 2, c: 3 }, "b"));
// console.log(property_checker({ a: 1, b: 2, c: 3 }, "b"));

// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise
function checkEarlier(a, b) {
  return a < b;
}

function check_earlier(a, b) {
  return a < b;
}

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function percentage(a, b) {
  return (a * b) / 100;
}

function percentage1(a, b) {
  return (b / 100) * a;
}

console.log(percentage(10, 1));

// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
function convertSetToArray(set) {
  return Array.from(set);
}

function convert_set_to_Array(set) {
  return [...set];
}

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function extract_first_half_string(a) {
  return a.slice(0, a.length / 2);
}

function extractFirstHalfString(a) {
  return a.slice(0, a.length / 2);
}

// Write a function that takes an object as argument
// In some cases the object contains other objects with some deeply nested properties
// Return the property 'b' of object 'a' inside the original object if it exists
// If not, return undefined
function nastedObjectProperty(obj) {
  const {
    a: { b },
  } = obj;

  return b !== undefined ? b : null;
}

function nasted_object_property(obj) {
  return null;
}

console.log(nastedObjectProperty({ a: { b: { c: 2 } } }));

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function splitDigit(a) {
  return Array.from(String(a), Number);
}

function split_digit(a) {
  const string = a + "";
  const strings = string.split("");
  return strings.map((digit) => Number(digit));
}

console.log(splitDigit(100));
