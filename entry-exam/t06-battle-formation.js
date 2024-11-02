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
        } 
    }
}

printBattleFormation(
    [1, 2, 3, 4, 5],
    ["destroy 3", "swap 0 1", "add 6", "center"]
);
