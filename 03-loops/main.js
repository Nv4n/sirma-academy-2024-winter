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

/**
 * 17 - New Building
 * @param {number} floorCount
 * @param {number} roomCount
 */
function logNewBuilding(floorCount, roomCount) {
    for (let floor = floorCount; floor > 0; floor--) {
        let prefix = "";
        if (floor === floorCount) {
            prefix = "L";
        } else if (floor % 2 === 0) {
            prefix = "O";
        } else {
            prefix = "A";
        }
        let floorSeq = "";
        for (let roomIndex = 0; roomIndex < roomCount; roomIndex++) {
            floorSeq += `${prefix}${floor}${roomIndex}`;
            if (roomIndex < roomCount - 1) {
                floorSeq += " ";
            }
        }

        console.log(floorSeq);
    }
}

/**
 * 18 - Magic Number
 * @param {number} begin beginning of interval
 * @param {number} end end of interval
 * @param {number} magicNumber
 */
function logMagicNumberCombinations(begin, end, magicNumber) {
    let combinationCount = 0;
    for (let lvalue = begin; lvalue <= end; lvalue++) {
        for (let rvalue = begin; rvalue <= end; rvalue++) {
            combinationCount++;
            if (lvalue + rvalue === magicNumber) {
                console.log(
                    `Combination ${combinationCount} - (${lvalue} + ${rvalue} = ${magicNumber})`
                );
                return;
            }
        }
    }

    console.log(
        `${combinationCount} combinations - neither equals ${magicNumber}`
    );
}

/**
 * 19 - Padawan Equipment
 * @param {number} budget
 * @param {number} studentsCount
 * @param {number} saberPrice
 * @param {number} robePrice
 * @param {number} beltPrice
 */
function logHasBudgetForJediEquipment(
    budget,
    studentsCount,
    saberPrice,
    robePrice,
    beltPrice
) {
    const totalSaberCost = saberPrice * Math.ceil(studentsCount * 1.1);
    const totalRobeCost = robePrice * studentsCount;
    const totalBeltPrice =
        beltPrice * (studentsCount - Math.floor(studentsCount / 6));
    const total = totalBeltPrice + totalRobeCost + totalSaberCost;

    if (total <= budget) {
        console.log(
            `The money is enough - it would cost ${total.toFixed(2)}lv.`
        );
    } else {
        console.log(
            `George Lucas will need ${(total - budget).toFixed(2)}lv more.`
        );
    }
}

/**
 * 20 - Rage Expenses
 * @param {number} lostGames
 * @param {number} headsetPrice
 * @param {number} mousePrice
 * @param {number} keyboardPrice
 * @param {number} displayPrice
 */
function logRageExpenses(
    lostGames,
    headsetPrice,
    mousePrice,
    keyboardPrice,
    displayPrice
) {
    const totalHeadsetCost = headsetPrice * Math.floor(lostGames / 2);
    const totalMouseCost = mousePrice * Math.floor(lostGames / 3);
    const totalKeyboardCost = keyboardPrice * Math.floor(lostGames / 6);
    const totalDispalyCost = displayPrice * Math.floor(lostGames / 12);
    const total =
        totalHeadsetCost +
        totalMouseCost +
        totalKeyboardCost +
        totalDispalyCost;
    console.log(`Rage expenses: ${total.toFixed(2)} lv.`);
}

/**
 * 21 - Refactor Sum of Odd Numbers
 * @param {number} n
 */
function summOddNumbers(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        const curr = 2 * i + 1;
        console.log(curr);
        sum += curr;
    }
    console.log(`Sum: ${sum}`);
}

/**
 * 22 - Numbers up to 1000, ending in 7
 */
function logEndingOn7NumbersTill1000() {
    for (let curr = 7; curr <= 1000; curr += 10) {
        console.log(curr);
    }
}

/**
 * 23 - Numbers up to 1000, ending in n
 * @param {number} endingOn
 */
function logEndingOnNNumbersTill1000(endingOn) {
    for (let curr = endingOn; curr <= 1000; curr += 10) {
        console.log(curr);
    }
}

/**
 * 24 - Encoding
 * @param {number} input
 */
function logEncoding(input) {
    if (input === 0) {
        console.log("ZERO");
        return;
    }
    while (input !== 0) {
        const digit = input % 10;
        input = Math.floor(input / 10);
        if (digit === 0) {
            console.log("ZERO");
        } else {
            console.log(String.fromCharCode(33 + digit).repeat(digit));
        }
    }
}

/**
 * 25 - Coins and Notes
 * @param {number} levCount
 * @param {number} twoLevCount
 * @param {number} fiveLevCount
 * @param {number} neededSum
 */
function logMoneyCombinations(levCount, twoLevCount, fiveLevCount, neededSum) {
    for (let oneLev = 0; oneLev <= levCount; oneLev++) {
        for (let twoLev = 0; twoLev <= twoLevCount; twoLev++) {
            for (let fiveLev = 0; fiveLev <= fiveLevCount; fiveLev++) {
                const curr = oneLev + twoLev * 2 + fiveLev * 5;
                if (curr === neededSum) {
                    console.log(
                        `${oneLev} * 1 lv. + ${twoLev} * 2 lv. + ${fiveLev} * 5 lv. = ${neededSum} lv.`
                    );
                }
            }
        }
    }
}

/**
 * 26 - Even Pairs
 * @param {number} startFstPair Start of first pair
 * @param {number} startSndPair Start of second pair
 * @param {number} diffFstPair Difference with end of first pair
 * @param {number} diffSndPair Difference with end of second pair
 */
function logEvenPairsNumbers(
    startFstPair,
    startSndPair,
    diffFstPair,
    diffSndPair
) {
    for (
        let fstPair = startFstPair;
        fstPair <= startFstPair + diffFstPair;
        fstPair++
    ) {
        if (!isPrime(fstPair)) {
            continue;
        }
        for (
            let sndPair = startSndPair;
            sndPair <= startSndPair + diffSndPair;
            sndPair++
        ) {
            if (!isPrime(sndPair)) {
                continue;
            }
            console.log(`${fstPair}${sndPair}`);
        }
    }
}

/**
 * Helper function for "26 - Even Pairs"
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    const max = Math.ceil(num / 2);
    for (let i = 2; i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * 27 - Change
 * @param {number} money Amount of money
 */
function logCoinCount(money) {
    let coinCount = 0;
    money *= 100;
    while (money >= 200) {
        money -= 200;
        coinCount++;
    }
    while (money >= 100) {
        money -= 100;
        coinCount++;
    }
    while (money >= 50) {
        money -= 50;
        coinCount++;
    }
    while (money >= 20) {
        money -= 20;
        coinCount++;
    }
    while (money >= 10) {
        money -= 10;
        coinCount++;
    }
    while (money >= 5) {
        money -= 5;
        coinCount++;
    }
    while (money >= 2) {
        money -= 2;
        coinCount++;
    }
    while (money >= 1) {
        money -= 1;
        coinCount++;
    }
    console.log(coinCount);
}

/**
 * 28 - Pyramid of numbers
 * @param {number} input
 */
function logNumberPyramid(input) {
    for (let curr = 1, row = 1; curr <= input; row++) {
        let sequence = "";
        for (let col = 0; col < row && curr <= input; col++) {
            sequence += curr;
            if (col + 1 < row) {
                sequence += " ";
            }
            curr++;
        }
        console.log(sequence);
    }
}

/**
 * 29 - Unique codes
 * @param {number} fstLimit Upper limit of first digit
 * @param {number} sndLimit Upper limit of second digit
 * @param {number} trdLimit Upper limit of third digit
 */
function logUniqueCodes(fstLimit, sndLimit, trdLimit) {
    for (let fstDigit = 2; fstDigit <= fstLimit; fstDigit += 2) {
        for (
            let sndDigit = 2;
            sndDigit <= sndLimit && sndDigit <= 7;
            sndDigit++
        ) {
            for (let trdDigit = 2; trdDigit <= trdLimit; trdDigit += 2) {
                if (!isPrime(sndDigit)) {
                    break;
                }
                console.log(`${fstDigit}${sndDigit}${trdDigit}`);
            }
        }
    }
}

/**
 * 30 - Square of Asterisks
 * @param {number} size Size of square
 */
function logSquareOfAsterisks(size) {
    const side = "*".repeat(size);
    for (let row = 0; row < size; row++) {
        console.log(side);
    }
}

/**
 * 31 - Half-Rhombus from asterisks
 * @param {number} size
 */
function logHalfRhombus(size) {
    for (let row = 1; row <= size; row++) {
        console.log("*".repeat(row));
    }
    for (let row = size - 1; row > 0; row--) {
        console.log("*".repeat(row));
    }
}

/**
 * 32 - Rhombus from asterisks
 * @param {number} size
 */
function logRhombus(size) {
    for (let row = 1; row <= size; row++) {
        console.log(`${" ".repeat(size - row)}${"* ".repeat(row)}`);
    }
    for (let row = size - 1; row > 0; row--) {
        console.log(`${" ".repeat(size - row)}${"* ".repeat(row)}`);
    }
}

/**
 * 33 - Tree Pattern
 * @param {number} height
 */
function logTree(height) {
    for (
        let row = 1, asterixCount = 1;
        row <= height;
        row++, asterixCount += 2
    ) {
        console.log(`${" ".repeat(height - row)}${"*".repeat(asterixCount)}`);
    }
    console.log(`${" ".repeat(height - 1)}*`);
}

/**
 * 34 - Square frame
 * @param {number} side The size of the side
 */
function logSquareFrame(side) {
    if (side < 2) {
        console.error("Can't log square frame with side <2");
        return;
    }
    console.log(`+ ${"- ".repeat(side - 2)}+`);
    for (let row = 2; row < side; row++) {
        console.log(`| ${"- ".repeat(side - 2)}|`);
    }
    console.log(`+ ${"- ".repeat(side - 2)}+`);
}

/**
 * 35 - Christmas Tree
 * @param {number} height
 */
function logChristmasTree(height) {
    for (let row = 0, asterixCount = 0; row <= height; row++, asterixCount++) {
        console.log(
            `${" ".repeat(height - row)}${"*".repeat(
                asterixCount
            )} | ${"*".repeat(asterixCount)}`
        );
    }
}

/**
 * 36 - Sunglasses
 * @param {number} height
 */
function logSunglasses(height) {
    console.log(
        `${"*".repeat(2 * height)}${" ".repeat(height)}${"*".repeat(
            2 * height
        )}`
    );
    for (let row = 2; row < height; row++) {
        if (row === Math.ceil(height / 2)) {
            console.log(
                `*${"/".repeat(2 * height - 2)}*${"|".repeat(
                    height
                )}*${"/".repeat(2 * height - 2)}*`
            );
            continue;
        }
        console.log(
            `*${"/".repeat(2 * height - 2)}*${" ".repeat(height)}*${"/".repeat(
                2 * height - 2
            )}*`
        );
    }

    console.log(
        `${"*".repeat(2 * height)}${" ".repeat(height)}${"*".repeat(
            2 * height
        )}`
    );
}

/**
 * 37 - House Pattern
 * @param {number} baseSize
 */
function logHousePattern(baseSize) {
    const start = baseSize % 2 === 0 ? 2 : 1;
    for (
        let asterixCount = start;
        asterixCount <= baseSize;
        asterixCount += 2
    ) {
        console.log(
            `${" ".repeat(baseSize - asterixCount)}${"* ".repeat(asterixCount)}`
        );
    }
    console.log(`* ${"  ".repeat(baseSize - 2)}*`);
    console.log(`* ${"  ".repeat(baseSize - 2)}*`);
}

/**
 * 38 - Pyramid with Increasing Digits
 * @param {number} height
 */
function logPyramidWithIncreasingDigit(height) {
    for (let row = 1; row <= height; row++) {
        let digit = row;
        let rowSequence = "";
        for (let col = 0; col < row; col++, digit++) {
            rowSequence += digit;
        }
        digit -= 2;
        for (let col = row - 1; col > 0; col--, digit--) {
            rowSequence += digit;
        }
        console.log(`${" ".repeat(height - row)}${rowSequence}`);
    }
}

/**
 * 39 - Arrow Pattern
 * @param {number} rowsCount
 */
function logArrowPattern(rowsCount) {
    for (
        let row = 1, asterixCount = 1;
        row < rowsCount;
        row++, asterixCount++
    ) {
        console.log(
            `${" ".repeat(rowsCount - row)}${"* ".repeat(asterixCount)}`
        );
    }
    let whiteSpaces = 0;
    if (rowsCount % 2 === 0) {
        whiteSpaces = Math.floor(rowsCount / 2);
    } else {
        whiteSpaces = Math.floor(rowsCount / 2) + 1;
    }
    for (let row = 1; row < rowsCount; row++) {
        console.log(`${" ".repeat(whiteSpaces)}${"*".repeat(rowsCount - 1)}`);
    }
}

/**
 * 40 - Staircase Pattern
 * @param {number} baseSize
 */
function logStaircasePattern(baseSize) {
    for (let row = 1, whiteSpaces = 1; row <= baseSize; row++) {
        if (row > 3) {
            whiteSpaces += row - 2;
        }
        console.log(
            `${" ".repeat(row > 2 ? whiteSpaces : 0)}${"#".repeat(row)}`
        );
    }
}

/**
 * 41 - Hourglass Pattern
 * @param {number} size
 */
function logHourglass(size) {
    console.log("#".repeat(size + 2));
    let whiteSpaces = size - 2;
    for (let row = 1; row < Math.ceil(size / 2); row++, whiteSpaces -= 2) {
        console.log(`${" ".repeat(row)}#${" ".repeat(whiteSpaces)}#`);
    }
    whiteSpaces += 2;
    console.log(`${" ".repeat(Math.ceil(size / 2))}${"#".repeat(whiteSpaces)}`);
    for (let row = Math.ceil(size / 2) - 1; row >= 1; row--, whiteSpaces += 2) {
        console.log(`${" ".repeat(row)}#${" ".repeat(whiteSpaces)}#`);
    }
    console.log("#".repeat(size + 2));
}

/**
 * 42 - Left Arrow Pattern
 * @param {number} size
 */
function logLeftArrow(size) {
    for (let row = 1; row < size; row++) {
        console.log(`${" ".repeat(size - row)}${"*".repeat(row)}`);
    }
    for (let row = size - 2; row > 0; row--) {
        console.log(`${" ".repeat(size - row)}${"*".repeat(row)}`);
    }
}

/**
 * 43 - Pyramid of numbers Same as 28
 * @see logNumberPyramid(input)
 */

/**
 * 44 - Alternative conditions
 * @param {number} input
 * @see logNumberPyramid(input) for non reversed
 */
function logReversedNumberPyramid(input) {}

/**
 * 45 - Equal sum of odd and even positions
 * @param {number} from
 * @param {number} to
 */
function logNumsWithEqualSumOddEvenIndexes(from, to) {
    let hasSpecialNum = false;
    for (let curr = from; curr <= to; curr++) {
        let temp = curr;
        let evenSum = 0;
        let oddSum = 0;
        for (let index = 0; temp !== 0; index++) {
            if (index % 2 === 0) {
                evenSum += temp % 10;
            } else {
                oddSum += temp % 10;
            }
            temp = Math.floor(temp / 10);
        }
        if (evenSum === oddSum) {
            console.log(curr);
            hasSpecialNum = true;
        }
    }
    if (!hasSpecialNum) {
        console.log("None");
    }
}

/**
 * 46 - Password Generator
 * @param {number} maxDigitInd
 * @param {number} maxLetterInd
 */
function logGeneratedPasswords(maxDigitInd, maxLetterInd) {
    for (let fstSymbol = 1; fstSymbol <= maxDigitInd; fstSymbol++) {
        for (let sndSymbol = 1; sndSymbol <= maxDigitInd; sndSymbol++) {
            for (let trdSymbol = 0; trdSymbol < maxLetterInd; trdSymbol++) {
                for (
                    let forthSymbol = 0;
                    forthSymbol < maxLetterInd;
                    forthSymbol++
                ) {
                    for (
                        let fifthSymbol = Math.max(fstSymbol, sndSymbol) + 1;
                        fifthSymbol <= maxDigitInd;
                        fifthSymbol++
                    ) {
                        const letterACode = "a".charCodeAt(0);
                        const trdLetter = String.fromCharCode(
                            letterACode + trdSymbol
                        );
                        const forthLetter = String.fromCharCode(
                            letterACode + forthSymbol
                        );
                        console.log(
                            `${fstSymbol}${sndSymbol}${trdLetter}${forthLetter}${fifthSymbol}`
                        );
                    }
                }
            }
        }
    }
}

/**
 * 47 - Special numbers
 * @param {number} input
 */
function logSpecialNumbers(input) {
    for (let curr = 1111; curr < 9999; curr++) {
        let temp = curr;
        let isSpecial = true;
        while (temp !== 0) {
            const digit = temp % 10;
            temp = Math.floor(temp / 10);
            if (input % digit !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) {
            console.log(curr);
        }
    }
}
