// Question 3 — Bug Severity Classifier

// Problem: Given a bug's impact score (1–10), classify the severity.
// 9–10 → Critical(block release)
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low
// Anything else → Invalid score

// Sample Input / Output:

// Input: 9
// Output: Severity: Critical — Block release

// Input: 5
// Output: Severity: Medium

let impactScore = 8;

switch (impactScore) {
    case 10:
    case 9:
        console.log("Severity : Critical - Block release");
        break;
    case 8:
    case 7:
        console.log("Severity : High");
        break;
    case 6:
    case 5:
    case 4:
        console.log("Severity : Medium");
        break;
    case 3:
    case 2:
    case 1:
        console.log("Severity : Low");
    default:
        console.log("Invalid score");

}