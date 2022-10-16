function factorial(num) {
  if (num < 0) {
    return 0;
  } else if (num < 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

const resultFactorial = factorial(6);
console.log("resultFactorial", resultFactorial);

function callbackExplain(name, age, task) {
  console.log(`${name} is ${age} years old`);
  task();
}

function task() {
  console.log(`no task`);
}

callbackExplain("Minhaj", 12, task);

function argumentExplain(num, num1, ...rest) {
  console.log(num, num1, rest);
  return num * num1 * rest.reduce((a, b) => console.log(a, b));
}

const resultArguments = argumentExplain(2, 3, 4, 5, 6, 7, 8, 9);
console.log(resultArguments);

console.assert(resultFactorial === 360, "resultArguments is not 360");
console.dir(resultFactorial);
console.debug(resultFactorial);
console.info(resultFactorial);
console.warn(resultFactorial);
console.error(resultFactorial);
console.time("factorial", resultFactorial);
console.timeEnd("factorial", resultFactorial);

var x;
if (1 < x < 3) {
  console.log("x is between 1 and 3");
}
if ("" == 0) {
  console.log("it is, but why?");
}

const items = new Map([
  [1, { name: "John" }],
  [2, { name: "Mary" }],
]);

items.set(4, { name: "Alan" });
items.set(2, { name: "Jeff" });

items.size; // 3
items.has(4); // true
items.get(2); // { name: 'Jeff' }

items.delete(2);
items.size; // 2

[...items.keys()]; // [1, 4]
[...items.values()]; // [{ name: 'John' }, { name: 'Alan' }]

items.clear();
items.size;
