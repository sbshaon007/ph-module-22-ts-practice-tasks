"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findById = (items, id) => {
    const result = items.find(item => item.id === id);
    return result;
};
console.log(findById([{ id: 1, name: "A" }, { id: 2, name: "B" }], 2));
// console.log(findById([{ name: "A" }, { name: "B" }], 2)); 
// // this input won't work because it has missing property id.
//# sourceMappingURL=problem-7.js.map