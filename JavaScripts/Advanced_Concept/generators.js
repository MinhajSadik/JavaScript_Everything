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
