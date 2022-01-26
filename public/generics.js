"use strict";
let testData = [
    {
        name: 'Razu',
        roll: 77,
    },
    {
        name: 'Robi',
        roll: 67,
    }
];
// let testData1: AnyObject = {  // this also accepted
let testData1 = {
    1: {
        name: 'Razu',
        roll: 77,
    },
    'second-item': {
        name: 'Asif',
        roll: 75,
    }
};
console.log(testData);
console.log(testData1);
