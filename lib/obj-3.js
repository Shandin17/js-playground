'use strict';

const obj = {
  a: 1,
  b: 2,
};

const compObj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
};

class MyClass {
  constructor() {
    this.a = 1;
    this.b = 2;
  }
}

const myClass = new MyClass();

for (const value of Object.entries(obj)) {
  console.log(value);
}
for (const value of Object.entries(compObj)) {
  console.log(value);
}
for (const value of Object.entries(myClass)) {
  console.log(value);
}
for (const value in compObj) {
  console.log(value);
}
