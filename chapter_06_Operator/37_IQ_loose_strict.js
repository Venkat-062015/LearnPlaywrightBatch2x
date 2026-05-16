console.log(0 == "");
console.log(0 == "0");
console.log("" == "0");  //  transitivity broken!

console.log(0 == false);
console.log(null == 0);
console.log(null == undefined);
console.log(null === undefined);


console.log(null >= 0);  //  null == 0 or null > 0
console.log(null === 0); 