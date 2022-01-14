import { productInterface } from './interfaces/productInterface';
 class Product implements productInterface{
    description: string = '';
    
    constructor(
        public name: string,
        private sku: string | number,
        readonly price: number
    ){}

    public getProductInfo():object{
        return {name: this.name, sku: this.sku, price: this.price, description:this.description}
    }
}

let productObj = new Product('Razu', 'ab-677', 250);
console.log(productObj.getProductInfo());