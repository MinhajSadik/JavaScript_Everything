`import { numbers, obj } from './external.js'; //named import

import * as test from './external.js'; // alieas way

import { numbers as num, obj as object } from './external.js'; // named import

import Externals, { numbers } from './Externals.js'; export default and named export

console.log(Externals, numbers);

import { myFunc } from './Externals.js'; // function import

import myFuncDefault from './Externals.js'; // function import default

myFuncDefault()
myFunc()
`