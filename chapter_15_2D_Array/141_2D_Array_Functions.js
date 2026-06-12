let scores = [
    [85, 90, 78],  // Student 0, 253
    [60, 45, 70],  // Student 1, 175
    [95, 88, 92]   // Student 2, 275
];


let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSums);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth Suite
    ["search-pass", "filter-fail", "sort-pass"],     // Search Suite
    ["checkout-fail", "payment-fail", "confirm-pass"]  // Payment Suite
];

// I want all the test cases which has fail in it.
for (let i = 0; i < suiteResults.length; i++) {
    for (j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }

    }
}