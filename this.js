// this keyword in javascript

//1 implicit binding
var person = {
    name: "minhaj",
    age: 25,
    printPlayerName: function(){
        console.log(this.age);
    }
};
person.printPlayerName();

var printPlayerNameFunction = function(obj){
    obj.printPlayerName = function(){
        console.log(this.name);
    };
};

const sakib = {
    name: 'Sakib',
    age: 25,
};

const tamim = {
    name: 'Tamim',
    age: 25,
}

printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim)

sakib.printPlayerName();
tamim.printPlayerName();

var Person = function(name, age){
    return {
        name: name,
        age: age,
        printName: function(){
            console.log(this.name);
        },
        father: {
            name: 'Abdul Kayum',
            printName: function(){
                console.log(this.name);
            }
        }
    }
}

const minhaj = Person('Minhaj', 25);
minhaj.printName();
minhaj.father.printName();


//2 explicit binding
const printName = function(v1, v2, v3){
    console.log(`${this.name} is ${v1}, ${v2}, & ${v3}`);
}
var sadik = {
    name: "Minhaj",
    age: 25,
}

const v1 = "Handsome";
const v2 = "All-Rounder";
const v3 = "Best Programmer";

const vApply = [v1, v2, v3];

printName.call(sadik, v1, v2, v3); //.call recived multiple variable

printName.apply(sadik, vApply); //.apply recived an array 

var newFunc = printName.bind(sadik, v1, v2, v3); //.bind behave a same of .call but .bind isn't direct call it's return new function when it's called

newFunc();



//3 new binding
//4 window binding

