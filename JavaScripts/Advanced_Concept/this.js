/**
 * this
 * /@
 * #implicit binding
 * #explicit binding
 * #new binding
 * #window binding
 * @/
 * call
 * bind
 * apply
 */

// started 'this' with implicit binding
function implicit() {
  console.log(this);
}
// implicit();

const printName = function () {
  console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
};

const minhaj = {
  name: "minhaj",
  age: 24,
};

const v1 = "programmer";
const v2 = "cricketer";
const v3 = "lover";

const v = [v1, v2, v3];

printName.call(minhaj, v1, v2, v3);
printName.apply(minhaj, v);
printName.bind(minhaj, v1, v2, v3);
nameInstace();
