// JavaScript Identifier Rules Examples

// 1. Must begin with a letter, $ or _
let myVar = 1;
let $dollar = 2;
let _underscore = 3;

// 2. Cannot start with a digit
// let 1stUser = 4; // invalid
let user1 = 4; // valid because digit is not first

// 3. Can contain letters, digits, $ and _
let my$Var_2 = 5;
let account123 = 6;
let $total_amount = 7;
let _id_42 = 8;

// 4. Case-sensitive
let Name = "Venkat";
let name = "venkat";

// 5. No spaces allowed
// let venkat rao = "Hello"; // invalid
let venkat_rao = "Hello"; // valid

// 6. Cannot use reserved keywords
// let let = 9;       // invalid
// let function = 10; // invalid
let letVariable = 11;
let functionName = 12;

console.log(myVar, $dollar, _underscore, user1, my$Var_2, account123, $total_amount, _id_42, Name, name, venkat_rao, letVariable, functionName);