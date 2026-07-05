// when Step 2 depends on Step 1's result, you must run them sequentially.

//Step 1 - Step 2


function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 Ok")
        }, 2000);
    })
}

// This function looks like a normal function, but it resturns a Promise.
// it means it is actuallu  a async function.

async function seqTest() {

    console.log("Starting the Test");
    let start = Date.now();

    let r1 = await apiCall("Login");
    console.log(r1);

    let r2 = await apiCall("Dashboard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Time: ~" + (Date.now() - start) + "ms");

}

seqTest();