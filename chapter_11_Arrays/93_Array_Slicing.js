// Slicing and Combining
// slice(start, end)- returns new array, deos not mutate actual->(start,end-1). Index =0
//if we don't give end, it will automatically take from start to end.

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(1, 3));  // (start, end-1)
// console.log(arr.slice(1))

// console.log(arr.slice(2, 4));
// console.log(arr.slice(2, 5))
// console.log(arr.slice(2));

// // starts from backward direction i.e. from -1
// console.log(arr.slice(-2))  // 4,5

// console.log(arr.slice(0));

// let arr = [10, 20, 30, 40, 50];
// let s = arr.slice(1, 4);    // [20,30,40]
// console.log(s);
// console.log(arr);

let arr = [10, 20, 30, 40, 50];
let removed = arr.splice(1, 2);    // remove 2 elements from index 1
console.log(removed);
console.log(arr);