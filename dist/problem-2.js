"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let value = "100";
let finalValue = Number(value) + 10;
let doubleAssertion = value + 10;
// Risky double assertion
// Double assertion is risky because it doesn't give any error during the compile runtime.
// But the value remains `string` in the runtime, doesn't become a number.
// so any number operation on it gives wrong output and bugs.
console.log(finalValue);
console.log(doubleAssertion);
//# sourceMappingURL=problem-2.js.map