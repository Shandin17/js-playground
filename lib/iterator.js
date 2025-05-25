'use strict';

function* it() {
  yield 1;
  yield 2;
  yield 3;
}

// spread - iterator consumer
const vals = [...it()];
console.log(vals); // [ 1, 2, 3 ]

function doSomething() {
  return console.log(arguments);
}

doSomething(...it());

// iterator - instance of an iterable object
// iterator-consumption protocol automatically creates an iterator from an iterable
// and consumes just this iterator instance

const arr = [1, 2, 3];

for (const [idx, val] of arr.entries()) {
  console.log(idx, val);
}
