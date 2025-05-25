'use strict';
// WeakMap keys are garbage collectable

let dog1 = { name: 'Snickers' };
let dog2 = { name: 'Sunny' };

const weak = new WeakMap();
const strong = new Map();

weak.set(dog1, 'Snickers is the best!');
strong.set(dog2, 'Sunny is the 2nd best!');

dog1 = null;
dog2 = null;

setTimeout(() => {
  console.log('1200ms later... waiting for garbarge collection');
  console.log(weak);
  console.log(strong);
}, 1200);
setTimeout(() => {
  console.log('3200ms later... waiting for garbarge collection');
  console.log(weak);
  console.log(strong);
}, 3200);

setTimeout(() => {
  console.log('6200ms later... waiting for garbarge collection');
  console.log(weak);
  console.log(strong);
}, 6200);

setTimeout(() => {
  console.log('12200ms later... waiting for garbarge collection');
  console.log(weak);
  console.log(strong);
}, 12200);
