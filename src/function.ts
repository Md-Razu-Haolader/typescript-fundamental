// define function signature
let getData : (id:number, orderBy: string, limit: number) => object;

getData = (id:number, orderBy: string, pagiLimit: number) => {
    return {'name': 'Razu'};
}

console.log(getData(3, 'name',20));