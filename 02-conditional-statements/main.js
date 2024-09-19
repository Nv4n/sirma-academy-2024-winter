//@ts-check

/**
 * 02 - Check for an excellent rating
 * @param {number} grade
 */
function isExcelent(grade) {
    if (grade >= 5.5) {
        console.log("Excellent!");
    }
}

/**
 * 03 - Larger number
 * @param {number} lnum
 * @param {number} rnum
 * @returns {void}
 */
function getMaxNum(lnum, rnum) {
    if (lnum > rnum) {
        console.log(lnum);
        return;
    }
    console.log(rnum);
}

/**
 * 04 - Number from 0 to 9 in words
 * @param {number} num from 0 to 9,
 * else you get 'too big'
 */
function getNumberAsWord(num) {
    const numbersAsWord = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    if (num >= 0 && num <= 9) {
        console.log(numbersAsWord[num]);
    } else if (num > 9) {
        console.log("too big");
    } else if (num < 0) {
        console.log("too small");
    }
}

/**
 * 05 - Face of figures
 * @param {string} figure
 * @param  {number} sideA
 * @param {number} sideB
 * @returns {void}
 */
function faceOfFigures(figure, sideA, sideB = 0) {
    let face = 0;
    switch (figure) {
        case "square":
        case "circle":
            face = sideA ** 2;
            break;
        case "rectangle":
            face = sideA * sideB;
            break;
        case "triangle":
            face = (sideA * sideB) / 2;
            break;
        default:
            console.log("can't find this figure");
            return;
    }
    console.log(face.toFixed(2));
}

/**
 * 06 - Day of the week
 * @param {number} day
 */
function dayOfWeek(day) {
    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    if (day >= 1 && day <= 7) {
        console.log(daysOfWeek[day]);
    } else {
        console.log("ERROR");
    }
}

/**
 * 07 - Even or odd
 * @param {number} num
 */
function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

/**
 * 08 - Speed
 * @param {number} speed
 */
function logSpeedMeter(speed) {
    if (speed > 160) {
        console.log("turbo-fast");
    } else if (speed >= 120) {
        console.log("super-fast");
    } else if (speed >= 60) {
        console.log("fast");
    } else if (speed > 10) {
        console.log("average");
    } else {
        console.log("slow");
    }
}

/**
 * 09 - Alarm after 15 minutes
 * @param {number} hours
 * @param {number} mins
 */
function getTimeAfter15Mins(hours, mins) {
    mins = mins + 15;
    if (mins > 60) {
        mins = mins % 60;
        hours = (hours + 1) % 24;
    }
    console.log(`${hours}:${mins.toString().padStart(2, "0")}`);
}

/**
 * 10 - Address by age and gender
 * @param {number} age
 * @param {string} gender
 */
function addressByAgeAndGenger(age, gender) {
    if (gender === "m") {
        console.log(age < 16 ? "Master" : "Mr.");
    } else if (gender === "f") {
        console.log(age < 16 ? "Miss" : "Ms.");
    } else {
        console.log("ERROR");
    }
}

/**
 * @typedef {Object} PriceListCity
 * @prop {number} tea
 * @prop {number} water
 * @prop {number} juice
 * @prop {number} sweets
 * @prop {number} chips
 */

/**
 * @typedef {Object} PriceList
 * @prop {PriceListCity} Sofia
 * @prop {PriceListCity} Plovdiv
 * @prop {PriceListCity} Varna
 */

/**
 *
 */

/**
 * 11 - Grocery
 * @param {string} item
 * @param {string} city
 * @param {number} quantity
 */
function logShoppingPrice(item, city, quantity) {
    /**
     * @type {PriceList}
     */
    const priceList = {
        Sofia: {
            tea: 0.5,
            water: 0.8,
            juice: 1.2,
            sweets: 1.45,
            chips: 1.6,
        },
        Plovdiv: {
            tea: 0.4,
            water: 0.7,
            juice: 1.15,
            sweets: 1.3,
            chips: 1.5,
        },
        Varna: {
            tea: 0.45,
            water: 0.7,
            juice: 1.1,
            sweets: 1.35,
            chips: 1.55,
        },
    };
    if (!(city === "Sofia" || city === "Plovdiv" || city === "Varna")) {
        console.log("ERROR: invalid city");
        return;
    }
    if (
        item !== "tea" &&
        item !== "water" &&
        item !== "juice" &&
        item !== "sweets" &&
        item !== "chips"
    ) {
        console.log("ERROR: invalid item");
        return;
    }
    if (quantity <= 0) {
        console.log("ERROR: invalid quantity");
    }
    console.log(priceList[city][item] * quantity);
}

/**
 * 12 - Number in the range
 * @param {number} num
 */
function logIsNumberInRange(num) {
    if (num < -100 || num > 100 || num === 0) {
        console.log("No");
    } else {
        console.log("Yes");
    }
}

/**
 * 13 - Simple Calculator
 * @param {number} lval
 * @param {number} rval
 * @param {string} operation
 */
function simpleCalculate(lval, rval, operation) {
    if (operation === "add") {
        console.log(lval + rval);
    } else if (operation === "subtract") {
        console.log(lval - rval);
    } else if (operation === "divide") {
        if (rval === 0) {
            console.log("ERROR: can't divide by 0");
        } else {
            console.log(lval / rval);
        }
    } else if (operation === "multiply") {
        console.log(lval * rval);
    } else {
        console.log("ERROR: Invalid operation");
    }
}

/**
 * 14 - Vegetable Market
 * @param {string} item
 * @param {string} day
 * @param {number} quantity
 */
function getMarketPrice(item, day, quantity) {
    const prices = {
        cheap: {
            tomato: 2.5,
            onion: 1.2,
            lettuce: 0.85,
            cucumber: 1.45,
            pepper: 5.5,
        },
        expensive: {
            tomato: 2.8,
            onion: 1.3,
            lettuce: 0.85,
            cucumber: 1.75,
            pepper: 3.5,
        },
    };
    switch (day) {
        case "Saturday":
        case "Sunday":
            if (
                item !== "tomato" &&
                item !== "onion" &&
                item !== "lettuce" &&
                item !== "cucumber" &&
                item !== "pepper"
            ) {
                console.error("ERROR: invalid item");
            } else {
                const total = prices.expensive[item] * quantity;
                console.log(total.toFixed(2));
            }
            break;
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (
                item !== "tomato" &&
                item !== "onion" &&
                item !== "lettuce" &&
                item !== "cucumber" &&
                item !== "pepper"
            ) {
                console.error("ERROR: invalid item");
            } else {
                const total = prices.cheap[item] * quantity;
                console.log(total.toFixed(2));
            }
            break;
        default:
            console.error("ERROR: Invalid day");

            break;
    }
}

/**
 * 15 - Holiday
 * @param {number} budget
 * @param {string} season
 * @returns {void}
 */
function decideMyVacation(budget, season) {
    if (season !== "summer" && season !== "winter") {
        console.error("ERROR: Invalid season");
        return;
    }
    if (budget < 10 || budget > 5000) {
        console.error("ERROR: Invalid budget range");
        return;
    }

    let destination = "";
    let restingStation = "";
    let total = 0;
    if (season === "summer") {
        if (budget < 1000) {
            restingStation = "Camp";
        } else {
            restingStation = "Hotel";
        }
    } else {
        restingStation = "Hotel";
    }

    if (budget > 1000) {
        destination = "Asia";
        total = 0.9 * budget;
    } else if (budget > 100) {
        destination = "Europe";
        if (season === "summer") {
            total = budget * 0.4;
        } else {
            total = budget * 0.8;
        }
    } else {
        destination = "Bulgaria";
        if (season === "summer") {
            total = budget * 0.3;
        } else {
            total = budget * 0.7;
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${restingStation} - ${total.toFixed(2)}`);
}

/**
 * 16 - Makeup Shop
 * @param {number} renovationPrice
 * @param {number} powderQuantity
 * @param {number} lipstickQuantity
 * @param {number} spiralQuantity
 * @param {number} shadowsQuantity
 * @param {number} correctorsQuantity
 */
function canWeRenovate(
    renovationPrice,
    powderQuantity,
    lipstickQuantity,
    spiralQuantity,
    shadowsQuantity,
    correctorsQuantity
) {
    let totalProfit =
        powderQuantity * 2.6 +
        lipstickQuantity * 3 +
        spiralQuantity * 4.1 +
        shadowsQuantity * 8.2 +
        correctorsQuantity * 2;

    const productCount =
        powderQuantity +
        lipstickQuantity +
        spiralQuantity +
        shadowsQuantity +
        correctorsQuantity;
    if (productCount >= 50) {
        totalProfit *= 0.75;
    }
    totalProfit *= 0.9;
    if (renovationPrice - totalProfit <= 0) {
        console.log(
            `Yes! ${(totalProfit - renovationPrice).toFixed(2)} BGN left.`
        );
    } else {
        console.log(
            `Not enough money! ${(renovationPrice - totalProfit).toFixed(
                2
            )} BGN needed.`
        );
    }
}

/**
 * 17 - At sea
 * @param {number} days
 * @param {string} roomType
 * @param {string} serviceStatus
 */
function logVacationCost(days, roomType, serviceStatus) {
    const nights = days - 1;
    let vacationCost = 0;
    if (roomType === "single room") {
        vacationCost = 25 * nights;
    } else if (days > 15) {
        if (roomType === "apartment") {
            vacationCost = 50 * nights * 0.5;
        } else {
            vacationCost = 100 * nights * 0.8;
        }
    } else if (days > 10) {
        if (roomType === "apartment") {
            vacationCost = 50 * nights * 0.65;
        } else {
            vacationCost = 100 * nights * 0.85;
        }
    } else {
        if (roomType === "apartment") {
            vacationCost = 50 * nights * 0.7;
        } else {
            vacationCost = 100 * nights * 0.9;
        }
    }

    if (serviceStatus === "positive") {
        vacationCost *= 1.25;
    } else {
        vacationCost *= 0.9;
    }

    console.log(vacationCost.toFixed(2));
}

/**
 * 18 - Grade Calculator
 * @param {number} scorePercentage
 */
function logGrade(scorePercentage) {
    if (scorePercentage >= 90) {
        console.log("A");
    } else if (scorePercentage >= 80) {
        console.log("B");
    } else if (scorePercentage >= 70) {
        console.log("C");
    } else if (scorePercentage >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}

/**
 * 19 - Leap Year Checker
 * @param {number} year
 */
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            console.log("It's not a leap year.");
        } else {
            console.log("It's a leap year!");
        }
    } else {
        console.log("It's not a leap year.");
    }
}

/**
 * 20 - Movie Ticket Price
 * @param {number} age
 */
function logMoviePrice(age) {
    if (age >= 20) {
        console.log("$10");
    } else if (age >= 13) {
        console.log("$8");
    } else {
        console.log("$5");
    }
}

/**
 * 21 - Days in a Month
 * @param {number} month
 */
function getDaysInMonth(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(31);
            break;
        case 2:
            console.log(28);
            break;
        default:
            console.log(30);
    }
}
/**
 * 22 - University Admissions
 * @param {number} score
 * @param {number} extracurriculars
 */
function isAdmitted(score, extracurriculars) {
    if (score >= 90) {
        console.log("Admitted");
    } else if (score >= 80 && extracurriculars >= 2) {
        console.log("Admitted");
    } else {
        console.log("Not admitted");
    }
}

/**
 * 23 - Discount Calculator
 * @param {number} age
 * @param {string} hasMembership
 */
function calculateDiscount(age, hasMembership) {
    let discount = 0;
    if (age >= 65) {
        discount = 30;
    } else if (age >= 18) {
        if (hasMembership === "Yes") {
            discount = 20;
        } else {
            discount = 10;
        }
    } else {
        discount = 10;
    }
    console.log(`${discount}% discount`);
}

/**
 * 24 - Movie Classification
 * @param {number} age
 */
function getMovieClassification(age) {
    if (age >= 18) {
        console.log("All movies");
    } else if (age >= 13) {
        console.log("U and PG-13 rated movies");
    } else {
        console.log("Only U-rated movies");
    }
}

/**
 * 25 - Airline Luggage Charges
 * @param {number} weight
 * @param {number} dimensionSum
 */
function getLuggageFee(weight, dimensionSum) {
    
}
