//@ts-check

class Employee {
    /**
     *
     * @param {string} name
     * @param {number} age
     * @param {number} salary
     * @param {string[]} tasks
     */
    constructor(name, age, salary, tasks) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.tasks = [...tasks];
        if (this.constructor === Employee)
            throw new Error("This is abstract class");
    }
}

/**
 * @extends {Employee}
 */
class Junior extends Employee {
    /**
     *
     * @param {string} name
     * @param {number} age
     * @param {number} salary
     * @param {string[]} tasks
     */
    constructor(name, age, salary, tasks) {
        super(name, age, salary, tasks);
    }

    work() {
        console.log("Writing for loops");
        this.tasks.pop();
    }
    getSalary() {
        console.log(this.salary);
    }
}

/**
 * @extends {Employee}
 */
class Senior extends Employee {
    /**
     *
     * @param {string} name
     * @param {number} age
     * @param {number} salary
     * @param {string[]} tasks
     */
    constructor(name, age, salary, tasks) {
        super(name, age, salary, tasks);
    }

    work() {
        console.log("Thinking and making important decisions");
        this.tasks.pop();
    }
    getSalary() {
        console.log(this.salary);
    }
}

/**
 * @extends {Employee}
 */
class Manager extends Employee {
    /**
     *
     * @param {string} name
     * @param {number} age
     * @param {number} salary
     * @param {string[]} tasks
     */
    constructor(name, age, salary, tasks) {
        super(name, age, salary, tasks);
    }

    work() {
        console.log("Manage team");
        console.log(this.tasks.pop() || "");
    }
    getSalary() {
        console.log(this.salary);
    }
}

let manager = new Manager("Tosho", 34, 3000, ["Scold Gosho"]);
manager.work();
manager.work();
manager.getSalary();
