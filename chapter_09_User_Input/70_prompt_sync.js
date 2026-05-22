// we are never going to use readline in Automation.
// instead of this, there is another library called prompt sync
//  we use prompt sync this is also very rarely used.

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

if (num % 2 == 0) {
    console.log(num + "is Even");
} else {
    console.log(num + "is Odd");
}


// This one also we are not going to use in Automation.
// this will give lot of errors

// we will use userinput using playwright.