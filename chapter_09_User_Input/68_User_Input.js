let num = prompt("Enter a number:");
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + "is Even");
} else {
    console.log(num + "is Odd");

}

// Here prompt does not work prompt works only inside Javascript engine not in Nodejs engine.
// prompt is not migrated in Nodejs
// It wiill  run only  inside your browser.