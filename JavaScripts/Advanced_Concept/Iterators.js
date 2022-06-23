/**
 * Iterators are a way to iterate over a collection of items.
 * They are a way to access the items in a collection.
 *
 */

const array = ["minhaj", "sharmina", "sharminhaj"];

const iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());

//Custom Iterator
String.prototype[Symbol.iterator] = function () {
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

console.log([..."minhaj"]);
