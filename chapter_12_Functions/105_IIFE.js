(function () {
    console.log("Hi");
})();


(function () {
    //playwright code to run the test
})();

// we can give name to IIFE function, but we should not.
// Most of the IIFE functions do not have name.

(function () {
    console.log("Staging");
})();

// we can Arrow function also as an IIFE
(() => {
    console.log("Setup complete")
})

// Arrow functions and IIFEs are very difficult to debug 