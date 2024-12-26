"use strict";
//@ts-check

class Instrument {
    /**
     *
     * @param {string} name
     * @param {string} type
     */
    constructor(name, type) {
        /**
         * @type {string}
         */
        this.name = name;
        /** @type {string} */
        this.type = type;
    }
    /**
     *
     * @returns {string}
     */
    play() {
        return "I'm playing";
    }
    /**
     *
     * @returns {string}
     */
    tune() {
        return "I'm tuning";
    }
}

class StringInstrument extends Instrument {
    /**
     *
     * @param {string} name
     * @param {string} type
     * @param {number} numberOfString
     */
    constructor(name, type, numberOfString) {
        super(name, type);
        /** @type {number} */
        this.numberOfString = numberOfString;
    }
    tune() {
        return `${super.tune()}... For string instrument`;
    }
}

// class PercussionInstrument extends Instrument {
//     constructor(parameters) {
        
//     }
// }
