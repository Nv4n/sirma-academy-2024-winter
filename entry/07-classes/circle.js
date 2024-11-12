//@ts-check

class Circle {
    /**
     *
     * @param {number} radius
     */
    constructor(radius) {
        /**
         * @private
         * @type {number}
         */
        this._radius = radius;
    }

    /**
     * @returns {number}
     */
    get radius() {
        return this._radius;
    }

    /**
     * @param {number} value
     */
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            throw new Error("Radius must be greater than zero");
        }
    }

    /**
     * @returns {number}
     */
    get diameter() {
        return this.radius * 2;
    }

    /**
     * @param {number} value
     */
    set diameter(value) {
        this.radius = value / 2;
    }

    /**
     * @method dadada
     * @returns {number}
     */
    get area() {
        return Math.PI * this.radius ** 2;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
