// higher order function example
function hello() {
  return function () {
    console.log("hello world!");
  };
}

hello()();

// example 1 without higher order fuction
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = [];

for (let i = 0; i < numbers.length; i++) {
  result.push(numbers[i]);
}

console.log(result);

// example 1 with higher order fuction
var result = numbers.map((number) => number * 2);

console.log(result);

// example 2 without higher order fuction
var players = [
  {
    name: "sakib",
    avg: 30.0,
  },
  {
    name: "tamim",
    avg: 34.0,
  },
  {
    name: "mahmudullah",
    avg: 100.0,
  },
  {
    name: "musfiq",
    avg: 49.23,
  },
];

var playerAvgWithFourty = [];

for (let i = 0; i < players.length; i++) {
  if (players[i].avg >= 40) {
    playerAvgWithFourty.push(players[i]);
  }
}

console.log(playerAvgWithFourty);

// example 2 with higher-order-fuction
var playersWithAvgFourty = players.filter((player) => player.avg >= 40);

console.log(playersWithAvgFourty);

// example 3 array.map() built in by me higher order function
// self higher order function equivalent to 'array.map'
const javascript = ["javascript", "Golang", "Python", "Rust", "Haskell"];

function mapMin(arr, func) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(func(arr[i]));
  }
  return newArray;
}

const myArray = mapMin(javascript, function (language) {
  return language;
});

console.log(myArray);

function sleep(name, time) {
  console.log(`${name} is sleeping in ${time} PM`);
}

sleep("minhaj", "11");
sleep("hifzur", "1");
sleep("joynul", "2");

function sum(a, b) {
  //   return a + b;
}

let x = sum(3, 4);
console.log(x);
