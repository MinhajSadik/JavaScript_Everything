"use strict";
var x = 20;

// myFunc er dunia
function myFunc() {
  // child/myFunc er dunia
  x = 30;
  console.log(`x from myFunc: ${x}`);
}
myFunc();

console.log(`x from global: ${x}`);
