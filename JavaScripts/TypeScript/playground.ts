//type: string, number, array, null, undefiend, boolean never, unknown, any

const a: string = "hello world";
const b: number = 234;

function add(number1: number, number2: number): number {
  return number1 + number2;
}

const arr: number[] = [1, 2, 3, 4];
const arr1: string[] = ["one", "two", "three", "four"];
const arr2: Array<number | string> = [1, 2, "three"];

//type alias or type anotation
type multiType = number | string | boolean;

const id: multiType = "adf2k32l32klasflkasfdaf";

//interface for object
interface IPerson {
  name: string;
  age: number;
  profession?: string;
}

const person: IPerson = {
  name: "Minhaj",
  age: 24,
  profession: "little_programmer", //it is an optional
};

const person1: IPerson = {
  name: "minhaj",
  age: 23,
};

const personArr: IPerson[] = [person, person1];
// const personArr: Array<IPerson> = [person, person1];

//enums
enum Colors {
  color1 = "red",
  color2 = "white",
  color3 = "black",
}

//Generic ->
function _concat<M>(a: M, b: M): M {
  return a && b;
}

_concat<number>(2, 3);

_concat<string>("minhaj", "sadik");
