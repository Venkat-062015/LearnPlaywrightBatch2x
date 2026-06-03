function add(a, b, c) {
    return a + b + c;
}
let num = [1, 2, 3]
add(...num);

let reponseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
hasError(...reponseCodes)
// const r = hasError(...reponseCodes);
// console.log(r);