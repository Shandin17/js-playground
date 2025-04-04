'use strict';

function classroom(teacher) {
  return function study() {
    console.log(`${teacher} says to study ${this.topic}`);
  };
}

const assignment = classroom('Kyle');

// assignment(); // Kyle says to study undefined

const homework = {
  topic: 'JavaScript',
  assignment,
};
homework.assignment(); // Kyle says to study JavaScript

const otherHomework = {
  topic: 'Python',
};
assignment.call(otherHomework); // Kyle says to study Python


