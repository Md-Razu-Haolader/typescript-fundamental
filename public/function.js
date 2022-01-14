"use strict";
// define function signature
let getData;
getData = (id, orderBy, pagiLimit) => {
    return { 'name': 'Razu' };
};
const printData = (str) => {
    console.log(str);
};
console.log(getData(3, 'name', 20));
console.log(getData(3, 'name'));
printData('This is test msg');
