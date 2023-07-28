/*
@MinhajSadik
@name add
@param {Number}
@return {Number}
*/

function add(x) {
    return 10 + x;
}

/*
@MinhajSadik
@name memo
@param {Function}
@return {Function}
    @param {Number} 
    @return {Object}
*/
function memo(func) {
    var cache = {};
    return function (x) {
        if (cache[x]) {
            return cache[x];
        } else {
            var result = func(x)
            cache[x] = result;
            return result;
        }
    }

}

const calculation = memo(add)

// console.log(calculation(20));
// console.log(calculation(20));

/*
@MinhajSadik
@name nastedAdd
@param {Number}
@return {Number}
*/

function nastedAdd(...rest) {
    return rest.reduce((prev, curr) => prev + curr);
}

/*
@MinhajSadik
@name nastedMemo
@param {Function}
@return {Function}
    @param {Number} 
    @return {Object}
*/

function nastedMemo(func) {
    const cache = {};
    return function (...rest) {
        const key = JSON.stringify(rest);
        if (cache[key]) {
            console.log("cache", cache[key]);
            return cache[key];
        } else {
            const result = func(...rest)
            cache[key] = result;
            console.log("calc", result)
            return result
        }
    }
}


const newCalculation = nastedMemo(nastedAdd)
console.log(newCalculation(20, 30, 50));
console.log(newCalculation(20, 30, 50));
console.log(newCalculation(20, 30, 50));
console.log(newCalculation(20, 30, 50));
console.log(newCalculation(20, 30, 50));
console.log(newCalculation(20, 30, 50));
console.log(newCalculation(20, 30, 50));
