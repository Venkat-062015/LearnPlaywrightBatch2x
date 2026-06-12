console.log("Test1: started");

setTimeout(function () {
    console.log("Test2: API response received");

}, 2000);

console.log("Test3:moving to next test");

// why does Test3 prints before Test2?
// because of Aynchronous call back.