//@ts-check

/**
 * 03 - Hogwarts Code Cipher
 * @param {string} cipher encrypted message
 * (1 ≤ |s| ≤ 100)
 * @param {number} shift shift of the letters
 * (1<=n<=25)
 * @returns {string} secret message
 */
function decipherHogwartzCode(cipher, shift) {
    let secretMessage = "";
    for (let ind = 0; ind < cipher.length; ind++) {
        secretMessage += String.fromCharCode(cipher.charCodeAt(ind) - shift);
    }
    return secretMessage;
}

//expected: There is a secret!
console.log(decipherHogwartzCode('Uifsf!jt!b!tfdsfu"', 1));
//expected: sseeahashhassee!
console.log(decipherHogwartzCode("vvhhdkdvkkdvvhh$", 3));
//expected: Harry Potter
console.log(decipherHogwartzCode("Ibssz!Qpuufs", 1));
