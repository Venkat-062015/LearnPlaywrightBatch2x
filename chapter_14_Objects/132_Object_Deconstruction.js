const user = { name1: "John", age: 30, city: "NYC" };

//Basic destructuring
const { name1, age } = user; // Here just we are taking out
console.log(name1);
console.log(age);

// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge)


//Default Values
const { country = "USA" } = user;
console.log(country);
console.log(user);
//Nested Objects
const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"

        }
    }
};

const { user: { address: { city } } } = data;
console.log(user);
console.log(data.user.address.city);
console.log(data.user.name);