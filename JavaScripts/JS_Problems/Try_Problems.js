var a, b, c;
// 2. What will be the output of following code ?
// console.log(typeof isNaN(+"6"));

// console.log(typeof +String("true"));

// 7. What will be the output of following code ?
// console.log("Hello" + "Javascript" + "Lover" + +-55);
// console.log(true + !!"false");
// console.log(5 * "5" + "10" - "2000");

// 8. What will be output of following code ?
// var a = 5;
// var b = ++a;
// b = b++;
// var c = b;
// console.log(b);
// console.log(c);

// 9. What will be output of following code?
a = null;
b = 0;
c;
// output: false false true false true
console.log(a == b);
console.log(a > b);
console.log(a <= b);
console.log(a >= c);
console.log(a == c);

// 10. What will be output of following code ?

// var a, b, c;

a = 5;
b = new Number("5");
c = +"5";

console.log(a == b);
console.log(a === b);
console.log(a == c);
console.log(a === c);
console.log(b == c);
console.log(b === c);
