// let - Block Scoped
let a = 10;

let retrycount = 0;
retrycount = retrycount + 1;
retrycount = retrycount + 1;
console.log("Retry attempt:", retrycount);

//let retrycount = 5; SyntaxError: Identifier 'retrycount' has already been declared

// SyntaxError:redeclaration not allowed

let testStatus = "pending";

if (testStatus == "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);  //1200
}

console.log(executionTime);  //ReferenceError: executionTime is not defined

//Block scoped
// {}
// if {}
// function name(){}

// let = loyal
// var = variable /traitor