//@ts-check

class Cat {
    /**
     * @param {string} name
     * @param {number} age
     */
    constructor(name, age) {
        /**
         * @private
         * @type {string}
         */
        this.name = name;

        /**
         * @private
         * @type {number}
         */
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says meow`);
    }
}

/**
 * 01 - Cat
 * @param {string[]} kittens
 */
function catFactory(kittens) {
    for (let index = 0; index < kittens.length; index++) {
        const catValues = kittens[index].split(" ");

        const cat = new Cat(catValues[0], Number.parseInt(catValues[1]));
        cat.meow();
    }
}

catFactory(["Mellon 2", "Tom 3"]);
console.log("========");
catFactory(["Branch 1", "Poppy 3", "Goldy 2"]);
