'use strict';

const obj = {}; // new Object();

console.log(obj.__proto__ === Object.prototype); // true
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

console.log(obj.constructor.prototype === Object.getPrototypeOf(obj)); // true

// every object has a contructor and a prototype marked by __proto__
// constructor is a function and it has prototype property
// __proto__ of an object links us to prototype of constructor

function Cat() {
  return 'meow';
}

const cat = new Cat(); // creates a new object with Cat as constructor
console.log(cat instanceof Cat); // true
console.log(cat.constructor === Cat); // Cat becomes constructor of cat
console.log(cat.__proto__ === Cat.prototype); // true

console.log(this);
