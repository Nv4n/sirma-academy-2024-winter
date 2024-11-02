//@ts-check

/**
 * 06 - Auror Battle Formation
 * @param {number[]} initFormation
 * @param {string[]} commands
 * @returns {void} curr formation on each valid command
 */
function printBattleFormation(initFormation, commands) {
    let cloned = [...initFormation];

    for (let ind = 0; ind < commands.length; ind++) {
        let currCmd = commands[ind].split(" ");

        if (currCmd[0] === "destroy") {
            let index = Number(currCmd[1]);
            if (index >= 0 && index < cloned.length) {
                cloned.splice(index, 1);
            }
        } else if (currCmd[0] === "swap") {
            let fstIndex = Number(currCmd[1]);
            let sndIndex = Number(currCmd[2]);
            if (
                fstIndex >= 0 &&
                fstIndex < cloned.length &&
                sndIndex >= 0 &&
                sndIndex < cloned.length
            ) {
                let buffer = cloned[fstIndex];
                cloned[fstIndex] = cloned[sndIndex];
                cloned[sndIndex] = buffer;
            }
        } else if (currCmd[0] === "add") {
            let id = Number(currCmd[1]);
            if (!cloned.some((el) => el === id)) {
                cloned.push(id);
            }
        }
    }
}

printBattleFormation(
    [1, 2, 3, 4, 5],
    ["destroy 3", "swap 0 1", "add 6", "center"]
);
