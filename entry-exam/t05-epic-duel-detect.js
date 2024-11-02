//@ts-check

/**
 * 05 - Epic Wizarding Duels
 * @param {string} duelSequence sequence of spells and counterspells
 * @returns {'Epic'|'Not Epic'} result of duel
 */
function isDuelEpic(duelSequence) {
    let stack = [];
    for (let ind = 0; ind < duelSequence.length; ind++) {
        let curr = duelSequence[ind];
        if (curr === "\\") {
            if (stack[stack.length - 1] !== "/") {
                return "Not Epic";
            }
            stack.pop();
        } else if (curr === ">") {
            if (stack[stack.length - 1] !== "<") {
                return "Not Epic";
            }
            stack.pop();
        } else if (curr === "!" && stack[stack.length - 1] === "!") {
            stack.pop();
        } else {
            stack.push(curr);
        }
    }
    if (stack.length > 0) {
        return "Not Epic";
    }
    return "Epic";
}

console.log(isDuelEpic("/\\/\\//\\/\\\\")); //expected: Epic
console.log(isDuelEpic("//!!\\//<!!>\\\\\\")); //expected: Epic
console.log(isDuelEpic("///\\\\")); //expected: Not Epic
console.log(isDuelEpic("<!>!")); // expected: Not Epic
console.log(isDuelEpic("/</!!>\\\\")); //expected: Not Epic
