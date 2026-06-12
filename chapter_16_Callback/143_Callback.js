function print() {
    console.log("Normal Function is called");

}

function placeOrder(ClipboardItem, callback) { // here callback is just avariable name,                                 
    console.log("Hi, your order is placed");
    callback();
}


//Calling the callback function

//First way
placeOrder("Pizza", print);


//Second  way Anonymous function
placeOrder("Burger", function () {
    console.log("Anonymous function, I am also a function without name!");

});

// Third way using Arrow function
placeOrder("Momos", () => {
    console.log("Arrow function, I am also a function without name!");
});