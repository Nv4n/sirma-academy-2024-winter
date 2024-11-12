//@ts-check

class List {
    constructor() {
        /**
         * @type {number[]}
         * @private
         */
        this.elements = [];
    }
    /**
     * @param {number} element
     */
    add(element) {
        this.elements.push(element);
        this.elements.sort();
    }

    /**
     *
     * @param {number} index
     */
    remove(index) {
        if (index >= 0 && index < this.elements.length) {
            this.elements.splice(index, 1);
        }
    }

    /**
     *
     * @param {number} index
     * @returns {number}
     */
    get(index) {
        if (index >= 0 && index < this.elements.length) {
            return this.elements[index];
        }
        throw new Error("Index out of range");
    }

    /**
     * @returns {number}
     */
    get length() {
        return this.elements.length;
    }
}

let list = new List();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
