// for/ for_in / for_of


for (var i = 1; i < 5; i++) {
    console.log(i);
}

const myObject = {
    name: 'javascript',
    estd: 1995,
    founder: 'Branden Eich'
}


for(prop in myObject) {
    console.log(prop);
}

const numbers = [1, 2, 3, 4, 5, 1, 23]
const myString = 'I love bangladesh'
//for_of return 'per' element in array, number, string and for_in return 'per' index in array, number, string 

for(num of numbers){
    console.log(num);
}
// for in return index
for(num in numbers){
    console.log(num);
}


for(str of myString){
    console.log(str);
}

for(ind in myString){
    console.log(ind);
}