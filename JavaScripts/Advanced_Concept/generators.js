//usecase of generator function
// function* generator() {}
// function * generator() {}
// function *generator() {}
const myGenerator = function* () {};
//arrow function can't be used as generator function
// const myGenerator = *() => {};

//inside class
class myClass {
  *generator() {}
}
//inside object literal.
const myObject = {
  *generator() {},
};

const array = ["minhaj", "sharmina", "sharminhaj"];

function* generator() {
  yield "minhaj";
  yield "sharmina";
  yield "sharminhaj";
  yield "sadik";
}

const iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//compare with custom Iterator to generator
const object = {
  value1: 1,
  value2: 2,
  value3: 3,
  value4: 4,
  value5: 5,
};
Object.prototype[Symbol.iterator] = function () {
  const entries = Object.entries(this);
  let count = entries.length;
  let index = 0;
  return {
    next() {
      if (count > 0) {
        let result = { done: false, value: entries[index][1] };
        count--;
        index++;
        return result;
      }
      return { done: true };
    },
  };
};

//generator function
function* objGenerator(obj) {
  const entries = Object.entries(obj);
  for (let entry of entries) {
    yield entry[1];
  }
}

const objIterator = objGenerator(object);

// for (let value of object) {
for (let value of objIterator) {
  console.log(value);
}
// console.log([...object]);
