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
            executeDestroy(currCmd, cloned);
        } else if (currCmd[0] === "swap") {
            executeSwap(currCmd, cloned);
        } else if (currCmd[0] === "add") {
            executeAdd(currCmd, cloned);
        } else if (currCmd[0] === "insert") {
            executeInsert(currCmd, cloned);
        } else if (currCmd[0] === "center") {
            executeCenter(cloned);
        }
    }
}

console.log("Example 01");
printBattleFormation(
    [1, 2, 3, 4, 5],
    ["destroy 3", "swap 0 1", "add 6", "center"]
);

console.log("\nExample 02");

printBattleFormation(
    [1, 2, 3, 4, 5],
    [
        "add 6",
        "swap 0 5",
        "swap 1 4",
        "swap 2 3",
        "swap 2 100",
        "swap 2 2",
        "center",
    ]
);

console.log("\nExample 03");
printBattleFormation(
    [1, 2],
    ["insert 3 2", "center", "destroy 1", "destroy 2", "center"]
);

/**
 * Executes center commands
 * @param {number[]} formation Battle formation
 * @see Used in {@link printBattleFormation}
 */
function executeCenter(formation) {
    if (formation.length % 2 === 0) {
        let midIndex = Math.floor(formation.length / 2);
        console.log(`${formation[midIndex - 1]} ${formation[midIndex]}`);
    } else {
        let midIndex = Math.floor(formation.length / 2);
        console.log(formation[midIndex]);
    }
}

/**
 * Executes add command
 * @param {string[]} currCmd
 * @param {number[]} formation Battle formation
 * @see Used in {@link printBattleFormation}
 */
function executeAdd(currCmd, formation) {
    let id = Number(currCmd[1]);
    if (!formation.some((el) => el === id)) {
        formation.push(id);
        console.log(formation.join(" "));
    }
}

/**
 * Executes swap command
 * @see Used in {@link printBattleFormation}
 * @param {string[]} currCmd
 * @param {number[]} formation Battle formation
 */
function executeSwap(currCmd, formation) {
    let fstIndex = Number(currCmd[1]);
    let sndIndex = Number(currCmd[2]);
    if (
        fstIndex >= 0 &&
        fstIndex < formation.length &&
        sndIndex >= 0 &&
        sndIndex < formation.length &&
        fstIndex !== sndIndex
    ) {
        let buffer = formation[fstIndex];
        formation[fstIndex] = formation[sndIndex];
        formation[sndIndex] = buffer;
        console.log(formation.join(" "));
    }
}

/**
 * Executes destroy command
 * @see Used in {@link printBattleFormation}
 * @param {string[]} currCmd
 * @param {number[]} formation
 */
function executeDestroy(currCmd, formation) {
    let index = Number(currCmd[1]);
    if (index >= 0 && index < formation.length) {
        formation.splice(index, 1);
        console.log(formation.join(" "));
    }
}

/**
 * Executes insert commands
 * @see Used in {@link printBattleFormation}
 * @param {string[]} currCmd
 * @param {number[]} formation Battle formation
 * @returns
 */
function executeInsert(currCmd, formation) {
    let id = Number(currCmd[1]);
    let index = Number(currCmd[2]);
    if (index >= 0 && index < formation.length) {
        return;
    }
    if (!formation.some((el) => el === id)) {
        formation.splice(index, 0, id);
        console.log(formation.join(" "));
    }
}
