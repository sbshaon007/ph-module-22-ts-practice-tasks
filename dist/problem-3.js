"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productPriceLogger = (product) => {
    const productPrice = product.price;
    return productPrice;
};
console.log(productPriceLogger({ title: "Laptop", price: 55000 }));
console.log(productPriceLogger({ title: "Mouse", price: 500, inStock: true }));
//# sourceMappingURL=problem-3.js.map