//@ts-check

//03 - Using bind for Partial Application

function multiply(a, b) {
    return a * b;
}

const multiplyByFive = multiply.bind(null, 5);

console.log(multiplyByFive(3)); // Output: 15
