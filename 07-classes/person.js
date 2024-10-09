//@ts-check

class Person {
    /**
     *
     * @param {string} firstName
     * @param {string} lastName
     * @param {number} age
     * @param {string} email
     */
    constructor(firstName, lastName, age, email) {
        /**
         * @private
         * @type {string}
         */
        this.firstName = firstName;
        /**
         * @private
         * @type {string}
         */
        this.lastName = lastName;
        /**
         * @private
         * @type {number}
         */
        this.age = age;
        /**
         * @private
         * @type {string}
         */
        this.email = email;
    }

    /**
     * @returns {string}
     */
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let person = new Person("Homer", "Simpson", 42, "homer@yahoo.com");
console.log(person.toString());

