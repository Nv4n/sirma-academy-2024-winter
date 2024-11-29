//@ts-check

function getClasses() {
    class Figure {
        /**
         * @param {string} units
         */
        constructor(units = "cm") {
            this.units = units;
        }
        /**
         * @returns {number}
         */
        get area() {
            return 1;
        }

        /**
         * @param {string} newUnit
         */
        changeUnits(newUnit) {
            this.units = newUnit;
        }
        /**
         * @returns {string}
         */
        toString() {
            return `Figure: ${this.area} ${this.units}`;
        }
    }

    class Circle extends Figure {
        /**
         *
         * @param {number} radius
         * @param {string} units
         */
        constructor(radius, units = "cm") {
            super(units);
            this.radius = radius;
        }
        get area() {
            return this.radius ** 2 * Math.PI;
        }
        toString() {
            return `Circle: ${this.area} ${this.units}`;
        }
    }

    class Rectangle extends Figure {
        /**
         *
         * @param {number} width
         * @param {number} height
         * @param {string} units
         */
        constructor(width, height, units = "cm") {
            super(units);
            this.width = width;
            this.height = height;
        }
        get area() {
            return this.width * this.height;
        }
        toString() {
            return `Rectangle: ${this.area} ${this.units}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    };
}

console.log(getClasses());
const f = new (getClasses().Circle)(5);
console.log(f.toString());
