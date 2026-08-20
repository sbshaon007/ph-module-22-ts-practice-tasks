interface Product {
    title: string, 
    price: number, 
    inStock?: boolean
}

const productPriceLogger = (product:Product):number => {
    const productPrice = product.price;
    return productPrice;
}

console.log(productPriceLogger( { title: "Laptop", price: 55000 }));
console.log(productPriceLogger( { title: "Mouse", price: 500, inStock: true }));
