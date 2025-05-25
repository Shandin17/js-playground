'use strict';

const homework = {
  topic: 'JavaScript',
};
const otherHomework = Object.create(homework);

console.log(otherHomework.topic); // JavaScript
console.log(Object.getPrototypeOf(otherHomework) === homework); // true
