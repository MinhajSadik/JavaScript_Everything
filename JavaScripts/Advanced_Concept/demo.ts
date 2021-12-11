var names: string[] = ["John", "Jane", "Mary"];
console.log(names);

interface Person {
  firstName: string;
  lastName: string;
}

var resultOfNames = names.map((name: string): Person => {
  return {
    firstName: name,
    lastName: "Doe",
  };
});

console.log(resultOfNames);
