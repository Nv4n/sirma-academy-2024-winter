//@ts-check

// 09 - Fibonacci

function getFibonacci() {
    let prev = 0;
    let curr = 1;
    return () => {
        let buffer = curr;
        curr += prev;
        prev = buffer;
        return buffer;
    };
}

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21
