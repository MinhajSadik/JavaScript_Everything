// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         console.log(`${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`${this.name} is sleeping`);
//     }
//     play(){
//         console.log(`${this.name} is playing`);
//     }
// }

// const sakib = new Person(`Sakib`, 43)
// sakib.eat();


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

const sakib = new Cricketer('sakib', 43, 'all rounder', 'bangladesh')

sakib.paly();