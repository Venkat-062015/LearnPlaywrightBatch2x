//Searching and Checking

let url = "https://staging.vwo.com/api/login?retry=true";

//includes
// console.log(url.includes("staging"));
// console.log(url.includes("production"));

// //startswith /endswith
// url.startsWith("https"); // true
// console.log(url.startsWith("https"));

url.startsWith("http"); // flase
console.log(url.startsWith("http"));


url.endsWith("true"); // true
console.log(url.endsWith("true"));


// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf('nowhere'));
console.log(url.indexOf('x'));


//Searching
console.log(url.search(/login/));  // regex
console.log(url.search(/vwo/));

// /regex/ -- Regular Expression- These are nothing
// but a patterns that you can find within the strings automatically

