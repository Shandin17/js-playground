'use strict';

const obj = {};

Object.defineProperty(obj, 'prop', {
  get() {
    return 123;
  },
  set(v) {
    console.log('ignore');
  },
});

console.log(obj.prop); // 123
