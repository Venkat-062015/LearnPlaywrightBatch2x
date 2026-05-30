function greetByName(name) {
    console.log("Hi", name);
}

greetByName("Venkat");
let result = greetByName("Amit");
console.log(result);

// This is like a beggar function
function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);
console.log(returnMesomething);