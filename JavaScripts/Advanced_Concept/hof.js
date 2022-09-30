const languages = ["javascript", "reactjs", "nodejs", "reduxjs"];

const arrayMap = (arr, fn) => {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
    console.count("countTime");
  }
  return newArray;
};

const myArray = arrayMap(languages, function (language) {
  return language.length > 5;
});

console.log("myArray", myArray);

function log(item) {
  return console.log(item);
}


function process(data, callback) {
  for (let i = 0; i < data.length; i += 1) {
    callback(data[i]);
  }
}

process([1, 2, 3], log); // prints 1; 2; 3;

const numbers = [1, 2, 3];

// pass anonymous function
numbers.map(function (item) {
  return item * 2;
}); // [2, 4, 6]

// or extract the callback into a named function
function double(item) {
  return item * 2;
}

numbers.map(double); // [2, 4, 6]

const numbers1 = [1, 2, 3];

numbers
  .map((n) => n * 2) // it will return [2, 4, 6]
  .filter((n) => n % 4) // it will filter out number that divides by 4
  .reduce((a, b) => a + b); // return 6 - sum of the array items

function compose(...fns) {
  return function (arr) {
    return fns.reduceRight((acc, fn) => fn(acc), arr);
  };
}

function pow2(arr) {
  return arr.map((v) => v * v);
}

function filterEven(arr) {
  return arr.filter((v) => v % 2);
}

const pipe = compose(filterEven, pow2);

pipe([1, 2, 3, 4]); // [1, 9];
