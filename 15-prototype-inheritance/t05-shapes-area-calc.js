//@ts-check

class Shape {
    /**
     * @returns {number} area
     */
    calculateArea() {
        return 0;
    }
}

class Triangle extends Shape {
    /**
     *
     * @param {number} side
     * @param {number} height
     */
    constructor(side, height) {
        super();
        this.side = side;
        this.height = height;
    }

    calculateArea() {
        const precision = 10 ** 2;
        const area = (this.height * this.side) / 2;
        return Math.round(area * precision) / precision;
    }
}

class Square extends Shape {
    /**
     *
     * @param {number} side
     */
    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea() {
        const precision = 10 ** 2;
        const area = this.side ** 2;
        return Math.round(area * precision) / precision;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        const precision = 10 ** 2;
        const area = this.radius ** 2 * Math.PI;
        return Math.round(area * precision) / precision;
    }
}
