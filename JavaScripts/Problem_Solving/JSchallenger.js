// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

//solution
function merge_options(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}

function myFunction(x, y) {
  y["d"] = y["b"];
  delete y["b"];

  return { ...x, ...y };
}

console.log(merge_options({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));

// write a function that takes an object as an argument return true if the object has a property with key b
// const object1 = {
//   prop: "exists",
// };

// console.log(Object.hasOwn(object1, "prop"));
// // expected output: true

// var obj = {
//   a: undefined,
//   b: null,
//   c: false,
// };

// // a, b, c all found
// for (var prop in obj) {
//   document.writeln("Object1: " + prop);
// }

// function Class() {
//   this.a = undefined;
//   this.b = null;
//   this.c = false;
// }

// Class.prototype = {
//   a: undefined,
//   b: true,
//   c: true,
//   d: true,
//   e: true,
// };

// var obj2 = new Class();

// // a, b, c, d, e found
// for (var prop in obj2) {
//   document.writeln("Object2: " + prop);
// }

// function hasOwnProperty(obj, prop) {
//   var proto = obj.__proto__ || obj.constructor.prototype;
//   return prop in obj && (!(prop in proto) || proto[prop] !== obj[prop]);
// }

// if (Object.prototype.hasOwnProperty) {
//   var hasOwnProperty = function (obj, prop) {
//     return obj.hasOwnProperty(prop);
//   };
// }

// // a, b, c found in modern browsers
// // b, c found in Safari 2.0.1 and older
// for (var prop in obj2) {
//   if (hasOwnProperty(obj2, prop)) {
//     document.writeln("Object2 w/ hasOwn: " + prop);
//   }
// }
