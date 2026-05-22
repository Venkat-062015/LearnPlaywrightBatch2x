// ### Question 2 — Student Grade Calculator

// Problem: Take marks (0–100) and print the grade based on these rules:

// - 90 and above → A

// - 80–89 → B

// - 70–79 → C

// - 60–69 → D

// - Below 60 → Fail
let marks = 86;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80 && marks <= 89) {
    console.log("Grade: B");
} else if (marks >= 70 && marks <= 79) {
    console.log("CGrade: C");
} else if (marks >= 60 && marks <= 69) {
    console.log("Grade: D");
} else {
    console.log("Fail");

}