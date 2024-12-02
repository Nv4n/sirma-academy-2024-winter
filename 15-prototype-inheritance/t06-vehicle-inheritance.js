//@ts-check

class Vehicle {
    /**
     *
     * @param {string} make
     * @param {string} model
     */
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    /**
     *
     * @param {string} make
     * @param {string} model
     * @param {number} doors
     */
    constructor(make, model, doors) {
        super(make, model);
        this.doors = doors;
    }
}

class Bike extends Vehicle {
    /**
     *
     * @param {string} make
     * @param {string} model
     * @param {string} type
     */
    constructor(make, model, type) {
        super(make, model);
        this.type = type;
    }
}
