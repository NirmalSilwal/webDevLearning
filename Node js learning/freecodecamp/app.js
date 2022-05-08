// modules

const names = require('./4-firstModule'); // always start with ./
const sayHi = require('./5-utils');

console.log(names);
console.log(sayHi);

sayHi("nirmal");
sayHi(names.john);
sayHi(names.peter);