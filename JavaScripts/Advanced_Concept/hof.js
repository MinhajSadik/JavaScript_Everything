const languages = ["javascript", "reactjs", "nodejs", "reduxjs"];

const arrayMap = (arr, fn) => {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }

  return newArray;
};

const myArray = arrayMap(languages, function (language) {
  return language.length > 5;
});

console.log("myArray", myArray);
