// Single quotes
let a = 'hello';

//Double quotes
let b = "world";

//Using Template Literal
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg);

// Multiline string  is supported using ` `
let report = `
    Test: Login
    Status: Pass
    Duration: 320ms
    `;
let report2 = `
  Test: Login
  Status: Pass
  Duration: 320ms
  ds
  das
  das
  das
  d
  asd
  asd
  a
`;

let longstory = `
I want to tell you a very long story 
where we had a lot of students, 
which we basically have a lot 
of tests and blah  blah blah blah blah blah. 
`;

//Using a String interface 
console.log(String(200)); //"200"
String(true);         //true
console.log(String(true));
String(null);        //null
console.log(String(null));
String([1, 2]);      // 1,2
console.log(String([1, 2]));

// string -- datattype
//String -- interface(which will help you to create new strings)