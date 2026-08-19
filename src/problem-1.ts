const val: unknown = `Hello TypeScript`
const valLength = (val as string).length;
const valLength2 = (<string>val).length;

// console.log(val);
console.log(valLength);
console.log(valLength2);
