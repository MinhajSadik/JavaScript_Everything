/**
 * currying is a technique to curry a function.
 * It is used to make a function that takes multiple arguments.
 */

function add(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));
