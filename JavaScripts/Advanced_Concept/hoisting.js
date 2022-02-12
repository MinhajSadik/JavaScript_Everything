/**
 *
 * Hoisting
 * var let and const
 * function
 *
 */

//hoisting with var
var checkVar = undefined; // var instantly hoisted to the top of the scope and assigned undefined
console.log(checkVar);
checkVar = "checkVar";
console.log(checkVar);

// hoisting with let
let checkLet; // let instantly hoisted to the top of the scope but won't be assigned any value undefined instantly
console.log(checkLet);
checkLet = undefined; // let will be assigned undefined value instanted top of the value assign
checkLet = "checkLet";
console.log(checkLet);

// hoisting another concept with let
let checkLet1; // checkLet1 = 'undefiend';
console.log(checkLet1);

// console.log(checkLet1);
// let checkLet1; // it will throw a reference error

// hoisting concept with var
var LANGUAGE = "JAVA";
var language = "javascript";

function getLanguage() {
  if (!language) {
    var language = LANGUAGE;
  }
  return language;
}

console.log(`I Love ${getLanguage()}`);

// hoisting concept with let

let LANGUAGE1 = "JAVA";
let language1 = "javascript";

function getLanguage1() {
  if (!language) {
    // this concept won't be working properly for using let
    let language;
    language = undefined;
    language = LANGUAGE;
  }
  return language; // actually this language returned
}

console.log(`I Love ${getLanguage1()}`);

// hoisting how to works with function
//all variable and function defination will be hoisted to the top of the scope
myFunc();
function myFunc() {
  console.log("I am a function");
}

// hoisting another concept with function
function myFunc1() {
  //  this variable is hoisted to the top of the into function in scope and as usual, it will work followed by the previous hoisting concept
  language = "javascript";
  var language;
  console.log(language);
}
myFunc1();

// hoisting another concept with named function
// const myFunc2;
// myFunc2();

// myFunc2 = undefined;
const myFunc3 = function () {
  //  this variable is hoisted to the top of the into function in scope and as usual, it will work followed by the previous hoisting concept
  language = "javascript call named function";
  var language;
  console.log(language);
};
