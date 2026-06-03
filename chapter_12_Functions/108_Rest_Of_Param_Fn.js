//Rest of the paramaeters
// ...results means we can pass any no.of parameters,its a array of objects, 
// ...results this will be an array automatically,
// this should be the last one, it cannot be the first parameter
//it is also called as spread, ideally we should have last one as a spread

function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results)
}

logResult('Login Test', 1, 2, 3);
logResult("Reg Test", "Hello", "Venkat");