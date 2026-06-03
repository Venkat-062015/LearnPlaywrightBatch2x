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

function add(a, b) {
    return a + b;
}

const add1 = (a, b) => a + b;
console.log(add1(3, 4));

function say() {
    console.log("Hi");
}

const say1 = () => console.log("Hi");
console.log(say1())
// say1();

const say2 = () => "Hi"
// console.log(say2())
say2();

const greet3 = name => {
    const message = "Hi" + name;
    return message;    //If we have more than 1 line in arrow function then we should use return.
}