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


const p = new Person("Gosho", 12);
console.log(p);
