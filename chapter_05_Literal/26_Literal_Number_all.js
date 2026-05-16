// 26_Literal_Number_all.js
// All number types and literals supported in JavaScript

// JavaScript has one main number type: "number" (64-bit floating-point IEEE 754)
// But supports various number literals and special values

// 1. Decimal integers
let decimalInt = 42;
console.log('Decimal integer:', decimalInt, 'Type:', typeof decimalInt);

// 2. Binary literals (ES6+)
let binaryInt = 0b1010; // 10 in decimal
console.log('Binary literal:', binaryInt, 'Type:', typeof binaryInt);

// 3. Octal literals
let octalInt = 0o755; // 493 in decimal
console.log('Octal literal:', octalInt, 'Type:', typeof octalInt);

// 4. Hexadecimal literals
let hexInt = 0xFF; // 255 in decimal
console.log('Hexadecimal literal:', hexInt, 'Type:', typeof hexInt);

// 5. Floating-point numbers
let floatNum = 3.14159;
console.log('Floating-point:', floatNum, 'Type:', typeof floatNum);

// 6. Scientific notation
let scientific = 1.23e-4; // 0.000123
console.log('Scientific notation:', scientific, 'Type:', typeof scientific);

// 7. Special values
let infinity = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN;

console.log('Infinity:', infinity, 'Type:', typeof infinity);
console.log('-Infinity:', negInfinity, 'Type:', typeof negInfinity);
console.log('NaN:', notANumber, 'Type:', typeof notANumber);

// 8. BigInt (ES2020+) - for large integers beyond Number.MAX_SAFE_INTEGER
let bigInt = 123456789012345678901234567890n;
console.log('BigInt:', bigInt, 'Type:', typeof bigInt);

// Note: BigInt cannot be mixed with regular numbers in operations
// let mixed = 42n + 1; // Error: cannot mix BigInt and other types

// 9. Number methods and properties
console.log('Number.MAX_VALUE:', Number.MAX_VALUE);
console.log('Number.MIN_VALUE:', Number.MIN_VALUE);
console.log('Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);
console.log('Number.MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER);

// Summary:
// - All number literals (except BigInt) are of type "number"
// - BigInt is a separate type for arbitrary-precision integers
// - Special values like Infinity, -Infinity, NaN are part of the number type