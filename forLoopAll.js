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