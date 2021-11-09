const numbers = [1, 2, 3, 4] 

const sum = numbers.reduce((preValue, currentValue) => {
    return preValue + currentValue;
}, 0)

console.log(numbers, sum);