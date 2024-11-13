//@ts-check

//06 - Curry a Function

// function curry(func) {
//     return function curried(...nums) {
//         if (nums.length >= func.length) {
//             return func(...nums);
//         } else {
//             return function (...nextNums) {
//                 return curried(...nums, ...nextNums);
//             };
//         }
//     };
// }

// const multiply = curry(function multiply(a, b, c) {
//     return a * b * c;
// });

function multiply(...nums) {
    return function multiplier(...nextNums) {
        if (nextNums.length === 0) {
            return nums.reduce((acc, curr) => acc * curr, 1);
        }
        return multiply(...nums, ...nextNums);
    };
}

console.log(multiply(2)(3)(4)()); // Output: 24
