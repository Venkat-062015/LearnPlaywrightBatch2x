// null operator

console.log(null >= 0); // null == 0 or null > 0
console.log(null === 0)

// ?? Nullish operator  - Nullish operator is used to replace the null
// ?? is checking of a null.

// let amul = null;
// let milk_required = amul ?? "nandini milk";
// console.log(milk_required) -- output: nandini milk if amul is null

// let amul = "amul present";
// let milk_required = amul ?? "nandini milk";
// console.log(milk_required)-- // output: amul present if amul is not null

// In JavaScript , ?? is used as Nullish operator
// In the TypeScript, instead of ?? we can see ? also be used as Nullish operator.

let val = null;
val = "Which milk ? -> " + val;
console.log(val)