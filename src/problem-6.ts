interface Container<T> {
    item: T
}
const numberContainer: Container<number> = { item: 100 }
const stringContainer: Container<string> = { item: `Books` }

console.log(numberContainer);
console.log(stringContainer);
