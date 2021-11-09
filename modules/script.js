let array = new Array();

console.log(Array.prototype);

let object = new Object();

console.log(Object.prototype);

const func = new Function();

console.dir(Function.prototype);

const inneridvar = "innerid";
const scriptsid = document.getElementById(inneridvar);

scriptsid.innerHTML = "something like that";
