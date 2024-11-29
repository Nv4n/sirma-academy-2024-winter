//@ts-check

class Person {
    /**
     *
     * @param {string} name
     * @param {number} age
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    /**
     *
     * @param {string} name
     * @param {number} age
     * @param {string} school
     */
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
}
class ExportedStudent extends Student {
    toString() {
        return `${this.name} - ${this.age} - ${this.school}`;
    }
}

// const p = new Person("Gosho", 12);
// console.log(p);

module.exports = { ExportedStudent };
