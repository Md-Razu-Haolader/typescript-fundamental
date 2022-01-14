"use strict";
// string
let address;
address = 'Lalbag';
// number
let age;
// object
let myInfo;
myInfo = {
    name: 'Razu',
    age: 31,
    address: 'Dhaka'
};
let obj;
obj = {
    productname: 'Shirt',
    sku: 2
};
// array
let testArray;
testArray = ['a', 'b', 'c'];
// testArray = ['a', 'b', 2]; // show error
let anotherAarr;
anotherAarr = [3, 'b', 'd'];
// mixed
let mixedArr;
// mixedArr = ['a',6, true]; // not possible for bool type
mixedArr = ['a', 6];
let obj1;
obj1 = {
    product: 'test',
    status: 'Yes'
};
obj1 = {
    product: 3,
    status: true
};
let obj2;
obj2 = {
    address: 'Dhaka'
};
console.log(myInfo, testArray, anotherAarr, mixedArr, obj, obj1, obj2);
