//@ts-check

/**
 * 01 - Sum First and Last Array Element
 * @param {string[]} numbers
 */
function logSumOfFirstAndLastEl(numbers) {
    const sum = Number(numbers[0]) + Number(numbers[numbers.length - 1]);
    console.log(sum);
}

/**
 * 02 - Day of Week
 * @param {number} dayOfWeek
 */
function logDayOfWeek(dayOfWeek) {
    if (dayOfWeek < 1 || dayOfWeek > 7) {
        console.log("Invalid day!");
        return;
    }

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    console.log(days[dayOfWeek - 1]);
}

/**
 * 03 - Reverse an Array of Numbers
 * @param {number} elementsCount
 * @param {number[]} arr
 */
function logReversedSubArray(elementsCount, arr) {
    let result = arr.slice(0, elementsCount).reverse().join(" ");
    console.log(result);
}

/**
 * 04 - Reverse an Array of Strings
 * @param {string[]} arr
 */
function logReversedArray(arr) {
    for (let index = 0; index < Math.floor(arr.length / 2); index++) {
        const temp = arr[index];
        arr[index] = arr[arr.length - 1 - index];
        arr[arr.length - 1 - index] = temp;
    }
    console.log(arr);
}

/**
 * 05 - Sum Even Numbers
 * @param {string[]} arr
 */
function logSumOfEvenNumbers(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        const curr = Number(arr[index]);
        if (curr % 2 === 0) {
            sum += curr;
        }
    }
    console.log(sum);
}

/**
 * 06 - Even and Odd Subtraction
 * @param {number[]} arr
 */
function logSubtractOfEvenAndOddSum(arr) {
    let result = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 === 0) {
            result += arr[index];
        } else {
            result -= arr[index];
        }
    }
    console.log(result);
}

/**
 *  07 - Equal Arrays
 * @param {string[]} leftArr
 * @param {string[]} rightArr
 */
function logAreArraysEqual(leftArr, rightArr) {
    const length = Math.min(leftArr.length, rightArr.length);
    let sum = 0;
    for (let i = 0; i < length; i++) {
        if (leftArr[i] !== rightArr[i]) {
            console.log(
                `Arrays are not identical. Found difference at ${i} index`
            );
            return;
        }
        sum += +leftArr[i];
    }

    if (leftArr.length !== rightArr.length) {
        console.log(
            `Arrays are not identical. Found difference at ${length} index`
        );
        return;
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}

/**
 * 08 - Condense Array to Number
 * @param {number[]} arr
 */
function logArrayToNumber(arr) {
    for (let length = arr.length; length > 1; length--) {
        for (let index = 0; index < length - 1; index++) {
            arr[index] += arr[index + 1];
        }
    }
    console.log(arr[0]);
}

/**
 * 09 - Print every N-th Element from an Array
 * @param {any[]} arr
 * @param {number} step
 */
function logEveryNthElem(arr, step) {
    let result = "";
    for (let index = 0; index < arr.length; index += step) {
        result += index + 1 < arr.length ? `${arr[index]} ` : arr[index];
    }
    console.log(result);
}

/**
 * 10 - Add and Remove Elements from Array
 * @param {string[]} commands
 */
function logAddRemoveArray(commands) {
    let resultArr = [];
    for (let index = 0; index < commands.length; index++) {
        if (commands[index] === "add") {
            resultArr.push(index + 1);
        } else {
            resultArr.pop();
        }
    }
    if (resultArr.length > 0) {
        console.log(resultArr.join(" "));
    } else {
        console.log("Empty");
    }
}

/**
 * 11 - Rotate Array
 * @param {string[]|number[]} arr
 * @param {number} step
 */
function logRotatedArr(arr, step) {
    for (let counter = 0; counter < step; counter++) {
        let temp = arr[arr.length - 1];
        for (let index = arr.length - 1; index > 0; index--) {
            arr[index] = arr[index - 1];
        }
        arr[0] = temp;
    }
    console.log(arr.join(" "));
}

/**
 * 12 - Extract a Non-Decreasing Subsequence from an Array
 * @param {number[]} arr
 */
function logNonDecreasingSubArr(arr) {
    let subArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (subArr.length < 1 || subArr[subArr.length - 1] <= arr[index]) {
            subArr.push(arr[index]);
        }
    }
    console.log(subArr.join(" "));
}

/**
 * 13 - Negative / Positive Numbers
 * @param {number[]} arr
 */
function logNegativePositiveNums(arr) {
    let output = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            output = [arr[index], ...output];
        } else {
            output.push(arr[index]);
        }
    }
    console.log(output.join("\n"));
}

/**
 * 14 - First and Last K Numbers
 * @param {number} elemCount How many elements you want
 * @param {number[]} arr
 */
function logFirstAndLastKNums(elemCount, arr) {
    const first = arr.slice(0, elemCount);
    const last = arr.slice(-elemCount);
    console.log(first.join(" "));
    console.log(last.join(" "));
}

/**
 * 15 - Last K Numbers Sequence
 * @param {number} length
 * @param {number} elemCount
 */
function logLastKSequence(length, elemCount) {
    let arr = [1];
    for (let counter = 1; counter < length; counter++) {
        const lastKElements = arr.slice(-elemCount);
        const sum = lastKElements.reduce((sum, element) => sum + element);
        arr.push(sum);
    }
    console.log(arr.join(" "));
}

/**
 * 16 - Process Odd Numbers
 * @param {number[]} arr
 */
function logOddPosNumbers(arr) {
    let res = [];
    for (let index = 1; index < arr.length; index += 2) {
        res.push(arr[index] * 2);
    }
    console.log(res.reverse().join(" "));
}

/**
 * 17 - Smallest Two Numbers
 * @param {number[]} arr
 */
function logSmallestTwoNums(arr) {
    let resArr = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < resArr[0] || arr[index] < resArr[1]) {
            resArr[1] = Math.min(resArr[0], resArr[1]);
            resArr[0] = arr[index];
        }
    }
    console.log(`${resArr[0]} ${resArr[1]}`);
}

/**
 * 18 - List of Products
 * @param {string[]} products
 */
function logProductList(products) {
    let productList = [...products].sort();
    for (let index = 0; index < productList.length; index++) {
        console.log(`${index + 1}.${productList[index]}`);
    }
}

/**
 * 19 - Array Manipulations
 * @param {string[]} arr
 */
function logManipulatedNumbers(arr) {
    let actualArr = arr[0].split(" ");
    arr = arr.slice(1);
    const commands = arr.map((el) => el.split(" "));
    for (let index = 0; index < commands.length; index++) {
        switch (commands[index][0]) {
            case "Add":
                actualArr.push(commands[index][1]);
                break;
            case "Remove":
                let indexToDelete = actualArr.indexOf(commands[index][1]);
                actualArr.splice(indexToDelete, 1);
                break;
            case "RemoveAt":
                let indexRemoveAt = +commands[index][1];
                actualArr.splice(indexRemoveAt, 1);
                break;
            case "Insert":
                const insertIndex = +commands[index][2];
                const num = commands[index][1];
                actualArr = [
                    ...actualArr.slice(0, insertIndex),
                    num,
                    ...actualArr.slice(insertIndex),
                ];
        }
    }
    console.log(actualArr.join(" "));
}

/**
 * 20 - Longest sequence of identical elements
 * @param {string} line
 */
function logLongestIdenticalSeq(line) {
    const elements = line.split(" ");
    let sequences = [];
    let temp = [];
    for (let index = 0; index < elements.length; index++) {
        if (temp.length === 0 || elements[index] === temp[0]) {
            temp.push(elements[index]);
        } else {
            sequences.push([...temp]);
            temp = [elements[index]];
        }
    }
    sequences.push([...temp]);

    let resIndex = 0;
    for (let index = 1; index < sequences.length; index++) {
        if (sequences[index].length >= sequences[resIndex].length) {
            resIndex = index;
        }
    }
    console.log(sequences[resIndex].join(" "));
}
