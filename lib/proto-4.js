/* eslint-disable */
'use strict';

const l = () => {};

console.log(l.prototype); // undefined
console.log(l.__proto__); // [Function]
console.log(l.__proto__ === Function.prototype); // true
console.log(l.__proto__.constructor === Function); // true

new l(); // throws error: l is not a constructor
