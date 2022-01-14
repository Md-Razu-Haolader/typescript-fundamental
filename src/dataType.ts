// string
let address:string;
address = 'Lalbag';

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

let anotherAarr: any[];
anotherAarr = [3,'b','d'];

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
console.log(myInfo, testArray, anotherAarr, mixedArr, obj, obj1,obj2);