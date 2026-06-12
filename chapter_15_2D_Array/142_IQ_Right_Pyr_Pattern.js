// n = 3
//*
//**
//*** 
// let n = 5;
// for (let i = 0; i < n; i++) {
//     let row = " ";
//     for (j = 0; j <= i; j++) {
//         row += "*"
//     }
//     console.log(row.trim());
// }

let n = 5;
for (let i = 0; i < n; i++) {
    let row = " ";
    for (j = 0; j < n - i; j++) {
        row += "*"
    }
    console.log(row.trim());
}