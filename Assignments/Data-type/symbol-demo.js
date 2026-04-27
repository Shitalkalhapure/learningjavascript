 // 1. Create two Symbols with the same description
let sym1 = Symbol("testId");
let sym2 = Symbol("testId");

// 2. Compare them
console.log("Are sym1 and sym2 equal?", sym1 === sym2); // false

// 3. Print typeof
console.log("Type of sym1:", typeof sym1); // symbol
console.log("Type of sym2:", typeof sym2); // symbol

// 4. Print description
console.log("sym1 description:", sym1.description); // testId
console.log("sym2 description:", sym2.description); // testId


// 5. Bonus: Use Symbols as object keys
let obj = {};

obj[sym1] = "Value from sym1";
obj[sym2] = "Value from sym2";

// They do NOT overwrite each other
console.log("\nObject values using symbols:");
console.log(obj[sym1]); // Value from sym1
console.log(obj[sym2]); // Value from sym2

console.log("\nFull object:", obj);