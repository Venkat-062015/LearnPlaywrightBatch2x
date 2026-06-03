//Higher-Order Functions
// Afunction that takes a function as an argument or returns a function


function runWithLogin(testFn, testName) {
    console.log(`Starting: ${testName}`);
    let result = testFn();
    console.log(`Finished: ${testName} -> ${result}`);
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFailed() {
    return "fail";
}

runWithLogin(loginTest, "Login Test");
runWithLogin(loginTestFailed, "Dashboard Failed Test");