const user = {
    firstName: "Venkat",
    lastName: "eswararao",

    get fullName() {
        return this.firstName + this.lastName;
    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");

    }
}

//Objects- JS
// Class and Object
// this it means current value in the object 

console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName);

// The above one is the older format of
// creating class and object using objects before introducing class and object concept in Javascript

// This we are not going to use in Playwright.

// Nowadays we are using new format of creating proper class and object

// class User {
//      firstname,
//      lastname,
//     fullName() {

//     }
// }