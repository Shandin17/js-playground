/* eslint-disable */
'use strict';

function f() {
  console.log(this);
}

f(); // undefined
f.call(5); // 5
new f(); // f {}

function f1() {
  console.log(this.__proto__ === f1.prototype);
  console.log(this.constructor === f1);
}

new f1();

const obj = new f1();
console.log(obj.__proto__ === f1.prototype);
console.log(obj.constructor === f1);
