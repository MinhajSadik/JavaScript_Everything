// javascript variable swap diffrent ways
//1.
let a = 10;
let b = 20;

const result = ([a, b] = [b, a]);
console.log(result);

//2.
let c = 10;
let d = 30;
let temp = c;

c = d;
d = temp;

console.log(c, d);

let x = 9;
let y = 12;

console.log(`before swap x= ${x}, y= ${y}`);

x = x + y;
y = x - y;
x = x - y;

console.log(`after swap x= ${x}, y= ${y}`);
