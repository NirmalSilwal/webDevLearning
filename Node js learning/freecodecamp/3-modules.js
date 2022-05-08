// modules

const names = require('./4-firstModule'); // always start with ./
const sayHi = require('./5-utils');

// from alternative flavor
const data = require('./6-alternativeFlavor');

console.log(data);

console.log(names);
console.log(sayHi);

sayHi("nirmal");
sayHi(names.john);
sayHi(names.peter);