//types: string, number, array, null, undefiend, boolean never, unknown, any
var a = "hello world";
var b = 234;
function add(number1, number2) {
    return number1 + number2;
}
var arr = [1, 2, 3, 4];
var arr1 = ["one", "two", "three", "four"];
var arr2 = [1, 2, "three"];
var id = "adf2k32l32klasflkasfdaf";
var person = {
    name: "Minhaj",
    age: 24,
    profession: "little_programmer"
};
var person1 = {
    name: "minhaj",
    age: 23
};
var person2 = {
    name: "minha",
    age: 24
};
var personArray = [
    {
        name: "minhaj",
        age: 24,
        profession: "programmer"
    },
    {
        name: "ahmed",
        age: 24,
        profession: "developer"
    },
    {
        name: "sadik",
        age: 24
    },
];
var personArr = [person, person1];
// const personArr: Array<IPerson> = [person, person1];
//*enums
var Colors;
(function (Colors) {
    Colors["color1"] = "red";
    Colors["color2"] = "white";
    Colors["color3"] = "black";
})(Colors || (Colors = {}));
//*Generic ->
function _concat(a, b) {
    return a && b;
}
_concat(2, 3);
_concat("minhaj", "sadik");
var getArray = function (arr) {
    return arr;
};
var getArray1 = function (arr, obj) {
    return obj;
};
console.log(getArray(["one", "two", "three", 4]));
console.log(getArray([1, 2, 3]));
//*function
var greeting = function (name) {
    console.log(name);
};
greeting("minha");
var introduce = function (_a) {
    var name = _a.name, age = _a.age;
    return "Name: ".concat(name, ", age: ").concat(age);
};
console.log(introduce(person));
