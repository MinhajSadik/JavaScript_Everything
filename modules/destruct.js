const user = {
    id: 323,
    name: 'minhaj',
    age: 24,
}

const {name: title} = user;

console.log(title);

const myObject = {
    name: 'javascript',
    estd: 1995,
    founder: 'Branden Eich',
    liberary: {
        frameworkA: {
            liberaryR: 'ReactJS',
        }
        
    }
}

const {liberary: {frameworkA: {liberaryR} = {}}} = myObject;

console.log(liberaryR);

const myArray = [1, 12, 13, [14, 15, 16], 17, 18]

// const [num, num1, num2] = myArray;

// console.log(num, num1, num2);

const [,,num13, [num14],,,num17] = myArray;

// num 17' is undefiend
console.log(num13, num14, num17); 


var a = 1;

var b = 2;

[b, a] = [a, b];

console.log(a, b);