//@ts-check

class Employee {
    /**
     *
     * @param {string} name
     * @param {number} salary
     */
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    /**
     *
     * @param {string} name
     * @param {number} salary
     */
    constructor(name, salary) {
        super(name, salary);
    }
}

class Engineer extends Employee {
    /**
     *
     * @param {string} name
     * @param {number} salary
     */
    constructor(name, salary) {
        super(name, salary);
    }
}

/**
 *
 * @param {Employee} person
 */
function calculateBonuses(person) {
    if (person instanceof Manager) {
        return person.salary * 1.1;
    }
    if (person instanceof Engineer) {
        return person.salary * 2;
    }
}
