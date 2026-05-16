// 23_null_undeifned.js
// Difference between null and undefined in JavaScript

// 1. undefined: variable is declared but not assigned any value.
let x;
console.log('x:', x); // undefined
console.log('typeof x:', typeof x); // "undefined"

// undefined also happens when a function does not return a value:
function noReturn() { }
console.log('noReturn():', noReturn()); // undefined

// 2. null: a value explicitly assigned to mean "no value" or "empty".
let y = null;
console.log('y:', y); // null
console.log('typeof y:', typeof y); // "object" (this is a JavaScript quirk)

// 3. Intentional vs unintentional absence of value
let userResponse = null; // intentionally empty
let missingValue; // unintentionally empty / not assigned

console.log('userResponse:', userResponse); // null
console.log('missingValue:', missingValue); // undefined

// 4. Comparison
console.log('null == undefined:', null == undefined); // true (loose equality)
console.log('null === undefined:', null === undefined); // false (strict equality)

// 5. Common patterns
const config = {
    option: null,
};

console.log('config.option:', config.option); // null means intentionally set as empty
console.log('config.missing:', config.missing); // undefined means property does not exist

// Summary:
// - undefined means a variable exists but has not been given a value yet.
// - null means the value is deliberately set to "empty" or "no value".
// - Use === when checking strictly, because null and undefined are not the same type.
