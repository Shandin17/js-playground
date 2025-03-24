/* eslint-disable */

function strict() {
  'use strict';
  console.log(this); // undefined
  false.prop = 5; // TypeError: Cannot set property 'prop' of false
  x = 10; // ReferenceError: x is not defined
}

function sloppy() {
  console.log(this); // global object
  false.prop = 5; // will not throw an error
  x = 10; // ok
}

strict();
