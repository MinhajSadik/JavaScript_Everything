//type: string, number, array, null, undefiend, boolean never, unknown, any

const a: string = "hello world";
const b: number = 234;

function add(number1: number, number2: number): number {
  return number1 + number2;
}

const arr1: number[] = [1, 2, 3, 4];
const arr2: string[] = ["one", "two", "three", "four"];

//type alias or type anotation
type multiType = number | string | boolean;

const id: multiType = "adf2k32l32klasflkasfdaf";

interface IPerson {
  name: string;
  age: number;
  profession: string;
}

const person: IPerson = {
  name: "Minhaj",
  age: 24,
  profession: "little_programmer",
};
