let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

// How many test cases we have executed?
// How many test cases are passed?
// What is the status code that we have got for the fail?

//Iterate the elements
for (let i = 0; i < testMatrix.length; i++) {
    let data = ""
    for (j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j]);
    }
    console.log();
}

for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log();
}

// for each
testMatrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " ")
    );
    console.log();
});