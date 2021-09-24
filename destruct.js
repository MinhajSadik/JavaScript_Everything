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