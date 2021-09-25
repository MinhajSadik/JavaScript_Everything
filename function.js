// higher order function example
function hello() {
    return function(){
        console.log('hello world!');
    }
}

hello()();


// example 1 without higher order fuction 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var result = [];

for (let i = 0; i < numbers.length; i++) {
result.push(numbers[i])    
}

console.log(result);


// example 1 with higher order fuction 
var result = numbers.map((number) => number * 2)

console.log(result);