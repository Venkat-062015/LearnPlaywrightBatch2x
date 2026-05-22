// Node js has function called readline for userinput
// readline is little complex, we have to create an interface then open a 
// question where we will run our code -- this is complex


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    let num = Number(input);

    if (num % 2 === 0) {
        console.log(num + "is Even");
    } else {
        console.log(num + "is Odd")
    }

    rl.close();
});

// we are never going to use readline in Automation.
// instead of this, there is another library called prompt sync
//  we use prompt sync this is also very rarely used.