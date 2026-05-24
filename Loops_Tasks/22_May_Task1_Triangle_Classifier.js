// Triangle Classifier:

// Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, determine
// if the triangle is equilateral (all sides are equal), 
// isosceles (exactly two sides are equal), or scalene (no sides are equal). 
// Use an if-else statement to classify the triangle.

let side_a = 20;
let side_b = 30;
let side_c = 40;
if (side_a === side_b && side_b === side_c) {
    console.log("Equilateral Triangle");
} else if (side_a === side_b || side_a === side_c) {
    console.log("Isoceles Triangle");
} else {
    console.log("SCalene Triangle");
}