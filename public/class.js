class Product {
    constructor(name, sku, price) {
        this.name = name;
        this.sku = sku;
        this.price = price;
        this.description = '';
    }
    getProductInfo() {
        return { name: this.name, sku: this.sku, price: this.price, description: this.description };
    }
}
let productObj = new Product('Razu', 'ab-677', 250);
console.log(productObj.getProductInfo());
export {};
