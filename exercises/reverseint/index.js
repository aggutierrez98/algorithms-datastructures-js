// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/**
 *
 * @param {Number} n
 */
function reverseInt(n) {

    //OPTION 1
    return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n)

    //OPTION 2
    // return parseInt(n.toString().split("").reduce((acc, char) => acc.includes("-") ? "-" + char + acc.substring(1) : char + acc))

}

module.exports = reverseInt;
