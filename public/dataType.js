"use strict";
// string
let address;
address = 'Dhaka';
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
let anotherArray;
anotherArray = [3, 'b', 'd'];
let multiTypeArr;
multiTypeArr = [3, 'a'];
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
;
let person = {
    name: 'Razu',
    age: 31,
    description: 'This is test'
};
;
let men = {
    description: { 'canEat': true }
};
// enum
var myList;
(function (myList) {
    myList[myList["CONFIG"] = 0] = "CONFIG";
    myList[myList["DBCON"] = 1] = "DBCON";
})(myList || (myList = {}));
// tuples
let myTupleList;
myTupleList = ['test', 7, true];
console.log(myInfo, testArray, anotherArray, multiTypeArr, mixedArr, obj, obj1, obj2, person, men, myList);
