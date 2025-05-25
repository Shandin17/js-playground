'use strict';

const obj = {
  name: 'John',
};
const { secondName: sName = 'Smith' } = obj;
console.log(sName); // Smith

const obj2 = {
  favoriteColor: 'blue',
};

let fave;
// surrounding ( ) are required syntax here,
// when a declarator is not used
({ favoriteColor: fave } = obj2);
console.log(fave); // blue
