var a = 10;  // Global Scope

// var is function scoped 

console.log(a);


function printHello() {
    console.log("Hello The TestingAcademy!");
    var a = 20;  // Local Scope
    console.log(a);
}

printHello();


var a = 50;

// var is flipper, dual faced, not trustworthy