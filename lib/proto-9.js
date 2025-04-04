'use strict';

const homework = {
  study() {
    console.log(`${this.topic} is awesome!`);
  },
};


const jsHomework = Object.create(homework);
jsHomework.topic = 'JavaScript';
jsHomework.study(); // JavaScript is awesome!

const pythonHomework = Object.create(homework);
pythonHomework.topic = 'Python';
pythonHomework.study(); // Python is awesome!

console.log(Object.getPrototypeOf(jsHomework) === Object.getPrototypeOf(pythonHomework)); // true

