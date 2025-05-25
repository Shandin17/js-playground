'use strict';

const obj = {
  greet() {
    console.log('Hello, world!');
  },
  ['greet' + 'ing']() {
    console.log('Hello, world!');
  },
  *['ok, greet'.toUpperCase()]() {
    yield 'Hello, audience!';
  },
};

obj.greet();
obj['greeting']();
console.log(obj['OK, GREET']().next());
