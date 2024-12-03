(function () {
    // let proto = Array.prototype;
    // Object.defineProperty(Array.prototype, "first", {
    //     value: () => {
    //         console.log(this);
    //         return this.at(0);
    //     },
    // });
    Array.prototype.first = function () {
        console.log(this);
        return this[0];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.product = function () {
        return this.reduce((acc, curr) => acc * curr, 1);
    };

    Array.prototype.unique = function () {
        console.log(this);
        return [...new Set(this.values())];
    };
})();

let something = [1, 2, 3, 4, 5, 6];
