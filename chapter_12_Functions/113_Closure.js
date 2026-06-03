function outer() {
    let message = "hello";
    console.log("Outer Called!");
    function inner() {
        console.log(message);
    }
    return inner;
}

let fn_inner = outer();
fn_inner();

// inner(); // Reference error: inner is not defined