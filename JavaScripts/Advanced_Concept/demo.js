var names = ["minhaj", "minhaj", "minhaj"];
console.log(names);
var resultOfNames = names.map(function (name) {
    return {
        firstName: name,
        lastName: "sadik"
    };
});
console.log(resultOfNames);
