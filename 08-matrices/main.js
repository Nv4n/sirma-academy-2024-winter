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
// sumMatrixElements([
//     [7, 1, 3, 3, 2, 1],
//     [1, 3, 9, 8, 5, 6],
//     [4, 6, 7, 9, 1, 0],
// ]);

/**
 * 05 - Maximum Sum of 2X2 Submatrix
 * @param {string[]} input
 */
function maxSumOfSubmatrix(input) {
    let matrix = input.map((el) =>
        el.split(" ").map((el) => Number.parseInt(el))
    );
    let subMatrix = [
        [0, 0],
        [0, 0],
    ];
    let subMatrixSum = Number.MIN_SAFE_INTEGER;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length - 1; col++) {
            let currSum =
                matrix[row][col] +
                matrix[row][col + 1] +
                matrix[row + 1][col] +
                matrix[row + 1][col + 1];

            if (currSum > subMatrixSum) {
                subMatrix[0][0] = matrix[row][col];
                subMatrix[0][1] = matrix[row][col + 1];
                subMatrix[1][0] = matrix[row + 1][col];
                subMatrix[1][1] = matrix[row + 1][col + 1];
                subMatrixSum = currSum;
            }
        }
    }

    console.log(subMatrixSum);
    for (let row = 0; row < subMatrix.length; row++) {
        console.log(subMatrix[row].join(" "));
    }
}

// maxSumOfSubmatrix(["7 1 3 3 2 1", "1 3 9 8 5 6", "4 6 7 9 1 0"]);
// maxSumOfSubmatrix(["10 11 12 13", "14 15 16 17"]);

/**
 * 06 - Print Diagonals of Square Matrix
 * @param {string[]} input
 */
function printDiagonals(input) {
    let matrix = input.map((row) => row.split(" "));
    let line = "";
    for (let row = 0; row < matrix.length; row++) {
        line += `${matrix[row][row]} `;
    }
    console.log(line);
    line = "";
    for (
        let row = matrix.length - 1, col = 0;
        col < matrix.length;
        row--, col++
    ) {
        line += `${matrix[row][col]} `;
    }
    console.log(line);
}
// printDiagonals(["1 2 3", "1 2 3", "1 2 3"]);
// printDiagonals(["1 2 3 2", "1 1 2 4", "1 2 1 4", "2 2 3 1"]);

/**
 * 07 - Matrix Diagonal Sum
 * @param {string[]} input
 */
function getDiagonalSum(input) {
    let matrix = input.map((row) => row.split(" ").map((col) => +col));
    let sum = 0;
    for (let row = 0, col = 0; row < matrix.length; row++, col++) {
        sum += matrix[row][row];
    }

    for (
        let row = matrix.length - 1, col = 0;
        col < matrix.length;
        row--, col++
    ) {
        sum += matrix[row][col];
    }
    console.log(sum);
}
// getDiagonalSum(["1 2 3", "4 5 6", "7 8 9"]);
// getDiagonalSum(["10 11", "14 15"]);

/**
 * 08 - Fill the Matrix
 * @param {number} size
 * @param {'A'|'B'} type
 */
function fillMatrix(size, type) {
    if (type === "A") {
        printMatrix(fillMatrixA(size));
    } else {
        printMatrix(fillMatrixB(size));
    }
    /**
     * @param {number} size
     * @returns {number[][]}
     */
    function fillMatrixA(size) {
        /** @type {number[][]} */
        let matrix = [];
        for (let row = 0; row < size; row++) {
            matrix.push([]);
        }

        for (let col = 0, value = 1; col < size; col++) {
            for (let row = 0; row < size; row++) {
                matrix[row].push(value++);
            }
        }
        return matrix;
    }

    /**
     * @param {number} size
     * @returns {number[][]}
     */
    function fillMatrixB(size) {
        /** @type {number[][]} */
        let matrix = [];
        for (let row = 0; row < size; row++) {
            matrix.push([]);
        }

        for (let col = 0, value = 1; col < size; col++) {
            if (col % 2 === 0) {
                for (let row = 0; row < size; row++) {
                    matrix[row].push(value++);
                }
            } else {
                for (let row = size - 1; row >= 0; row--) {
                    matrix[row].push(value++);
                }
            }
        }
        return matrix;
    }
}

// fillMatrix(3, "A");
// console.log("");

// fillMatrix(3, "B");

/**
 * 09 - Row Sum and Column Sum
 * @param {string[]} input
 */
function rowAndColSums(input) {
    let matrix = input.map((row) => row.split(" ").map((col) => +col));
    let rowSums = matrix.map((row) => row.reduce((sum, curr) => sum + curr, 0));
    let colSums = Array(matrix[0].length).fill(0);

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            colSums[col] += matrix[row][col];
        }
    }
    console.log(`Row sums: ${rowSums.join(", ")}`);
    console.log(`Col sums: ${colSums.join(", ")}`);
}

// rowAndColSums(["1 2", "3 4", "5 6"]);
// console.log("");
// rowAndColSums(["1 2 3", "4 5 6", "7 8 9"]);

/**
 * 10 - Zero matrix
 * @param {string[]} input
 */
function zeroMatrix(input) {
    let matrix = input.map((row) => row.split(" "));
    /**
     * @type {{row:number,col:number}[]}
     */
    let toChange = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === "0") {
                toChange.push({ row, col });
            }
        }
    }
    toChange.forEach((el) => fillRowAndColWithZero(el.row, el.col, matrix));

    printMatrix(matrix);

    /**
     *
     * @param {number} row
     * @param {number} col
     * @param {string[][]} matrix
     */
    function fillRowAndColWithZero(row, col, matrix) {
        for (let colInd = 0; colInd < matrix[row].length; colInd++) {
            matrix[row][colInd] = "0";
        }
        for (let rowInd = 0; rowInd < matrix.length; rowInd++) {
            matrix[rowInd][col] = "0";
        }
    }
}
// zeroMatrix(["1 2 3", "4 0 6", "7 8 9"]);
// console.log("");
// zeroMatrix(["1 2 3 0", "4 5 6 7", "0 8 9 1"]);

/**
 *
 * @param {string[]} input
 */
function boundarySum(input) {
    let matrix = input.map((row) => row.split(" ").map((col) => +col));
    let sum = 0;

    if (matrix.length > 0) {
        sum += matrix[0].reduce((sum, curr) => sum + curr, 0);
    }
    if (matrix.length > 1) {
        sum += matrix[matrix.length - 1].reduce((sum, curr) => sum + curr, 0);
    }

    if (matrix.length > 2) {
        for (let row = 1; row < matrix.length - 1; row++) {
            sum += matrix[row][0];
            if (matrix[row].length > 1) {
                sum += matrix[row][matrix[row].length - 1];
            }
        }
    }

    console.log(sum);
}

// boundarySum(["1 2 3", "4 5 6", "7 8 9"]);
// boundarySum(["1 2 3 0", "4 5 6 7", "0 8 9 1"]);

/**
 * 12 - Rotate Matrix 90 Degrees
 * @param {string[]} input
 */
function rotateMatrix(input) {
    const matrix = input.map((row) => row.split(" "));
    /** @type {string[][]} */
    let result = [];
    for (let row = 0; row < matrix.length; row++) {
        result.push([]);
    }
    for (let row = matrix.length - 1; row >= 0; row--) {
        for (let col = 0; col < matrix[row].length; col++) {
            result[col].push(matrix[row][col]);
        }
    }
    printMatrix(result);
}

// rotateMatrix(["1 2 3", "4 5 6", "7 8 9"]);
// console.log("");
// rotateMatrix(["0 1 2 3", "4 5 6 7", "8 9 10 11", "12 13 14 15"]);

/**
 *
 * @param {string} column
 */
function getExcelColNumber(column) {
    let colAsNumber = 0;
    const letterACode = "A".charCodeAt(0);
    const lettersCount = 26;
    for (
        let index = column.length - 1, power = 0;
        index >= 0;
        index--, power++
    ) {
        let charCode = column.charCodeAt(index);
        colAsNumber += (charCode - letterACode + 1) * 26 ** power;
    }
    console.log(colAsNumber);
}

// getExcelColNumber("AB");
// getExcelColNumber("A");
// getExcelColNumber("C");
// getExcelColNumber("CZ");
// getExcelColNumber("MM");

/**
 * 14 - Chessboard Checker
 * @param {string[]} input
 */
function isQueenInDanger(input) {
    const chessboard = input.map((row) => row.split(" "));
    let rowsQueenCount = Array(chessboard.length).fill(0);
    let colsQueenCount = Array(chessboard[0].length).fill(0);
    for (let row = 0; row < chessboard.length; row++) {
        for (let col = 0; col < chessboard.length; col++) {
            if (chessboard[row][col] === "0") {
                continue;
            }

            rowsQueenCount[row]++;
            colsQueenCount[col]++;
            if (areDiagonalsDangerous(chessboard, row, col)) {
                console.log("Yes");
                return;
            }
        }
    }

    for (let index = 0; index < rowsQueenCount.length; index++) {
        if (rowsQueenCount[index] > 1) {
            console.log("Yes");
            return;
        }
        if (colsQueenCount[index] > 1) {
            console.log("Yes");
            return;
        }
    }
    console.log("No");
}

/**
 * Function that checks the diagonals for queens
 * @param {string[][]} chessboard
 * @param {number} queenRow row coordinate of queen
 * @param {number} queenCol col coordinate of queen
 */
function areDiagonalsDangerous(chessboard, queenRow, queenCol) {
    let startRow = queenRow;
    let startCol = queenCol;
    while (startRow > 0 && startCol > 0) {
        startRow--;
        startCol--;
    }
    for (
        let row = startRow, col = startCol;
        row < chessboard.length && col < chessboard[0].length;
        row++, col++
    ) {
        if (row === queenRow && col === queenCol) {
            continue;
        }
        if (chessboard[row][col] === "1") {
            return true;
        }
    }

    startRow = queenRow;
    startCol = queenCol;
    while (startRow > 0 && startCol < chessboard[0].length - 1) {
        startRow--;
        startCol++;
    }

    for (
        let row = startRow, col = startCol;
        row < chessboard.length && col >= 0;
        row++, col--
    ) {
        if (row === queenRow && col === queenCol) {
            continue;
        }
        if (chessboard[row][col] === "1") {
            return true;
        }
    }
}

// isQueenInDanger(["0 1 0 0", "0 0 0 1", "1 0 0 0", "0 0 1 0"]);
// isQueenInDanger(["0 1 0 0", "0 0 0 1", "1 0 0 0", "0 1 0 0"]);
// isQueenInDanger(["0 1 0 0", "0 0 0 0", "1 0 0 0", "0 0 0 0"]);

/**
 * 15 - Excel Sum Formula
 * @param {number[][]} table
 * @param {string} range
 */
function excelSum(table, range) {
    let coords = getExcelRangeCoords(range);
    let sum = 0;
    for (let row = coords.startRow; row <= coords.endRow; row++) {
        for (let col = coords.startCol; col <= coords.endCol; col++) {
            sum += table[row][col];
        }
    }
    console.log(sum);
}

/**
 * @typedef {Object} Coordinates
 * @prop {number} startRow
 * @prop {number} startCol
 * @prop {number} endRow
 * @prop {number} endCol
 */
/**
 *
 * @param {string} range
 * @returns {Coordinates}
 */
function getExcelRangeCoords(range) {
    /** @type {Coordinates} */
    let coords = {
        startRow: 0,
        startCol: 0,
        endRow: 0,
        endCol: 0,
    };
    const letterACode = "A".charCodeAt(0);
    const pattern =
        /(?<StartCol>[A-Z])(?<StartRow>\d+):(?<EndCol>[A-Z])(?<EndRow>\d+)/g;

    const match = pattern.exec(range);
    if (!match?.groups) {
        throw new Error("Failed regex");
    }

    coords.startCol = match.groups["StartCol"].charCodeAt(0) - letterACode;
    coords.endCol = match.groups["EndCol"].charCodeAt(0) - letterACode;
    coords.startRow = Number.parseInt(match.groups["StartRow"]) - 1;
    coords.endRow = Number.parseInt(match.groups["EndRow"]) - 1;

    return coords;
}

// excelSum(
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ],
//     "A1:C2"
// );
// excelSum(
//     [
//         [0, 1, 0, 0],
//         [0, 0, 0, 1],
//         [1, 0, 0, 0],
//         [0, 1, 0, 0],
//     ],
//     "A1:B4"
// );

// excelSum(
//     [
//         [0, 1, 0, 0],
//         [0, 0, 0, 0],
//         [1, 0, 0, 0],
//         [0, 0, 0, 0],
//     ],
//     "A1:C4"
// );

/**
 * 16 - Matrix Border Flip
 * @param {string [] } input
 */
function rotateMatrixBorder(input) {
    let matrix = input.map((row) => row.split(" "));
    let rowCount = matrix.length;
    let colCount = matrix[0].length;

    let buffer = matrix[0][0];
    //* Top to bottom row, first col
    for (let row = 0; row < rowCount - 1; row++) {
        let next = matrix[row + 1][0];
        matrix[row][0] = next;
    }

    //* Left to right col, first row
    for (let col = 1; col < colCount; col++) {
        let prev = matrix[0][col];
        matrix[0][col] = buffer;
        buffer = prev;
    }

    //* Top to bottom row, last col
    for (let row = 1, col = colCount - 1; row < rowCount; row++) {
        let prev = matrix[row][col];
        matrix[row][col] = buffer;
        buffer = prev;
    }

    //* Right to left col, last row
    for (let row = rowCount - 1, col = colCount - 2; col >= 0; col--) {
        let prev = matrix[row][col];
        matrix[row][col] = buffer;
        buffer = prev;
    }

    printMatrix(matrix);
}

// rotateMatrixBorder(["1 2 3", "4 5 6", "7 8 9"]);
// console.log("");
// rotateMatrixBorder(["0 1 0 0", "0 0 0 1", "1 0 0 0", "0 1 0 0"]);

/**
 * 17 - Magic Square Checker
 * @param {string[]} input
 * @returns {boolean}
 */
function isMagicSquare(input) {
    let matrix = input.map((row) => row.split(" ").map((col) => Number(col)));
    let firstRowSum = matrix[0].reduce((sum, curr) => sum + curr, 0);

    if (!areRowSumsEqual(matrix, firstRowSum)) {
        return false;
    }
    if (!areColSumsEqual(matrix, firstRowSum)) {
        return false;
    }

    if (!isMainDiagSumEqual(matrix, firstRowSum)) {
        return false;
    }
    if (!isSecondaryDiagSumEqual(matrix, firstRowSum)) {
        return false;
    }
    return true;
}

/**
 * @see {@link isMagicSquare}
 * @param {number[][]} matrix
 * @param {number} sumToCheck
 * @returns {boolean}
 */
function isSecondaryDiagSumEqual(matrix, sumToCheck) {
    let currSum = 0;
    for (
        let row = matrix.length - 1, col = 0;
        col < matrix[0].length && row < matrix.length;
        row--, col++
    ) {
        currSum += matrix[row][row];
    }
    return currSum === sumToCheck;
}

/**
 * @see {@link isMagicSquare}
 * @param {number[][]} matrix
 * @param {number} sumToCheck
 * @returns {boolean}
 */
function isMainDiagSumEqual(matrix, sumToCheck) {
    let currSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        currSum += matrix[row][row];
    }
    return currSum === sumToCheck;
}

/**
 * @see {@link isMagicSquare}
 *
 * @param {number[][]} matrix
 * @param {number} sumToCheck
 * @returns {boolean}
 */
function areRowSumsEqual(matrix, sumToCheck) {
    for (let row = 1; row < matrix.length; row++) {
        let currSum = matrix[row].reduce((sum, curr) => sum + curr, 0);
        if (currSum !== sumToCheck) {
            return false;
        }
    }
    return true;
}

/**
 * @see {@link isMagicSquare}
 * @param {number[][]} matrix
 * @param {number} sumToCheck
 * @returns {boolean}
 */
function areColSumsEqual(matrix, sumToCheck) {
    for (let col = 0; col < matrix[0].length; col++) {
        let currSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            currSum += matrix[row][col];
        }
        if (currSum !== sumToCheck) {
            return false;
        }
    }
    return true;
}

// let matrix1 = ["1 2 3", "4 5 6", "7 8 9"];
// let matrix2 = ["1 0 0 0", "0 0 0 1", "0 1 0 0", "0 0 1 0"];
// let matrix3 = ["8 1 6", "3 5 7", "4 9 2"];
// console.log(isMagicSquare(matrix1));
// console.log(isMagicSquare(matrix2));
// console.log(isMagicSquare(matrix3));

//TODO 18 - Spiral Matrix Traversal

/**
 * 19 - Checkerboard Pattern
 * @param {number} size
 * @returns {number[][]}
 */
function getCheckBoard(size) {
    let evenRow = [];
    for (let col = 0; col < size; col++) {
        evenRow.push(col % 2 === 0 ? 0 : 1);
    }
    let oddRow = [];
    for (let col = 0; col < size; col++) {
        oddRow.push(col % 2 === 0 ? 1 : 0);
    }

    let checkboard = [];
    for (let row = 0; row < size; row++) {
        if (row % 2 === 0) {
            checkboard.push([...evenRow]);
        } else {
            checkboard.push([...oddRow]);
        }
    }
    return checkboard;
}
// printMatrix(getCheckBoard(3));
// console.log("");

// printMatrix(getCheckBoard(4));

/**
 * 20 - Maximal Sum
 * @param {string[]} input
 */
function maximumSumOf3By3SubMatrix(input) {
    let sum = Number.MIN_SAFE_INTEGER;
    let matrix = input.map((row) => row.split(" ").map((col) => Number(col)));
    let resultMatrix = [];
    for (let row = 0; row < matrix.length - 2; row++) {
        for (let col = 0; col < matrix[row].length - 2; col++) {
            let curr = getSumAndMatrix3By3(matrix, row, col);
            if (curr.sum > sum) {
                sum = curr.sum;
                resultMatrix = curr.matrix;
            }
        }
    }
    console.log(`Sum = ${sum}`);
    printMatrix(resultMatrix);
}

/**
 * Helper function for {@link maximumSumOf3By3SubMatrix}
 * @param {number[][]} matrix
 * @param {number} startRow
 * @param {number} startCol
 * @returns {{sum:number,matrix:number[][]}}
 */
function getSumAndMatrix3By3(matrix, startRow, startCol) {
    /** @type {{sum:number,matrix:number[][]}} */
    let result = {
        sum: 0,
        matrix: [],
    };
    for (
        let row = startRow, rowCount = 0;
        row < matrix.length && rowCount < 3;
        row++, rowCount++
    ) {
        result.matrix.push(matrix[row].slice(startCol, startCol + 3));
        for (
            let col = startCol, colCount = 0;
            col < matrix[row].length && colCount < 3;
            col++, colCount++
        ) {
            result.sum += matrix[row][col];
        }
    }
    return result;
}
// maximumSumOf3By3SubMatrix([
//     "1 5 5 2 4",
//     "2 1 4 14 3",
//     "3 7 11 2 8",
//     "4 8 12 16 4",
// ]);
// console.log("");

// maximumSumOf3By3SubMatrix([
//     "1 0 4 3 1 1",
//     "1 3 1 3 0 4",
//     "6 4 1 2 5 6",
//     "2 2 1 5 4 1",
//     "3 3 3 6 0 5",
// ]);