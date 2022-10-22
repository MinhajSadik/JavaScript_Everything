//type: string, number, array, null, undefiend, boolean never, unknown, any
var a = "hello world";
var b = 234;
function add(number1, number2) {
  return number1 + number2;
}
var arr1 = [1, 2, 3, 4];
var arr2 = ["one", "two", "three", "four"];
var id = "adf2k32l32klasflkasfdaf";
var person = {
  name: "Minhaj",
  age: 24,
  profession: "little_programmer",
};
var person1 = {
  name: "minhaj",
  age: 23,
};
//enums
var Colors;
(function (Colors) {
  Colors["color1"] = "red";
  Colors["color2"] = "white";
  Colors["color3"] = "black";
})(Colors || (Colors = {}));
console.log(Colors.color2);
