// define function signature
let getData : (id:number, orderBy: string, limit?: number) => object;

getData = (id:number, orderBy: string, pagiLimit?: number):object => {
    return {'name': 'Razu'};
};

const printData = (str:string):void => {
    console.log(str);
}

console.log(getData(3, 'name',20));
console.log(getData(3, 'name'));
printData('This is test msg');