// let array = new Array();

// console.log(Array.prototype);

// let object = new Object();

// console.log(Object.prototype);

// const func = new Function();

// console.dir(Function.prototype);

document.getElementById("root").innerText = "something like Minhaj";

document.getElementById("addNew").addEventListener("click", function (e) {
  let newItem = document.createElement("li");
  newItem.innerText = "New Item";
  document.getElementById("myList").appendChild(newItem);
});

document.getElementById("myList").addEventListener("click", function (e) {
  e.target.parentNode.removeChild(e.target);
});
