// Objects
//are Key and Value pairs

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Venkat" };
let student3 = { name: "Venkat", age: 80, phone: 987654320 };

// Key will not be in the double quotes
// if the key are in double quotes, then it is actually JSON.
// below key in double quotes is actually JSON

let JSON_student4 = { "name": "Venkat", "age": 87, "phone": 9987654320 };

let a = { status: "pass" };
// console.log(a.status);
// console.log(a["status"]);

// let a1 = { status: "pass" };
// console.log(a1.status);

//Objects are always Copy by Reference
let b = a;
b.status = "fail";
console.log(a.status);
console.log(b.status);

if (b === a) {
    console.log("true");
} else {
    console.log("false");
}