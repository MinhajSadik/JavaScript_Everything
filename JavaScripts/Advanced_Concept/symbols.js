/**
 * Symbols are a new type of object in JavaScript.
 * They are used to create a unique object that can be used as a property key.
 */

const symbol = Symbol("i am minhaj symbol"); //symbol with description
console.log(symbol);

const name1 = Symbol.for("name1");
const name2 = Symbol.for("name2");
console.log(name1 === name2); //true

const cricket = Symbol("This is a symbol for cricket");
const test = "This is a dynamic value used in object";

const object = {
  name: "Minhaj",
  [cricket]: "symbol value",
  [test]: "dynamic value", //dynamically used as a property like others premitive
};
console.log(object);

const javascripts = {};

javascripts.name = "JavaScript";
javascripts.estd = 1995;
javascripts[Symbol("founder")] = "Brendan Eich"; //it's an hidden property

for (let key in javascripts) {
  console.log(key);
}
console.log(Object.keys(javascripts));

//custom method using symbol
const myArray = [1, 2, 3, 4, 5];
let includes = Symbol("My own array method reference");
Array.prototype[includes] = function (num) {
  return this.includes(num);
};

// console.log(myArray[includes](6));

//own Symbol.search
class Product {
  constructor(title) {
    this.title = title;
  }
  //implement the search method
  [Symbol.search](query) {
    return query.indexOf(this.title) >= 0 ? query : null;
  }
}

const laptop = new Product("mobile");
console.log("mobile".search(laptop));
