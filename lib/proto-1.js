'use strict';

const pointMethods = {
  move(x, y) {
    this.x += x;
    this.y += y;
  },
  toString() {
    return `(${this.x},${this.y})`;
  },
};

const point = {
  x: 10,
  y: 20,
};

Object.setPrototypeOf(point, pointMethods);

console.log(point.toString()); // (10,20)
point.move(5, 5);
console.log(point.toString()); // (15,25)
console.log(Object.getPrototypeOf(point) === pointMethods); // true
console.log(point.__proto__ === pointMethods); // true
console.log(point.__proto__.__proto__ === Object.prototype); // true
console.log(point.__proto__.__proto__.__proto__ === null); // true
