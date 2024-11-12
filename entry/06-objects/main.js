//@ts-check

/**
 * 01 - Person Data
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 */
function getPerson(firstName, lastName, age) {
    const person = {
        firstName,
        lastName,
        age,
    };
    console.log(person);
}

/**
 * @typedef {Object} TownData
 * @property {string} name
 * @property {number} population
 * @property {string} country
 * @property {string} postcode
 */

/**
 * 02 - Town
 * @param {TownData} town
 */
function getTown(town) {
    Object.entries(town).forEach((data) => {
        console.log(`${data[0]} -> ${data[1]}`);
    });
}

/**
 * Input town for {@link getTown}
 * @type {TownData}
 */
const townData = {
    name: "Sofia",
    population: 123456,
    country: "Bulgaria",
    postcode: "1000",
};

/**
 * 03 - Convert to Object
 * @param {string} jsonObj Must be in json format
 */
function convertToObject(jsonObj) {
    const obj = JSON.parse(jsonObj);
    Object.entries(obj).forEach((data) => {
        console.log(`${data[0]}: ${data[1]}`);
    });
}
// convertToObject('{"name": "Ivan", "age": 40, "town": "Sofia"}');

/**
 * 04 - Convert to JSON
 * @param {string} name
 * @param {string} lastName
 * @param {string} eyeColor
 */
function convertToJson(name, lastName, eyeColor) {
    const obj = { name, lastName, eyeColor };
    console.log(`'${JSON.stringify(obj)}'`);
}
// convertToJson("Ivan", "Ivanov", "blue");

/**
 * 05 - Phonebook
 * @param {string[]} phonebookData
 */
function logPhonebook(phonebookData) {
    /**
     * @type {Map<string,string>}
     */
    const phonebook = new Map();
    for (let index = 0; index < phonebookData.length; index++) {
        const firstSpaceIndex = phonebookData[index].indexOf(" ");
        const curr = {
            name: phonebookData[index].substring(0, firstSpaceIndex),
            phone: phonebookData[index].substring(firstSpaceIndex + 1),
        };

        phonebook.set(curr.name, curr.phone);
    }
    phonebook.forEach((val, key) => {
        console.log(`${key} -> ${val}`);
    });
}
// logPhonebook(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"]);

/**
 * @typedef {Object} Movie
 * @prop {string} name
 * @prop {string?} director
 * @prop {string?} date
 */

/**
 * 06 - Movies
 * @param {string[]} commands
 */
function movieCatalog(commands) {
    /**
     * @type {Movie[]}
     */
    const movies = [];
    for (let index = 0; index < commands.length; index++) {
        const addMovieMatch = /addMovie (?<Movie>.+)/g.exec(commands[index]);

        if (addMovieMatch?.groups) {
            movies.push({
                name: addMovieMatch.groups["Movie"],
                director: null,
                date: null,
            });
            continue;
        }

        const directeBydRegex = /(?<Movie>.+) directedBy (?<Director>.+)/g.exec(
            commands[index]
        );
        if (directeBydRegex?.groups) {
            for (let index = 0; index < movies.length; index++) {
                if (movies[index].name === directeBydRegex.groups["Movie"]) {
                    movies[index].director = directeBydRegex.groups["Director"];
                    break;
                }
            }
            continue;
        }

        const onDatedRegex =
            /(?<Movie>.+) onDate (?<Date>(\d{1,2}\.){2}\d{2,4})/g.exec(
                commands[index]
            );
        if (onDatedRegex?.groups) {
            for (let index = 0; index < movies.length; index++) {
                if (movies[index].name === onDatedRegex.groups["Movie"]) {
                    movies[index].date = onDatedRegex.groups["Date"];
                    break;
                }
            }
            continue;
        }
    }

    for (let index = 0; index < movies.length; index++) {
        if (movies[index].director && movies[index].date) {
            const objAsJson = JSON.stringify(movies[index]);
            console.log(objAsJson);
        }
    }
}

// movieCatalog([
//     "addMovie Fast and Furious",
//     "addMovie Godfather",
//     "Inception directedBy Christopher Nolan",
//     "Godfather directedBy Francis Ford Coppola",
//     "Godfather onDate 29.07.2018",
//     "Fast and Furious onDate 30.07.2018",
//     "Spinderman 2 onDate 01.08.2018",
//     "Fast and Furious directedBy Rob Cohen",
// ]);
