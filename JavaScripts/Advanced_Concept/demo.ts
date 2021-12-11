var names: string[] = ["minhaj", "minhaj", "minhaj"];
interface Person {
  firstName: string;
  lastName: string;
}

type Person2 = {
  firstName: string;
  lastName: string;
};

var resultOfNames = names.map((name: string): Person2 => {
  return {
    firstName: name,
    lastName: "sadik",
  };
});

console.log(resultOfNames);
