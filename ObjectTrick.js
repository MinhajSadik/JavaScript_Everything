// 3' object method return an array which is key value phirs

const myObject = {
    name: 'javascript',
    estd: 1995,
    founder: 'Branden Eich'
}

const key = Object.keys(myObject)
const value = Object.values(myObject)
const entries = Object.entries(myObject)


console.log(key, value, entries);