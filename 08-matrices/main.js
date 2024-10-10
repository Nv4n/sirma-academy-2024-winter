//@ts-check

/**
 * 01 - Compare Matrices
 * @param {number[][]} lmatrix
 * @param {number[][]} rmatrix
 */
function areEqual(lmatrix, rmatrix) {
    if (lmatrix.length !== rmatrix.length) {
        console.log("not equal");
        return;
    }
    for (let row = 0; row < lmatrix.length; row++) {
        if (lmatrix[row].length !== rmatrix[row].length) {
            console.log("not equal");
            return;
        }
        for (let col = 0; col < lmatrix[row].length; col++) {
            if (lmatrix[row][col] !== rmatrix[row][col]) {
                console.log("not equal");
                return;
            }
        }
    }
    console.log("equal");
}

// areEqual(
//     [
//         [1, 2, 3],
//         [2, 1, 3],
//     ],
//     [
//         [1, 2, 3],
//         [2, 1, 3],
//     ]
// );
// areEqual(
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//     ],
//     [
//         [1, 3],
//         [4, 5],
//     ]
// );

/**
 * 02 - Matrix Addition
 * @param {number[][]} lmatrix
 * @param {number[][]} rmatrix
 */
function sumMatrices(lmatrix, rmatrix) {
    /**@type {number[][]} */
    let result = [];

    for (let row = 0; row < lmatrix.length; row++) {
        result.push([]);
        for (let col = 0; col < lmatrix.length; col++) {
            result[row].push(lmatrix[row][col] + rmatrix[row][col]);
        }
    }
    printMatrix(result);
}

/**
 * Matrix printer
 * @param {any[][]} matrix
 */
function printMatrix(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(" "));
    }
}

// sumMatrices(
//     [
//         [1, 2],
//         [3, 4],
//     ],
//     [
//         [2, 2],
//         [2, 2],
//     ]
// );
// sumMatrices(
//     [
//         [1, 2, 3],
//         [4, 3, 1],
//     ],
//     [
//         [1, 2, 3],
//         [4, 2, 2],
//     ]
// );

/**
 * 03 - Intersection of Two Matrices
 * @param {string[]} lmatrix
 * @param {string[]} rmatrix
 */
function intersect(lmatrix, rmatrix) {
    /** @type {string[][]} */
    let result = [];
    for (let row = 0; row < lmatrix.length; row++) {
        let lsymbols = lmatrix[row].split(" ");
        let rsymbols = rmatrix[row].split(" ");
        result.push([]);
        for (let col = 0; col < lsymbols.length; col++) {
            if (lsymbols[col] === rsymbols[col]) {
                result[row].push(lsymbols[col]);
            } else {
                result[row].push("*");
            }
        }
    }

    printMatrix(result);
}

// intersect(["a b c d", "a b c d", "a b c d"], ["k b c k", "a b g d", "a k c d"]);

/**
 * 04 - Sum Matrix Elements
 * @param {number[][]} matrix
 */
function sumMatrixElements(matrix) {
    console.log(`Rows: ${matrix.length}`);
    let cols = matrix[0].length;
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            sum += matrix[row][col];
        }
    }
    console.log(`Cols: ${cols}`);
    console.log(`Sum: ${sum}`);
}
sumMatrixElements([
    [7, 1, 3, 3, 2, 1],
    [1, 3, 9, 8, 5, 6],
    [4, 6, 7, 9, 1, 0],
]);


