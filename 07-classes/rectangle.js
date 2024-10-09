//@ts-check

class Rectangle {
    /**
     * @param {number} width
     * @param {number} height
     * @param {string} color
     */
    constructor(width, height, color) {
        /**
         * @type {number}
         * @private
         */
        this._width = width;
        /**
         * @type {number}
         * @private
         */
        this._height = height;
        /**
         * @type {string}
         * @private
         */
        this._color = color;
    }

    /**
     * @returns {number}
     */
    get width() {
        return this._width;
    }

    /**
     * @returns {number}
     */
    get height() {
        return this._height;
    }

    /**
     * @returns {string}
     */
    get color() {
        return this._color;
    }

    /**
     * @returns {number}
     */
    calcArea() {
        return this.height * this.width;
    }
}

let rect = new Rectangle(4, 5, "Red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
