// import {
//   name as userName,
//   age as userAge,
//   greet,
// } from './modules/01_named_export.js';
// console.log(userName);
// console.log(userAge);
// console.log(greet());

//전부 가져오기

// import * as utils from './modules/01_named_export.js';

// console.log(utils.age);
// console.log(utils.name);
// console.log(utils.greet());
//
//default - export

// import addFunction from './modules/02_default.export.js';
// console.log(addFunction(4, 5));
//default 가 된 function을 자동으로 가져오는 것!!

import { name, age, greet } from './modules/03_exports.js';
console.log(name);
console.log(age);
console.log(greet());
