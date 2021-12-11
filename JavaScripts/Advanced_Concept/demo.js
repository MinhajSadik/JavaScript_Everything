var names = ["minhaj", "Minhaj", "Ahmed"];
console.log(names);
var resultOfNames = names.map(function (name) {
  return {
    firstName: name,
    lastName: "sadik",
  };
});
console.log(resultOfNames);
