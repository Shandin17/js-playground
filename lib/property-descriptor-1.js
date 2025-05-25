'use strict';

const myObj = {
  name: 'John',
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const descriptor = Object.getOwnPropertyDescriptor(myObj, 'name');
console.log(descriptor);


const obj2 = {};

Object.defineProperty(obj2, 'fave', {
  value: 42,
  enumerable: true, // Object.keys(...), spread: ..., Object.assign(...), Object.entries(...)
  writable: true,       // assignment via '='
  configurable: true,    // descriptor can be changed
});

console.log(Object.getOwnPropertyDescriptor(obj2, 'fave'));
Object.freeze(obj2);
console.log(Object.getOwnPropertyDescriptor(obj2, 'fave'));

