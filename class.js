class Person {
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

const sakib = new Person(`Sakib`, 43)
sakib.eat();
