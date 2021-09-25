class Merson {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
    play(){
        console.log(`${this.name} is playing`);
    }
}

const Aakib = new Merson(`Sakib`, 43)
Aakib.eat();


class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Cricketer extends Person {
    constructor(name, age, type, country){
        super(name, age);

        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    paly(){
        console.log(`${this.name} is palying`);
    }
}

const sakib = new Cricketer('Ssakib', 43, 'all rounder', 'bangladesh')

sakib.paly();


class SomeOne{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    get setName() { //getter
        return this.name
    }
    set setName(name){ //setter
        this.name = name;
    }
    static isValid(cricketer1, cricketer2){
        // console.log('Yes is Static and Valid')
        // return this.name; // here this.name is refer main Object ex:: SomeOne
        return cricketer1.age === cricketer2.age;
    }
}


const minhaj = new SomeOne('Minhaj', 24)
const sharMin = new SomeOne('SharMin', 24)
// manS.eat();

// console.log(manS.setName);
// manS.setName = "SharMin";
// console.log(manS)

console.log(SomeOne.isValid(minhaj, sharMin)); //