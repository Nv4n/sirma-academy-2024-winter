//@ts-check

/**
 * @typedef {Object.<string, Employee[]>} EmployeeList
 */

class Employee {
    /**
     *
     * @param {string | undefined | null} name
     * @param {number | undefined | null} salary
     * @param {string | undefined | null} position
     */
    constructor(name, salary, position) {
        if (!name || !position || !salary) {
            throw new Error("Invalid input!");
        }

        if (salary && salary <= 0) {
            throw new Error("Invalid input!");
        }
        /**
         * @type {string}
         * @private
         */
        this._name = name;
        /**
         * @type {number}
         * @private
         */
        this._salary = salary;
        /**
         * @type {string}
         * @private
         */
        this._position = position;
    }
    /**
     * @returns {string}
     */
    get name() {
        return this._name;
    }

    /**
     * @returns {number}
     */
    get salary() {
        return this._salary;
    }
    /**
     * @returns {string}
     */
    get position() {
        return this._position;
    }
    /**
     *
     * @returns {string}
     */
    toString() {
        return `${this.name} ${this.salary} ${this.position}`;
    }
}

class Company {
    constructor() {
        /**
         * @type { EmployeeList}
         * @private
         */
        this.departments = {};
    }

    /**
     * @param {string | null | undefined} name
     * @param {number | null | undefined} salary
     * @param {string | null | undefined} position
     * @param {string} department
     */
    addEmployee(name, salary, position, department) {
        this.departments[department] ??= [];
        this.departments[department].push(new Employee(name, salary, position));

        console.log(
            `New employee is hired. Name: ${name}. Position: ${position}`
        );
    }

    bestDepartment() {
        let avg = 0;
        let dept = "";
        Object.keys(this.departments).forEach((key) => {
            let curr = 0;
            if (Object.hasOwn(this.departments, key)) {
                curr = this.departments[key].reduce(
                    (sum, curr) => sum + curr.salary,
                    0
                );
                curr = curr / this.departments[key].length;
            }
            if (curr > avg) {
                dept = key;
                avg = curr;
            }
        });
        if (!dept) {
            throw new Error("No department found!");
        }
        let output = `Best Department is: ${dept}\n`;

        output += `Average salary: ${avg.toFixed(2)}\n`;
        this.departments[dept]
            .sort((lemp, remp) => {
                if (lemp.salary === remp.salary) {
                    return lemp.name.localeCompare(remp.name);
                }
                return remp.salary - lemp.salary;
            })
            .forEach((emp) => {
                output += `${emp.toString()}\n`;
            });
        return output;
    }
}

let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "support", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
