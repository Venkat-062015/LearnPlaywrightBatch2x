// Arrow Function (ES6)

const greet = function (name1) {
    return "Hi " + name1;
}

let r = greet("Venkat");
console.log(r);


//same above function in the form of Arrow function
const greet2 = (name1) => "Hi " + name1;
let r2 = greet2("Venkat");
console.log(r2);

// Tf you want to make a normal function to arrow function.
// Need to Remove the keyword function,
// remove the keyword return,remove the curly braces, and  use =>

// If we do not have return type, we are not able to use Arrow function.


const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("Rao");