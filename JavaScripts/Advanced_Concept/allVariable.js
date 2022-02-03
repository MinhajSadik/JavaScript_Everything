if (true) {
  var varKeyword = "this is var keyword";
}
console.log(varKeyword);

function scope() {
  console.log(varKeyword);
  var insideScope = "this is inside scope var keyword";
}
scope();
// console.log(insideScope);

if (true) {
  let letKeyword = "this is let keyword";
}
// console.log(letKeyword);

if (true) {
  const constKeyword = "this is const keyword";
  const constObject = {
    name: "javascript",
    age: "26 years",
  };
  constObject.name = "js or es";
  constObject.lavel = "hard";
  console.log(constObject);
}
// console.log(constKeyword);
