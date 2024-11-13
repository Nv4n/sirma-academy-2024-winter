//@ts-check

//07 - Partial Application with Closures

/**
 *
 * @param {number} add
 * @returns {(num1,num2,num3)=>number}
 */
function partialSum(add) {
    /**
     * @type {(num1,num2,num3)=>number}
     */
    return (num1, num2, num3) => {
        return num1 + num2 + num3 + add;
    };
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11
