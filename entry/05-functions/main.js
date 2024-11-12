//@ts-check

/**
 * 01 - Smallest of Three Numbers
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 */
function logSmallestNumber(num1, num2, num3) {
    console.log(Math.min(num1, num2, num3));
}

/**
 * 02 - Add and Subtract
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @see {@link sum}
 * @see {@link substract}
 */
function sumThenSubstract(num1, num2, num3) {
    const sumResult = sum(num1, num2);
    console.log(substract(sumResult, num3));
}

/**
 * Helper sum function
 * @param {number} lvalue
 * @param {number} rvalue
 * @returns {number}
 * @see {@link sumThenSubstract}
 */
function sum(lvalue, rvalue) {
    return lvalue + rvalue;
}

/**
 * Helper substract function
 * @param {number} lvalue
 * @param {number} rvalue
 * @returns {number}
 * @see {@link sumThenSubstract}
 */
function substract(lvalue, rvalue) {
    return lvalue - rvalue;
}

/**
 * 03 - Characters in Range
 * @param {string} begin
 * @param {string} end
 */
function logCharsInRange(begin, end) {
    let firstCharCode = Math.min(begin.charCodeAt(0), end.charCodeAt(0)) + 1;
    let lastCharCode = Math.max(begin.charCodeAt(0), end.charCodeAt(0));
    let output = "";
    for (let asciiCode = firstCharCode; asciiCode < lastCharCode; asciiCode++) {
        output += `${String.fromCharCode(asciiCode)} `;
    }
    console.log(output);
}

/**
 * 04 - Odd and Even Sum
 * @param {number} num
 */
function sumOddAndEvenDigits(num) {
    let cloned = num;
    let oddSum = 0;
    let evenSum = 0;
    while (cloned > 0) {
        const curr = cloned % 10;
        if (curr % 2 === 0) {
            evenSum += curr;
        } else {
            oddSum += curr;
        }
        cloned = Math.floor(cloned / 10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

/**
 * 05 - Palindrome Numbers
 * @param {number[]} numArr
 * @see {@link isPalindrome}
 */
function logIsPalindrome(numArr) {
    for (const el of numArr) {
        console.log(isPalindrome(el));
    }
}
/**
 * Helper function
 * @param {number} num
 * @see {@link logIsPalindrome}
 * @returns {boolean}
 */
function isPalindrome(num) {
    let cloned = num;
    let reversed = 0;
    while (cloned > 0) {
        const curr = cloned % 10;
        reversed = reversed * 10 + curr;
        cloned = Math.floor(cloned / 10);
    }
    return reversed === num;
}

/**
 * 06 - Password Validator
 * @param {string} password
 */
function isPasswordValid(password) {
    let isValid = true;
    if (password.length < 6 || password.length > 10) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }
    if (!/^[a-zA-Z\d]+$/g.test(password)) {
        isValid = false;
        console.log("Password must consist only of letters and digits");
    }

    const digitsLength = [...password.matchAll(/\d/g)].length;

    if (digitsLength < 2) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

/**
 * 07 - Shortest and Longest Word
 * @param {string} text
 */
function getLongestAndShortestWord(text) {
    let words = text.split(/[^\w]/).filter((el) => el);
    let longest = words[0];
    let shortest = words[0];
    for (let index = 0; index < words.length; index++) {
        if (words[index].length > longest.length) {
            longest = words[index];
        }
        if (words[index].length < shortest.length) {
            shortest = words[index];
        }
    }
    console.log(`Longest -> ${longest}`);
    console.log(`Shortest -> ${shortest}`);
}

/**
 * 08 - Perfect Number
 * @param {number} num
 */
function isPerfectNumber(num) {
    let sumOfDivisors = 0;
    let divisors = "";
    for (let curr = 1; curr < num; curr++) {
        if (num % curr !== 0) {
            continue;
        }
        sumOfDivisors += curr;
        if (divisors.length === 0) {
            divisors += curr;
        } else {
            divisors += ` + ${curr}`;
        }
    }
    if (sumOfDivisors === num) {
        console.log("Perfect number!");
        console.log(divisors);
    } else {
        console.log("It's not so perfect.");
    }
}

/**
 * 09 - Progress Bar
 * @param {number} percentage
 */
function printProgressBar(percentage) {
    const times = Math.floor(percentage / 10);
    console.log(
        `${percentage}% [${"%".repeat(times)}${".".repeat(10 - times)}]`
    );
    if (percentage !== 100) {
        console.log("Loading...");
    } else {
        console.log("Complete!");
    }
}

/**
 * 10 - Factorial Division
 * @param {number} factorial1
 * @param {number} factorial2
 */
function logFactorialDivision(factorial1, factorial2) {
    let largest = Math.max(factorial1, factorial2);
    let smallest = Math.min(factorial1, factorial2);
    let division = 1;
    for (let curr = largest; curr > smallest; curr--) {
        division *= curr;
    }
    console.log(division.toFixed(2));
}
