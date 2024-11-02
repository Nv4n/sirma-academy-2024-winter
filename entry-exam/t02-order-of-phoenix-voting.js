//@ts-check

/**
 * 02 - Order of the Phoenix Votes
 * @param {string[]} votes array of votes
 * @returns {'Yes'|'No'|'Abstain'|'Tie'} Vote result message
 */
function getOrderDecision(votes) {
    let votingScore = 0;
    let hasNonAbstain = false;
    for (let ind = 0; ind < votes.length; ind++) {
        switch (votes[ind].toLowerCase()) {
            case "yes":
                votingScore++;
                hasNonAbstain = true;
                break;
            case "no":
                votingScore--;
                hasNonAbstain = true;
                break;
        }
    }

    if (!hasNonAbstain) {
        return "Abstain";
    }
    if (votingScore > 0) {
        return "Yes";
    }
    if (votingScore < 0) {
        return "No";
    }
    return "Tie";
}

//expected: Yes
console.log(getOrderDecision(["Yes", "No", "Yes", "Abstain", "Yes"]));
//expected: No
console.log(getOrderDecision(["No", "No", "Yes"]));
//expected: Tie
console.log(getOrderDecision(["Yes", "No"]));
//expected: Abstain
console.log(getOrderDecision(["Abstain"]));
//expected: Tie
console.log(getOrderDecision(["No", "No", "Abstain", "Abstain", "Yes", "Yes"]));
//expected: No
console.log(getOrderDecision(["No", "Abstain", "Abstain"]));
