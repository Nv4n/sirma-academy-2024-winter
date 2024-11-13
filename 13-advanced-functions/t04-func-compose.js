//@ts-check

//04 - Function Composition

/**
 *
 * @param {number} num
 * @returns
 */
function double(num) {
    return num * 2;
}

/**
 *
 * @param {number} num
 * @returns
 */
function square(num) {
    return num * num;
}

/**
 *
 * @param  {...function(number):number} funcs
 * @returns
 */
const compose = (...funcs) => {
    return (input) => {
        return funcs.reduce((acc, fn) => {
            return fn(acc);
        }, input);
    };
};

const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(3)); // Output: 36
