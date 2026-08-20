interface HasId {
    id: number
}

const findById = <T extends HasId> (items: T[], id:number) => {
    const result = items.find(item => item.id === id );
    return result;
}

console.log(findById([{ id: 1, name: "A" }, { id: 2, name: "B" }],2));
// console.log(findById([{ name: "A" }, { name: "B" }], 2)); 
// // this input won't work because it has missing property id.
