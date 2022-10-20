//Map Object
const map = new Map();

map.set("minhaj", { name: "minhaj", age: 24 });
map.set("sadik", { name: "sadik", age: 24 });

for (const val of map.values()) {
  console.log(val);
}

// for (const [key, value] of map) {
//   console.log(`${key} and ${value}`);
// }

map.forEach((key, val) => {
  console.log(`${key} and ${val}`);
});

console.log(Array.from(map.values()));

//clone
const clone = new Map(map);

console.log("equality of map and clone :>>", clone === map);

console.log("clone check :>>", clone.get("minhaj").name);
console.log("clone check :>>", clone.set("sadik", "uddin"));

//merge
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [4, "four"],
  [5, "five"],
  [6, "six"],
]);

const newMap = new Map([...first, ...second, [9, "nine"]]);

console.log(newMap);
