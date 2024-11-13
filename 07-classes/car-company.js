//@ts-check
class Car {
    /**
     *
     * @param {string} brand
     * @param {string} model
     * @param {string} produced
     */
    constructor(brand, model, produced) {
        /**
         * @type {string}
         * @private
         */
        this._brand = brand.trim();
        /**
         * @type {string}
         * @private
         */
        this._model = model.trim();
        /**
         * @type {number}
         * @private
         */
        this._produced = Number.parseInt(produced.trim());
    }
    /**
     * @returns {string}
     */
    get model() {
        return this._model;
    }

    /**
     * @returns {number}
     */
    get produced() {
        return this._produced;
    }

    /**
     * @param {number} produced
     */
    set produced(produced) {
        this._produced = produced;
    }

    /**
     * @returns {string}
     */
    toString() {
        return `${this.model} -> ${this._produced}`;
    }
}

class CarShop {
    /**
     *
     * @param {string[]} cars
     */
    constructor(cars) {
        /**
         * @type {Map<string,Car[]>}
         * @private
         */
        this.cars = new Map();
        this.extractAllCars(cars);
    }

    /**
     * @private
     * @param {string[]} cars
     */
    extractAllCars(cars) {
        for (let index = 0; index < cars.length; index++) {
            let props = cars[index].split("|");
            const brand = props[0];
            if (!this.cars.has(brand)) {
                this.cars.set(brand, [new Car(props[0], props[1], props[2])]);
                continue;
            }
            let carList = this.cars.get(brand);
            if (!carList) {
                continue;
            }
            let carInd = carList.findIndex(
                (car) => car.model === props[1].trim()
            );
            if (carInd !== -1) {
                carList[carInd].produced =
                    carList[carInd].produced + Number.parseInt(props[2].trim());
            } else {
                carList.push(new Car(props[0], props[1], props[2]));
            }
        }
    }

    /**
     *
     * @returns {string}
     */
    toString() {
        let line = "";
        this.cars.forEach((carList, brand) => {
            line += `${brand}\n`;
            carList.forEach((car) => {
                line += `###${car.toString()}\n`;
            });
        });
        return line;
    }
}
let carCompany = new CarShop([
    "Audi | Q7 | 1000",
    "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
    "Citroen | C5 | 10",
]);
console.log(carCompany.toString());
