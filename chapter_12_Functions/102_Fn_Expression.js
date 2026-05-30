const greet = function (name) {
    return `Hello, ${name}`;
}

let r = greet("Venkat");
console.log(r);


//Type 4 normal Function
function greet1(name1) {
    return `Hello ${name1}`;
}

// Function as Expression  -- same above function can be written like below
const greet2 = function (name1) {
    return `Hello ${name1}`;
}

console.log(greet1("Rao"));
console.log(greet2("Rao"));
