//@ts-check

/**
 * 01 - Counting Dementor
 * @param {number} initialCount initial count
 * @param {number} increase increase of the count
 * @param {number} hours number of hours
 * @returns {number} Total Dementors
 */
function getDementorCount(initialCount, increase, hours) {
    let currDementors = initialCount;
    let totalDementors = 0;
    for (let ind = 0; ind < hours; ind++) {
        if (currDementors > 0) {
            totalDementors += currDementors;
        }
        currDementors += increase;
    }
    return totalDementors;
}

console.log(getDementorCount(5, 2, 3)); //expected: 21
console.log(getDementorCount(7, 1, 2)); //expected: 15
console.log(getDementorCount(10, -1, 1)); //expected: 10
console.log(getDementorCount(8, -2, 3)); //expected: 18
