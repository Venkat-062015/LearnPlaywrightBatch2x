let a = 10; //Global scope
console.log(a);
//Definition of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    let a = 20; //local scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); // 30
    }
    console.log("F -->", a);
}

console.log("G -->", a)

printHello();