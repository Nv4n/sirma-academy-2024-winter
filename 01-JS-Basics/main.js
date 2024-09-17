//@ts-check

/**
 * 02 - Hello world logger
 * @returns {void}
 */
function sayHello() {
    console.log("Hello, World!");
}

/**
 * 03 - Different data types
 * Returns different types of data
 * @returns {void}
 */
function printDiffTpes() {
    let num = 100;
    console.log(num);

    let num2 = 3.15;
    console.log(num2);
}

/**
 * 04 - Read User Input - Name
 * Logging people's names
 * @param {string} name Name to be logged
 */
function printName(name) {
    console.log(name);
}

/**
 * 05 - Read different data
 * 06 - Printing
 * @param {string} name
 * @param {number} numOne
 * @param {number} numTwo
 */
function readDataAndPrint(name, numOne, numTwo) {
    console.log(`${name}\n${numOne}\n${numTwo}`);
}

/**
 * 07 - Weather Forecast
 * @param {string} city
 * @param {number} degrees
 */
function getWeatherInCity(city, degrees) {
    console.log(`Today in ${city} it is ${degrees} degrees.`);
}

/**
 * 08 - Kilometers in miles
 * @param {number} kilometer
 */
function kmToMiles(kilometer) {
    console.log(kilometer * 0.621371);
}

/**
 * 09 - Calculate. Give us sum, difference
 * , product and Average of 2 numbers
 * @param {number} numOne left value number
 * @param {number} numTwo right value number
 */
function calculate(numOne, numTwo) {
    console.log(`Sum: ${numOne + numTwo}`);
    console.log(`Difference: ${Math.abs(numOne - numTwo)}`);
    console.log(`Product: ${numOne * numTwo}`);
    console.log(`Average: ${(numOne + numTwo) / 2}`);
}

/**
 * 10 - Square face
 * @param {number} side
 */
function squareFace(side) {
    console.log(side ** 2);
}

/**
 * 11 - Time
 * console.log(`${hours}:${mins});
 *
 * 12 - Time***
 * @param {number} minutes
 */
function minsToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    console.log(`${hours < 10 ? 0 : ""}${hours}:${mins < 10 ? 0 : ""}${mins}`);
}

/**
 * 13 - Painting
 *
 * Red: 0.25*Y; Yellow: Y; White: 2*Y;
 *
 * @param {number} yellowPaint
 */
function getPaintRatio(yellowPaint) {
    const whitePaint = yellowPaint * 2;
    const redPaint = yellowPaint / 4;
    console.log(`Red: ${redPaint}`);
    console.log(`Yellow: ${yellowPaint}`);
    console.log(`White: ${whitePaint}`);
    console.log(`Total: ${yellowPaint + redPaint + whitePaint}`);
}

/**
 * 14 - Console converter: EUR to BGN
 * @param {number} euros
 */
function euroToBgn(euros) {
    const bgn = euros * 1.95583;
    console.log(bgn.toFixed(2));
}

/**
 * 15 - Speed
 * @param {number} meters
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 */
function toMeterPerSecond(meters, hours, minutes, seconds) {
    const time = hours * 60 * 60 + minutes * 60 + seconds;
    const precision = 10 ** 6;
    const speed = meters / time;
    console.log(speed.toFixed(6));
}

/**
 * 16 - Office
 * @param {number} costFirstCabinet
 */
function getCostOfOffice(costFirstCabinet) {
    const costSecondCabinet = 0.8 * costFirstCabinet;
    const costThirdCabinet = 1.15 * (costSecondCabinet + costFirstCabinet);
    const precision = 10 ** 3;
    const total = costFirstCabinet + costSecondCabinet + costThirdCabinet;
    console.log(total.toFixed(3));
}

/**
 * 17 - Journey
 * @param {number} firstCarSpeed
 * @param {number} secondCarSpeed
 */
function distanceBetweenCars(firstCarSpeed, secondCarSpeed) {
    const distanceFstCar = firstCarSpeed * 5;
    const distanceSndCar = secondCarSpeed * 3;
    console.log(Math.abs(distanceFstCar - distanceSndCar));
}

/**
 * 18 - Body Mass Index
 * @param {number} weight
 * @param {number} height
 */
function calculateBMI(weight, height) {
    const bmi = weight / height ** 2;
    console.log(bmi.toFixed(2));
}

/**
 * 19 - Water Consumption
 * @param {number} totalWeeklyWater
 * @param {number} familySize
 */
function getDailyWaterPerPerson(totalWeeklyWater, familySize) {
    const total = (totalWeeklyWater / 7) * familySize;
    console.log(total.toFixed(2));
}

/**
 * 20 - Electricity Bill
 * @param {number} units
 * @param {number} unitRate
 */
function calculateElecticityBill(units, unitRate) {
    const total = units * unitRate + 10;
    console.log(total.toFixed(2));
}

/**
 * 21 - Average Speed
 * @param {number} distance
 * @param {number} hours
 */
function averageSpeed(distance, hours) {
    const avg = distance / hours;
    console.log(avg.toFixed(2));
}

/**
 * 22 - Fuel Efficiency
 * @param {number} distance
 * @param {number} totalFuel
 */
function fuelEfficiency(distance, totalFuel) {
    const fuelUsage = distance / totalFuel;
    console.log(fuelUsage.toFixed(2));
}

/**
 * 23 - Circle Circumference
 * @param {number} radius
 */
function calculateCircleCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(circumference.toFixed(2));
}

calculateCircleCircumference(5);
