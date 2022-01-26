interface AnyObject { [k: string]: any }

interface AnyArrayOfObject { 
    [index: string|number]:{[k: string]: any}
}

let testData: AnyObject = [
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
let testData1: AnyArrayOfObject = {
    1:{
        name: 'Razu',
        roll: 77,
    },
    'second-item':{
        name: 'Asif',
        roll: 75,
    }
};

console.log(testData);
console.log(testData1);