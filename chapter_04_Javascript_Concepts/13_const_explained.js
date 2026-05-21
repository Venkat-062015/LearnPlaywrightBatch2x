const BASE_URL = "https://app.thetestingacademy.com"
// const BASE_URL = "https://app.thetestingacademy.com" //--redeclaration not allowed
// BASE_URL = "https://staging.thetestingacademy.com"; //--reassignment not allowed
// TypeError: Assignment to constant variable.


let name = "pending";
name = "done";

{
    let name = "venkat"
    console.log(name);
}

function say() {
    let name = "Venkat";
}

console.log(name);
say();
say();


