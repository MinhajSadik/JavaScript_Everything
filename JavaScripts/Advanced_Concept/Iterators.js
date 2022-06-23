/**
 * Iterators are a way to iterate over a collection of items.
 * They are a way to access the items in a collection.
 *
 */

const array = ["minhaj", "sharmina", "sharminhaj"];

const iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());

//String Iterator Overrides
String.prototype[Symbol.iterator] = function () {
  let index = this.length;
  return {
    next: function () {
      if (index === 0) {
        return { done: true };
      }
      index--;
      return { value: "ok", done: false };
    },
  };
};

console.log([..."minhaj"]);

// Array Iterator Overrides
Array.prototype[Symbol.iterator] = function () {
  let index = this.length;
  return {
    next: function () {
      if (index === 0) {
        return { done: true };
      }
      index--;
      return { value: this[index], done: false };
    },
  };
};
console.log(array);

// Map Iterator Overrides
Map.prototype[Symbol.iterator] = function () {
  let index = this.size;
  return {
    next: function () {
      if (index === 0) {
        return { done: true };
      }
      index--;
      return { value: this.entries(), done: false };
    },
  };
};
console.log([
  [1, "minhaj"],
  [2, "sharmina"],
  [3, "sharminhaj"],
]);

//Custom Iterator
function* customIterator() {
  yield array[0];
  yield array[1];
  yield array[2];
}
const cIterator = customIterator();
console.log(cIterator.next());
console.log(cIterator.next());
console.log(cIterator.next());
console.log(cIterator.next());

//Custom Iterator same as iterator
function range(start, end, step) {
  let current = start;
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result;
          if (current <= end) {
            result = { value: current, done: false };
            current += step;
            return result;
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
  //   return Array.from(
  //     { length: (end - start) / step },
  //     (_, i) => start + i * step
  //   );
}

console.log([...range(100, 10000, 5)]);
