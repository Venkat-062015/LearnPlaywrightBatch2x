// let checkAuth = Promise.resolve("Auth Ok");
// let checkDB = Promise.resolve("DB Ok");
// let checkCache = Promise.resolve("Cache Ok");

// Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
//     console.log("All the checks are fine!");
// })


// Promise.all([    // all means if anyone is failing, catch will be executed.       
// all should finish does not matter when they are going to finish

//     Promise.resolve("Ok"),
//     Promise.reject("DB Down"),
//     Promise.resolve("Ok")
// ]).then(function (r) {
//     console.log(r);
// }).catch(function (error) {
//     console.log("Failed:", error);
// })

Promise.allSettled([                // allSettled means does not matter pass or failed
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C Passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
})

// This is like a Test report-
// we want results for All tests,
// not just stop at the first failure