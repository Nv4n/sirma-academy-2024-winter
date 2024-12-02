//@ts-check

class Employee {
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

class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
    }
}

class Engineer extends Employee {
    constructor(name, age) {
        super(name, age);
    }
}

/**
 *
 * @param {Employee} person
 */
function calculateBonuses(person) {
    if (person instanceof Manager) {
        return 1;
    }
    if (person instanceof Engineer) {
        return 2;
    }
}
