// Modules
//create a simple fuction that displays the name of the user once it it passed
const names = require('./4-names');
const sayCheese = require('./5-utils');
const people = require('./6-alternative-flavors');
require('./7-mindgrenade');

console.log(names);

sayCheese('John');
sayCheese(names.john);
//sayCheese(names.peter);

console.log(people);
