//@ts-check

/**
 * 04 - Hogwarts Library Archives
 * @param {string[]} records magic records
 * @param {string} search search term
 * @returns {void} prints first and last occurance
 */
function findMagicArchive(records, search) {
    let firstInd = -1;
    let lastInd = -1;
    for (let ind = 0; ind < records.length; ind++) {
        if (records[ind] !== search) {
            continue;
        }

        if (firstInd === -1) {
            firstInd = ind;
        }
        lastInd = ind;
    }

    if (firstInd === -1) {
        console.log("Record not found");
        return;
    }
    console.log(`First Occurrence: ${firstInd}`);
    console.log(`Last Occurrence: ${lastInd}`);
}
//expected:
// First Occurrence: 0
// Last Occurrence: 2
findMagicArchive(["Harry", "Hermione", "Harry", "Ron"], "Harry");
console.log("");

//expected:
// First Occurrence: 0
// Last Occurrence: 3
findMagicArchive(["Ginny", "Luna", "Neville", "Ginny"], "Ginny");
console.log("");

//expected:
// Record not found
findMagicArchive(["Ron", "Hermione", "Luna"], "Dumbledore");
console.log("");

//expected:
// First Occurrence: 3
// Last Occurrence: 3
findMagicArchive(["Dobby", "Ron", "Hermione", "Harry"], "Harry");
