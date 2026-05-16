// number == string
// console.log(42 == "42");  // == -> loose comparison
// console.log(42 === "42"); // datatype and converted value
// console, log(42 == "45"); // value is different


// console.log(5 === 5);
// console.log(5 === "5");

// console.log(5 == 5);
// console.log(5 == "5");

// console.log(0 == ""); // ? "" == converted to 0- checked by loose comparison
// console.log(0 === "");


console.log(true == 1);
console.log(false == 0);
console.log(true == "1");
console.log(true == 2);

console.log(5 != "5");// false, 5=int, "5"-string, both of them are not equal?- loose couple
console.log(5 !== "5");// true ( value, datatype)
console.log(5 !==="5"); // This doesn't exist.

// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type