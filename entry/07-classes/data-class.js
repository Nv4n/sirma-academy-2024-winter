//@ts-check

/**
 * @description
 * It's called SirmaRequest instead of Request,
 * because Request is global predefined class in
 * typescript
 */
class SirmaRequest {
    /**
     *
     * @param {string} method
     * @param {string} uri
     * @param {string} version
     * @param {string} message
     */
    constructor(method, uri, version, message) {
        /**
         * @type {string}
         * @private
         */
        this.method = method;
        /**
         * @type {string}
         * @private
         */
        this.uri = uri;
        /**
         * @type {string}
         * @private
         */
        this.version = version;
        /**
         * @type {string}
         * @private
         */
        this.message = message;
        /**
         * @type {string | undefined}
         * @private
         */
        this.response = undefined;
        /**
         * @type {boolean}
         * @private
         */
        this.fulfilled = false;
    }

    /**
     * @returns {string}
     */
    toString() {
        return JSON.stringify(this);
    }
}

let myData = new SirmaRequest("GET", "http://google.com", "HTTP/1.1", "");
console.log(myData);
