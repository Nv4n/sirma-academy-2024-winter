//@ts-check

/**
 * 01 - Print Characters
 * @param {string} text
 */
function printAllChars(text) {
    text.split("").forEach((el) => console.log(el));
}

// printAllChars("AWord");
// console.log("");
// printAllChars("Sentence");

/**
 * 02 - Substring
 * @param {string} text
 * @param {number} start
 * @param {number} charCount
 * @returns {string}
 */
function getSubString(text, start, charCount) {
    return text.substring(start, start + charCount);
}

// console.log(getSubString("ESentence", 1, 8));
// console.log(getSubString("DropWord", 4, 7));

/**
 * 03 - Censor
 * @param {string} text
 * @param {string} badWord
 */
function censorText(text, badWord) {
    const censorship = "*".repeat(badWord.length);
    let censored = text.replaceAll(badWord, censorship);
    return censored;
}

// console.log(censorText("A small sentence with some words", "small"));
// console.log(censorText("Find the hidden word", "hidden"));
// console.log(censorText("A small sentence with small words", "small"));

/**
 * 04 - Reveal Words
 * @param {string} text
 * @param {string} replacement
 * @returns {string}
 */
function uncensorText(replacement, text) {
    let parsedReplacements = replacement.split(", ").reduce((obj, el) => {
        obj[el] = "*".repeat(el.length);
        return obj;
    }, {});
    let uncensored = text;
    for (const replace in parsedReplacements) {
        uncensored = uncensored.replace(parsedReplacements[replace], replace);
    }
    return uncensored;
}

// console.log(uncensorText("great", "JavaScript* is ***** programming language"));

// console.log(
//     uncensorText("the, best, learn", "JavaScript is *** **** language to *****")
// );

/**
 * 05 - #HashTag
 * @param {string} text
 */
function getHashTags(text) {
    const matches = text.matchAll(/(?<=\B#)[A-Za-b]+(?=\b)/gi);

    for (const el of matches) {
        console.log(el[0]);
    }
}

// getHashTags("Everyone uses # to tag a #special word in #facebook");
// console.log("");
// getHashTags(
//     "The symbol # is known #variously in English-speaking #regions as the #number sign"
// );

/**
 * 06 - Extract File
 * @param {string} dir
 */
function extractFile(dir) {
    const match = /(?<=\\)(?<filename>\w+(\.\w+)*)\.(?<extension>\w+)$/gm.exec(
        dir
    );

    if (!match?.groups) {
        console.error("No matches");
        return;
    }

    console.log(`File name: ${match.groups["filename"]}`);
    console.log(`File extension: ${match.groups["extension"]}`);
}

// extractFile("C:\\desktop\\academy\\template.pptx");
// console.log("");
// extractFile("C:\\Projects\\website.folder\\file.name.js");

/**
 * 07 - Substring
 * @param {string} substring
 * @param {string} text
 * @returns {string}
 */
function hasSubString(substring, text) {
    let regx = RegExp(substring, "gi");
    if (regx.test(text)) {
        return substring;
    } else {
        return `${substring} not found!`;
    }
}
// console.log(
//     hasSubString("javascript", "JavaScript is the best programming language")
// );

// console.log(
//     hasSubString("python", "JavaScript is the best programming language")
// );

/**
 * 08 - Replace Repeating Symbols
 * @param {string} text
 */
function flattenString(text) {
    return text.replace(/([a-z])\1+/gi, "$1");
}
// console.log(flattenString("aaaaabbbbbcdddeeeedssaa"));
// console.log(flattenString("qqqwerqwecccwd"));

/**
 *
 * @param {string} text
 */
function pascalSplitter(text) {
    let words = text.split(/(?=[A-Z])/g);
    console.log(words.join(", "));
}

// pascalSplitter("SplitMeIfYouCan");
// pascalSplitter("HoldTheDoor");
// pascalSplitter("ThisIsSoAnnoying");

/**
 * 10 - Cut and Reverse
 * @param {string} text
 */
function cutReverse(text) {
    let halfLength = Math.floor(text.length / 2);
    console.log([...text.substring(0, halfLength)].reverse().join(""));
    console.log([...text.substring(halfLength)].reverse().join(""));
}

// cutReverse("tluciffiDsIsihTgnizamAoSsIsihT");
// cutReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");

/**
 * 11 - Letter
 * @param {string} letter
 * @param {string[]} words
 */
function fillTheLetter(letter, words) {
    let parsedLetter = letter;
    for (const word of words) {
        const regx = new RegExp(`\\b_{${word.length}}\\b`, "gm");
        parsedLetter = parsedLetter.replaceAll(regx, word);
    }
    console.log(parsedLetter);
}

// fillTheLetter(
//     "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so many _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
//     ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"]
// );

/**
 * 12 - Match Full Name
 * @param {string} text
 */
function getFullNames(text) {
    let filtered = text.matchAll(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g);
    return [...filtered].join(", ");
}

// console.log(
//     getFullNames(
//         "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov"
//     )
// );

/**
 * 13 - Match Phone Number
 * @param {string} phoneRegister
 */
function phoneMatcher(phoneRegister) {
    const matches = phoneRegister.matchAll(/\B\+359([- ])2\1\d{3}\1\d{4}\b/g);
    const phoneNumbers = [...matches].map((el) => el[0]);
    console.log(phoneNumbers.join(", "));
}

// phoneMatcher(
//     "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
// );

// phoneMatcher(
//     "+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222"
// );
