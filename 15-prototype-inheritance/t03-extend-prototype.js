//@ts-check
const { ExportedStudent } = require("./t02-person-student");

function extendProto(extendableClass) {
    Object.defineProperty(extendableClass, "species", {
        value: "Human",
        writable: false,
    });
    extendableClass.toSpeciesString = () => {
        return `I am a ${
            extendableClass.species
        }. ${extendableClass.toString()}`;
    };
}

let test = new ExportedStudent("Gosho", 23, "26th OU");
console.log(test);
extendProto(test);
console.log(test);
//@ts-ignore
console.log(test.species);
// @ts-ignore
console.log(test.toSpeciesString());
test.name = "HELO";
//@ts-ignore
console.log(test.toSpeciesString());
