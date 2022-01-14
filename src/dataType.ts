// string
let address:string;
address = 'Dhaka';

// number
let age:number;

// object
let myInfo:{
    name: string,
    age: number,
    address: string
}; 
myInfo = {
    name: 'Razu',
    age: 31,
    address: 'Dhaka'
};

let obj:{
    productname:string,
    sku:any
};

obj = {
    productname: 'Shirt',
    sku: 2
};

// array
let testArray: string[];
testArray = ['a', 'b', 'c'];
// testArray = ['a', 'b', 2]; // show error

let anotherArray: any[];
anotherArray = [3,'b','d'];

let multiTypeArr:(number|string)[];
multiTypeArr = [3,'a'];

type stringOrNum = string|number; // type alias

// mixed
let mixedArr: (stringOrNum)[];
// mixedArr = ['a',6, true]; // not possible for bool type
mixedArr = ['a',6];

let obj1:{
    product: stringOrNum
    status: string|boolean
};

obj1 = {
    product: 'test',
    status: 'Yes'
};

obj1 = {
    product: 3,
    status: true
};

let obj2: {
    info?:string,
    address:string
};

obj2 = {
    address:'Dhaka'
}
// examples of generic interface
interface person<T>{
    name:string,
    age: number,
    description: T
};
let person: person<string> = {
    name: 'Razu',
    age: 31,
    description: 'This is test'
};

interface human<Type extends object>{
    description: Type
};

let men: human<object> = {
    description: {'canEat':true}
};

// enum
enum myList {CONFIG, DBCON}

// tuples
let myTupleList:[string, number, boolean];
myTupleList = ['test', 7, true];
 
console.log(myInfo, testArray, anotherArray, multiTypeArr, mixedArr, obj, obj1,obj2, person, men, myList);