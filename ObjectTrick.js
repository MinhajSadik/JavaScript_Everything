// 1' object method return an array which is key value phirs

// 2' Object ShortHand
var x = 1
var y = 2

const myObject = {
    name: 'javascript',
    estd: 1995,
    founder: 'Branden Eich',
    x,
    y
}

const key = Object.keys(myObject)
const value = Object.values(myObject)
const entries = Object.entries(myObject)


console.log(key, value, entries);