//@ts-check

/**
 * Numbers from 0 to 100
 */
function logFrom1To100() {
    const lastNumber = 100;
    for (let curr = 1; curr <= lastNumber; curr++) {
        console.log(curr);
    }
}

/**
 * 02 - Numbers N to 0 in reverse order
 * @param {number} startNum
 */
function logFromNToZero(startNum) {
    for (let curr = 0; curr >= 0; curr--) {
        console.log(curr);
    }
}

/**
 * 03 - Numbers 1 to N through 2
 * @param {number} endNum
 */
function logFrom1ToNThrough2(endNum) {
    for (let curr = 1; curr <= endNum; curr += 2) {
        console.log(curr);
    }
}

/**
 * 04 - Numbers 1 to N through M
 * @param {number} endNum Final number
 * @param {number} step Custom step for log iteration
 */
function logFrom1ToNThroughM(endNum, step) {
    for (let curr = 1; curr <= endNum; curr += step) {
        console.log(curr);
    }
}

/**
 * 05 - Letters in a word
 * @param {string} word
 */
function logWord(word) {
    for (let index = 0; index < word.length; index++) {
        console.log(word[index]);
    }
}

/**
 * 06 - Sum of vowels
 * @param {string} word
 */
function logSumOfVowels(word) {
    let sum = 0;
    for (let index = 0; index < word.length; index++) {
        switch (word[index]) {
            case "a":
                sum += 1;
                break;
            case "e":
                sum += 2;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }
    }
    console.log(sum);
}

/**
 * 07 - Clock
 */
function logFullClock() {
    for (let hours = 0; hours < 24; hours++) {
        for (let minutes = 0; minutes < 60; minutes++) {
            console.log(`${hours}:${minutes}`);
        }
    }
}

/**
 * 08 - Multiplication table
 */
function logMultiplicationTableTillTo10() {
    for (let lvalue = 1; lvalue <= 10; lvalue++) {
        for (let rvalue = 0; rvalue <= 10; rvalue++) {
            console.log(`${lvalue} * ${rvalue} = ${lvalue * rvalue}`);
        }
    }
}

/**
 * 09 - Sum of Even Numbers
 * @param {number} count The count of even numbers
 */
function logSumOfNEvenNums(count) {
    let sum = 0;
    for (let curr = 2, counter = 0; counter < count; curr += 2) {
        counter++;
        sum += curr;
    }
    console.log(sum);
}

/**
 * 10 - Factorial Calculation
 * @param {number} factNumber
 */
function logFactorialOf(factNumber) {
    let factorialRes = 1;
    for (let curr = 2; curr <= factNumber; curr++) {
        factorialRes *= curr;
    }
    console.log(factorialRes);
}

/**
 * 11 - Number Reversal
 * @param {number} input
 */
function logReverseNumber(input) {
    if (input < 0) {
        console.error("Can't reverse negative number");
        return;
    }
    let reversed = "";

    if (input === 0) {
        reversed = "0";
    }

    while (input > 0) {
        reversed = reversed + (input % 10).toString();
        input = Math.floor(input / 10);
    }
    console.log(reversed);
}

/**
 * 12 - Fibonacci Sequence Sum
 * @param {number} count the count of the N items
 * we want to sum from Fibonacci sequence
 */
function logFibonacciSum(count) {
    let prev = 0;
    let curr = 1;
    let sum = 0;
    for (let counter = 0; counter < count; counter++) {
        let next = prev + curr;
        sum += curr;
        prev = curr;
        curr = next;
    }
    console.log(sum);
}

/**
 * 13 - Palindrome Check
 * @param {string} word
 */
function logIsPalindrome(word) {
    for (
        let leftIndex = 0, rightIndex = word.length - 1;
        leftIndex < word.length / 2;
        leftIndex++, rightIndex--
    ) {
        if (word[rightIndex] !== word[leftIndex]) {
            console.log("false");
            return;
        }
    }

    console.log("true");
}

/**
 * 14 - Armstrong Number Check
 * @param {number} input
 */
function logIsArmstrongNumber(input) {
    const length = input.toString().length;
    let armstrongNumber = 0;
    let inputClone = input;
    while (inputClone > 0) {
        armstrongNumber = armstrongNumber + (inputClone % 10) ** length;
        inputClone = Math.floor(inputClone / 10);
    }

    console.log(armstrongNumber === input);
}

/**
 * 15 - Collatz Conjecture
 * @param {number} startNumber
 */
function logColatzSeq(startNumber) {
    let sequence = `${startNumber}`;
    while (startNumber !== 1) {
        if (startNumber % 2 === 0) {
            startNumber = Math.floor(startNumber / 2);
        } else {
            startNumber = startNumber * 3 + 1;
        }
        sequence += ` ${startNumber}`;
    }
    console.log(sequence);
}

/**
 * 16 - Hollow Rectangle Pattern
 *
 * @param {number} length Vertical side
 * @param {number} width Horizontal side
 */
function logHollowRectangle(length, width) {
    if (length < 2 || width < 2) {
        console.error("Can't have rectangle smaller than 2x2");
        return;
    }

    const filledRow = "*".repeat(width);
    const hollowRow = `*${" ".repeat(width - 2)}*`;

    console.log(filledRow);
    for (let row = 0; row < length - 2; row++) {
        console.log(hollowRow);
    }

    console.log(filledRow);
}

