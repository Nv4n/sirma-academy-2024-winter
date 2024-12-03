//@ts-check

class Animal {
    /**
     *
     * @param {string} name
     * @param {number} age
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log("I ate!");
    }

    sleep() {
        console.log("I slept!");
    }
}

class Dog extends Animal {
    /**
     *
     * @param {string} name
     * @param {number} age
     */
    constructor(name, age) {
        super(name, age);
    }
    bark() {
        console.log("Bau Bau!");
    }
}

class Cat extends Animal {
    /**
     *
     * @param {string} name
     * @param {number} age
     */
    constructor(name, age) {
        super(name, age);
    }
    meow() {
        console.log("Meow Meow");
    }
}
