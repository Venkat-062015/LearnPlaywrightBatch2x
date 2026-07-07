interface calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;

    //  multiply: (a: number, b: number) => number; // Alternative syntax

}

const noObject = {
    id: 1
}

const calc: calculator = {

    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b

}

console.log(calc);