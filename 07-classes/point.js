//@ts-check

class Point {
    /**
     *
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        /**
         * @private
         * @type {number}
         */
        this.x = x;
        /**
         * @private
         * @type {number}
         */
        this.y = y;
    }

    /**
     * @param {Point} p1
     * @param {Point} p2
     * @returns {number}
     */
    static distance(p1, p2) {
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
