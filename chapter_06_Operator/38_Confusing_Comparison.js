// Confusing Comparison examples for == and ===

// == is loose equality: it performs type conversion when needed
// === is strict equality: it compares type and value without conversion

console.log("1" == 1);          // true  (string converted to number)
console.log("1" === 1);         // false (different types)

console.log(0 == false);          // true  (false converted to 0)
console.log(0 === false);         // false (number vs boolean)

console.log("" == 0);           // true  (empty string converted to 0)
console.log("" === 0);          // false (string vs number)

console.log(null == undefined);   // true  (special loose equality rule)
console.log(null === undefined);  // false (different types)

console.log("\n" == 0);        // true  (whitespace string converted to 0)
console.log("\n" === 0);       // false (string vs number)

console.log("0" == false);      // true  ("0" converted to number 0)
console.log("0" === false);     // false (string vs boolean)

console.log("" == "0");       // false (both strings, direct comparison)
console.log(0 == "0");          // true  (string converted to number)
console.log(0 == "");           // true  (empty string converted to number)

// Why this can feel broken:
// 0 == "" and 0 == "0" are both true, but "" == "0" is false.
// With ==, the comparison result depends on whether types differ and how values are coerced.

// Best practice:
// - Use === when you want exact equality
// - Use == only when you intentionally want type coercion
// - Prefer explicit conversion if you need cross-type comparisons
