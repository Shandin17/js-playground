'use strict';

const generateKey = (args) => JSON.stringify(args);

// wrapper with a cache
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = generateKey(args);
    if (cache[key]) {
      console.log('Cache hit');
      return cache[key];
    }
    console.log('Cache miss');
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
