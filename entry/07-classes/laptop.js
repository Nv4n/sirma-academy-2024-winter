//@ts-cehck

/**
 * @typedef {Object} LaptopInfo
 * @prop {string} producer
 * @prop {number} age
 * @prop {string} brand
 */

class Laptop {
    /**
     *
     * @param {LaptopInfo} info
     * @param {number} quality
     */
    constructor(info, quality) {
        /**
         * @private
         * @type {LaptopInfo}
         */
        this.info = info;
        /**
         * @private
         * @type {number}
         */
        this.quality = quality;

        /**
         * @private
         * @type {boolean}
         */
        this.isOn = false;
    }

    turnOn() {
        this.quality--;
        this.isOn = true;
    }
    turnOff() {
        this.quality--;
        this.isOn = false;
    }
    /**
     * @returns {string}
     */
    showInfo() {
        return JSON.stringify(this.info);
    }

    /**
     * @returns {number}
     */
    get price() {
        return 800 - this.info.age * 2 + this.quality * 0.5;
    }
}

/**
 * @type {LaptopInfo}
 */
let info = { producer: "Asus", age: 2, brand: "Zenbook" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);
console.log("");

/**
 * @type {LaptopInfo}
 */
let info2 = { producer: "Lenovo", age: 1, brand: "Legion" };
let laptop2 = new Laptop(info2, 10);
laptop2.turnOn();
console.log(laptop2.showInfo());
laptop2.turnOff();
laptop2.turnOn();
laptop2.turnOff();
console.log(laptop2.isOn);
