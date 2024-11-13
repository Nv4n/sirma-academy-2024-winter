//@ts-check

class Ticket {
    /**
     *
     * @param {string} destination
     * @param {string} price
     * @param {string} status
     */
    constructor(destination, price, status) {
        /**
         * @type {string}
         * @private
         */
        this._destination = destination;
        /**
         * @type {number}
         * @private
         */
        this._price = Number.parseFloat(price);
        /**
         * @type {string}
         * @private
         */
        this._status = status;
    }

    /**
     * @returns {string}
     */
    get destination() {
        return this._destination;
    }
    /**
     * @returns {number}
     */
    get price() {
        return this._price;
    }
    /**
     * @returns {string}
     */
    get status() {
        return this._status;
    }
}

class TicketSystem {
    /**
     *
     * @param {string[]} tickets
     * @param {'destination'|'price'|'status'} sortCriteria
     */
    constructor(tickets, sortCriteria) {
        /**
         * @type {Ticket[]}
         * @private
         */
        this.tickets = [];
        this.extractTickets(tickets);
        this.tickets.sort((lval, rval) => {
            switch (sortCriteria) {
                case "destination":
                    let destComparison = lval.destination.localeCompare(
                        rval.destination
                    );
                    if (destComparison === 0) {
                        return 1;
                    }
                    return destComparison;

                case "status":
                    let statusComparison = lval.status.localeCompare(
                        rval.status
                    );
                    if (statusComparison === 0) {
                        return 1;
                    }
                    return statusComparison;

                case "price":
                    if (lval.price === rval.price) {
                        return -1;
                    }
                    return lval.price - rval.price;
            }
        });
    }

    /**
     * @private
     * @param {string[]} tickets
     */
    extractTickets(tickets) {
        for (let index = 0; index < tickets.length; index++) {
            const ticket = tickets[index].split("|");

            this.tickets.push(new Ticket(ticket[0], ticket[1], ticket[2]));
        }
    }

    /**
     * @returns {string}
     */
    toString() {
        let output = "[";
        for (let index = 0; index < this.tickets.length; index++) {
            const element = JSON.stringify(this.tickets[index]);
            output += `Ticket${element}`;
            if (index + 1 < this.tickets.length) {
                output += ",\n";
            }
        }
        output += "]";
        return output.replaceAll("_", "");
    }
}

let ticketSystem = new TicketSystem(
    [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
    ],
    "destination"
);
console.log(ticketSystem.toString());
console.log("");

ticketSystem = new TicketSystem(
    [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
    ],
    "status"
);
console.log(ticketSystem.toString());
