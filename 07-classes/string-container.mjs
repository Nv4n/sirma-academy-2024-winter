//@ts-check

class StringContainer {
    /**
     *
     * @param {string} value
     * @param {number} length
     */
    constructor(value, length) {
        /**
         * @type {string}
         * @private
         */
        this.innerValue = value;

        /**
         * @type {number}
         * @private
         */
        this.innerLength = length;
    }

    /**
     * @returns {number}
     */
    get length() {
        return this.innerLength;
    }

    /**
     *
     * @param {number} length
     */
    increase(length) {
        this.innerLength += length;
    }

    /**
     *
     * @param {number} length
     */
    decrease(length) {
        this.innerLength = Math.max(this.length - length, 0);
    }

    /**
     * @returns {string}
     */
    toString() {
        let formattedString = "";
        if (this.length < this.innerValue.length) {
            formattedString = `${this.innerValue.slice(0, this.length)}...`;
        } else {
            formattedString = this.innerValue;
        }
        return formattedString;
    }
}

let test = new StringContainer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test
