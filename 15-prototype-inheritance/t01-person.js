//@ts-check

/**
 * @typedef {Object} PersonObj
 * @prop {string} firstName
 * @prop {string} lastName
 * @prop {string} fullName
 */

/**
 * 01 - Person
 * @param {string} firstName
 * @param {string} lastName
 * @returns {PersonObj} Person
 */
function createPerson(firstName, lastName) {
    let result = {
        firstName: firstName,
        lastName: lastName,
        get fullName() {
            return this.firstName + " " + this.lastName;
        },
    };
    
    return result;
}

const person = createPerson("Gosho", "Toshev");
console.log(person.fullName);
person.firstName = "Teodor";
console.log(person.fullName);
