// 29_Backtick_single_double.js
// Difference between backtick, single quote, and double quote strings in JavaScript

// 1. Single quotes and double quotes are mostly the same:
let single = 'Hello';
let double = "Hello";
console.log(single, double);

// 2. Backticks (template literals) allow interpolation and multi-line text:
let name = 'Alice';
let backtick = `Hello, ${name}!`;
console.log(backtick);

// Short explanation:
// - Single and double quotes create plain strings.
// - Backticks let you embed expressions and write multi-line strings easily.
