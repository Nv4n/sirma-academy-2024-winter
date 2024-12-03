(function () {
    /**
     *
     * @param {string} str
     */
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return `${str}${this}`;
        }
        return this;
    };

    /**
     *
     * @param {string} str
     */
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return `${this}${str}`;
        }
        return this;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.capitalize = function () {
        return `${this.charAt(0).toUpperCase()}${this.slice(1)}`;
    };

    /**
     *
     * @param {number} n
     */
    String.prototype.truncateWords = function (n) {
        let splitted = this.split(" ");
        if (splitted.length > n) {
            return splitted.slice(0, n).join(" ") + "...";
        }
        return this;
    };
})();

let test = "gosho Tosho Trosho";

console.log(test.ensureStart("shot"));
