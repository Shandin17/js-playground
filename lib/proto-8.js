'use strict';

var homework = {
  topic: 'JavaScript',
};
var otherHomework = Object.create(homework);

console.log(otherHomework.topic); // JavaScript
console.log(Object.getPrototypeOf(otherHomework) === homework); // true

