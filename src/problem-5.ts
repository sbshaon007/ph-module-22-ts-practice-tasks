const getLastElement = <T>(arr: T[]): T | undefined => {
    const lastElement = arr[arr.length - 1];
    return lastElement;
}

console.log(getLastElement([10, 20, 30]));
console.log(getLastElement(["a", "b", "c"]));
