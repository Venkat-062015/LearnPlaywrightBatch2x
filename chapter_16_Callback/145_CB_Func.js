function cafe(item, callWhenTableisReady) {
    console.log("Finding....1");
    console.log("Finding....2");
    console.log("Finding....3");
    console.log(item)
    callWhenTableisReady();
}

function callWhenTableisReady() {
    console.log("calling 987654320");
}

cafe("Burger", callWhenTableisReady);

cafe("Pizza", function () {
    console.log("calling 876543210")
})

cafe("Momos", () => {    // Playwright uses this way of calling the Callback
    console.log("calling 76568910")
})
