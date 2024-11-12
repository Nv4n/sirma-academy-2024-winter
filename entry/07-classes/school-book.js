//@ts-cehck

/**
 * @typedef {Object} GradeInfo
 * @prop {string[]} students
 * @prop {number} avg
 */

class SchoolBook {
    /**
     *
     * @param {string[]} students
     */
    constructor(students) {
        /**
         * @type {Map<number,GradeInfo}
         * @private
         */
        this.database = new Map();
        this.processStudentsArr(students);
    }

    /**
     * @private
     * @param {string[]} students
     */
    processStudentsArr(students) {
        for (let index = 0; index < students.length; index++) {
            let pattern =
                /Student name: (?<name>[A-Z][a-z]+), Grade: (?<grade>\d{1,2}), Graduated with an average score: (?<avg>[1-6](\.[0-9]{1,2})?)/g;

            const results = pattern.exec(students[index]);
            if (!results?.groups) {
                continue;
            }

            const name = results.groups["name"];
            let grade = Number.parseInt(results.groups["grade"]);
            const avg = Number.parseFloat(results.groups["avg"]);

            if (avg < 3) {
                continue;
            }
            grade++;

            let curr = this.database.get(grade);
            if (curr) {
                curr.students.push(name);
                curr.avg += (avg - curr.avg) / curr.students.length;
            } else {
                curr = {
                    students: [name],
                    avg: avg,
                };
            }
            this.database.set(grade, curr);
        }
    }

    /**
     * @returns {string}
     */
    toString() {
        const sortedMap = new Map(
            [...this.database.entries()].sort((lval, rval) => lval[0] - rval[0])
        );
        let line = "";
        for (const key of sortedMap.keys()) {
            if (sortedMap.has(key)) {
                const data = sortedMap.get(key);

                line += `${key} Grade\n`;
                line += `List of students: ${data.students.join(", ")}\n`;
                line += `Average annual score from last year: ${data.avg.toFixed(
                    2
                )}\n`;
                line += "===\n";
            }
        }

        return line;
    }
}

let schoolBook = new SchoolBook([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);

console.log(schoolBook.toString());
