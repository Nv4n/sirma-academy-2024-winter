//@ts-check

/**
 * First pattern - square with 1s
 * @param {number} rowCount
 */
function pattern1(rowCount) {
    for (let rowInd = 0; rowInd < rowCount; rowInd++) {
        console.log("1 ".repeat(rowCount));
    }
}

/**
 * Pattern 2 - Square with switching 1s and 0s every row
 * @param {number} rowCount
 */
function pattern2(rowCount) {
    for (let rowInd = 0; rowInd < rowCount; rowInd++) {
        if (rowInd % 2 === 0) {
            console.log("1 ".repeat(rowCount));
        } else {
            console.log("0 ".repeat(rowCount));
        }
    }
}

/**
 * Pattern 3 - Square witch switching 1s and 0s every column
 * @param {number} rowCount
 */
function pattern3(rowCount) {
    for (let rowInd = 0; rowInd < rowCount; rowInd++) {
        let row = "";
        for (let colInd = 0; colInd < rowCount; colInd++) {
            if (colInd % 2 !== 0) {
                row += "1 ";
            } else {
                row += "0 ";
            }
        }
        console.log(row);
    }
}

/**
 * Pattern 4 - Square with 1s for frame and 0s for filling
 * @param {number} rowCount
 */
function pattern4(rowCount) {
    console.log("1 ".repeat(rowCount));

    for (let rowInd = 1; rowInd < rowCount - 1; rowInd++) {
        console.log(`1 ${"0 ".repeat(rowCount - 2)}1`);
    }
    console.log("1 ".repeat(rowCount));
}

/**
 * Pattern 5 - Square with 1s and single 0 in the center
 * @param {number} rowCount
 */
function pattern5(rowCount) {
    const halfCount = Math.ceil(rowCount / 2);
    for (let rowInd = 0; rowInd < rowCount; rowInd++) {
        if (rowInd !== halfCount - 1) {
            console.log("1 ".repeat(rowCount));
            continue;
        }
        if (halfCount % 2 === 0) {
            console.log(
                `${"1 ".repeat(halfCount - 1)}0 ${"1 ".repeat(halfCount - 1)}`
            );
        } else {
            console.log(
                `${"1 ".repeat(halfCount)}0 ${"1 ".repeat(halfCount - 1)}`
            );
        }
    }
}

/**
 * Pattern 6 - Square witch chess pattern
 * @param {number} rowCount
 */
function pattern6(rowCount) {
    for (let rowInd = 0; rowInd < rowCount; rowInd++) {
        let row = "";
        for (let colInd = 0; colInd < rowCount; colInd++) {
            if (
                (rowInd % 2 === 0 && colInd % 2 === 0) ||
                (rowInd % 2 !== 0 && colInd % 2 !== 0)
            ) {
                row += "1 ";
            } else {
                row += "0 ";
            }
        }
        console.log(row);
    }
}

/**
 * Pattern 7 - Square with 1s and cross with 0s in middle
 * @param {number} rowCount
 */
function pattern7(rowCount) {
    const halfCount = Math.ceil(rowCount / 2);
    for (let rowInd = 0; rowInd < rowCount; rowInd++) {
        if (rowInd === halfCount - 1) {
            console.log("0 ".repeat(rowCount));
            continue;
        }

        if (halfCount % 2 === 0) {
            console.log(
                `${"1 ".repeat(halfCount - 1)}0 ${"1 ".repeat(halfCount - 1)}`
            );
        } else {
            console.log(
                `${"1 ".repeat(halfCount)}0 ${"1 ".repeat(halfCount - 1)}`
            );
        }
    }
}

/**
 * Pattern 8 - Square with 0s and diagonal 1s
 * @param {number} rowCount
 */
function pattern8(rowCount) {
    const halfCount = Math.ceil(rowCount / 2);
    for (let rowInd = 0; rowInd < halfCount - 1; rowInd++) {
        console.log(
            `${"0 ".repeat(rowInd)}1 ${"0 ".repeat(
                Math.max(rowCount - 2 - rowInd * 2, 0)
            )}1 ${"0 ".repeat(rowInd)}`
        );
    }
    if (rowCount % 2 === 0) {
        console.log(
            `${"0 ".repeat(halfCount - 1)}1 1 ${"0 ".repeat(halfCount - 1)}`
        );
    } else {
        console.log(
            `${"0 ".repeat(halfCount - 1)}1 ${"0 ".repeat(halfCount - 1)}`
        );
    }
    for (let rowInd = halfCount - 2; rowInd >= 0; rowInd--) {
        console.log(
            `${"0 ".repeat(rowInd)}1 ${"0 ".repeat(
                Math.max(rowCount - 2 - rowInd * 2, 0)
            )}1 ${"0 ".repeat(rowInd)}`
        );
    }
}

/**
 * Pattern 9 - Square frame with 0s as filling and corners
 * @param {number} rowCount
 */
function pattern9(rowCount) {
    console.log(`0 ${"1 ".repeat(rowCount - 2)}0`);

    for (let rowInd = 1; rowInd < rowCount - 1; rowInd++) {
        console.log(`1 ${"0 ".repeat(rowCount - 2)}1`);
    }
    console.log(`0 ${"1 ".repeat(rowCount - 2)}0`);
}

/**
 * Pattern 10 - Square with increasing number row
 * @param {number} rowCount
 */
function pattern10(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        console.log(`${rowInd} `.repeat(rowCount));
    }
}

/**
 * Pattern 11 - Square with increasing number col
 * @param {number} rowCount
 */
function pattern11(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (let colInd = 1; colInd <= rowCount; colInd++) {
            line += `${colInd} `;
        }
        console.log(line);
    }
}

/**
 * Pattern 12
 * @param {number} rowCount
 */
function pattern12(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (
            let colInd = 1, value = rowInd;
            colInd <= rowCount;
            colInd++, value++
        ) {
            line += `${value} `;
        }
        console.log(line);
    }
}

/**
 * Pattern 13 - Square with counting numbers
 * @param {number} rowCount
 */
function pattern13(rowCount) {
    for (let rowInd = 1, value = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (let colInd = 1; colInd <= rowCount; colInd++, value++) {
            line += `${value} `;
        }
        console.log(line);
    }
}

/**
 * Pattern 14 - Square with row lock on counting numbers reversed
 * @param {number} rowCount
 */
function pattern14(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (let colInd = 1, value = rowCount; colInd <= rowCount; colInd++) {
            line += `${value} `;
            if (value > rowCount + 1 - rowInd) {
                value--;
            }
        }
        console.log(line);
    }
}

/**
 * Pattern 15 - Square with row lock on counting numbers
 * @param {number} rowCount
 */
function pattern15(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (let colInd = 1, value = rowInd; colInd <= rowCount; colInd++) {
            line += `${value} `;
            if (value < rowCount) {
                value++;
            }
        }
        console.log(line);
    }
}

/**
 * Pattern 16
 * @param {number} rowCount
 */
function pattern16(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (let colInd = rowInd; colInd <= rowCount; colInd++) {
            line += `${colInd} `;
        }
        for (let colInd = rowInd - 1; colInd >= 1; colInd--) {
            line += `${colInd} `;
        }
        console.log(line);
    }
}

/**
 * Pattern 17
 * @param {number} rowCount
 */
function pattern17(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";

        for (let colInd = rowInd; colInd > 1; colInd--) {
            line += `${colInd} `;
        }
        for (let colInd = 1; colInd <= rowCount - rowInd + 1; colInd++) {
            line += `${colInd} `;
        }
        console.log(line);
    }
}

//TODO figure out the algorithm
/**
 * Pattern 18 - Wood circles pattern with numbers
 * @param {number} maxNum
 */
function pattern18(maxNum) {
    const rowCount = maxNum * 2 - 1;
    console.log(`${maxNum} `.repeat(rowCount));

    for (let rowInd = 1; rowInd <= maxNum; rowInd++) {
        let line = "";
        for (let colInd = 1, value = maxNum; colInd <= maxNum; colInd++) {
            line += `${value} `;
            if (value > maxNum - rowInd) {
                value--;
            }
        }
        for (
            let colInd = 1, value = Math.max(maxNum - rowInd, 2);
            colInd < maxNum;
            colInd++
        ) {
            line += `${value} `;
            if (value < maxNum) {
                value++;
            }
        }
        console.log(line);
    }
    console.log(`${maxNum} `.repeat(maxNum * 2 - 1));
}

//TODO
/**
 * Pattern 19 - Spiral counting
 * @param {number} rowCount
 */
function pattern19(rowCount) {
    let matrix = createMatrix(rowCount, rowCount);
}

/**
 * Creates matrix rowCount x colCount size
 * @param {number} rowCount
 * @param {number} colCount
 * @param {number} [value=0]
 * @returns {number[][]}
 */
function createMatrix(rowCount, colCount, value = 0) {
    return Array.from({ length: rowCount }, () => Array(colCount).fill(value));
}

/**
 * Pattern 20 - staircase
 * @param {number} rowCount
 */
function pattern20(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        console.log(`${rowInd} `.repeat(rowInd));
    }
}

/**
 * Pattern 21 - reversed staircase
 * @param {number} rowCount
 */
function pattern21(rowCount) {
    for (let rowInd = rowCount; rowInd >= 1; rowInd--) {
        console.log(`${rowInd} `.repeat(rowInd));
    }
}

/**
 * Pattern 22 - reversed staircase with reversed counting
 * @param {number} rowCount
 */
function pattern22(rowCount) {
    for (let rowInd = rowCount, val = 1; rowInd >= 1; rowInd--, val++) {
        console.log(`${val} `.repeat(rowInd));
    }
}

/**
 * Pattern 23 - staircase with reversed counting
 * @param {number} rowCount
 */
function pattern23(rowCount) {
    for (let rowInd = 1, val = rowCount; rowInd <= rowCount; rowInd++, val--) {
        console.log(`${val} `.repeat(rowInd));
    }
}

/**
 * Pattern 24 - staircase with increasing counting
 * @param {number} rowCount
 */
function pattern24(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (let colInd = 1; colInd <= rowInd; colInd++) {
            line += `${colInd} `;
        }
        console.log(line);
    }
}

/**
 * Pattern 25 - reversed staircase with increasing counting
 * @param {number} rowCount
 */
function pattern25(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (let colInd = 1; colInd <= rowCount - rowInd + 1; colInd++) {
            line += `${colInd} `;
        }
        console.log(line);
    }
}

/**
 * Pattern 26 - staircase with flipped increasing counting
 * @param {number} rowCount
 */
function pattern26(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (let colInd = 1; colInd <= rowInd; colInd++) {
            line = `${colInd} ${line}`;
        }
        console.log(line);
    }
}

/**
 * Pattern 27 - reversed staircase with flipped increasing counting
 * @param {number} rowCount
 */
function pattern27(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (let colInd = 1; colInd <= rowCount - rowInd + 1; colInd++) {
            line = `${colInd} ${line}`;
        }
        console.log(line);
    }
}

/**
 * Pattern 28 - staircase with decreasing counting
 * @param {number} rowCount
 */
function pattern28(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (
            let colInd = 1, val = rowCount;
            colInd <= rowInd;
            colInd++, val--
        ) {
            line = `${val} ${line}`;
        }
        console.log(line);
    }
}

/**
 * Pattern 29 - reversed staircase with decreasing counting
 * @param {number} rowCount
 */
function pattern29(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (
            let colInd = 1, val = rowCount;
            colInd <= rowCount - rowInd + 1;
            colInd++, val--
        ) {
            line = `${val} ${line}`;
        }
        console.log(line);
    }
}

/**
 * Pattern 30 - staircase with counting
 * @param {number} rowCount
 */
function pattern30(rowCount) {
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        let line = "";
        for (let colInd = 1, val = rowInd; colInd <= rowInd; colInd++, val++) {
            line += `${val} `;
        }

        console.log(line);
    }
}

//* Move straight to figure patterns
/**
 * Figure 1 - rectangle of #s
 * @param {number} rowCount
 */
function figure1(rowCount) {
    for (let rowInd = 0; rowInd < rowCount; rowInd++) {
        console.log("# ".repeat(5));
    }
}

//* Move straight to figure patterns
/**
 * Figure 2 and 3 - rectangle of zig zagged #s
 * @param {number} rowCount
 */
function figure2(rowCount) {
    for (let rowInd = 0; rowInd < rowCount; rowInd++) {
        console.log(`${rowInd % 2 !== 0 ? " " : ""}${"# ".repeat(5)}`);
    }
}

function figure4(rowCount) {
    let line = "* | ";
    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        line += `${rowInd} `;
    }
    console.log(line);

    for (let rowInd = 1; rowInd <= rowCount; rowInd++) {
        line = `${rowInd} | `;
        for (let colInd = 1; colInd <= rowCount; colInd++) {
            line += `${rowInd * colInd} `;
        }
        console.log(line);
    }
}

//!End of file
