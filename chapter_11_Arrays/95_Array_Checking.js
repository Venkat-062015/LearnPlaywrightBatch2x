//Checking Arrays

//check if something is an array
// let result = Array.isArray([1, 2, 3]);
// console.log(result);
// let result1 = Array.isArray("a");
// console.log(result1);

// every & some

// [80, 90, 85].every(s => s > 70);  //true
// [80, 60, 85].every(s => s > 70); // false

// let arr1 = [80, 90, 85];
// console.log(arr1.every(s => s > 70));
// let arr2 = [80, 60, 85];
// console.log(arr2.every(s => s > 70));

//Playwright API
[200, 201, 202].every(statuscode => statuscode > 200);

//Some - AT LEAST  ONE must pass
[80, 60, 85].some(s => s < 70);  //true
[80, 90, 85].some(s => s < 70); //false
let arr1 = [80, 60, 85];
console.log(arr1.some(s => s < 70));
let arr2 = [80, 90, 85];
console.log(arr2.some(s => s < 70));


//  Arrow function:s => s >= 70