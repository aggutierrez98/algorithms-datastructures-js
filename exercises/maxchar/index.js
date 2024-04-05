// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 *
 * @param {String} str
 */
function maxChar(str) {

    // MY SOLUTION
    // return Object.entries(str.split("")
    //     .reduce((acc, char) => ({ ...acc, [char]: acc[char] + 1 || 1 }), {}))
    //     .sort((a, b) => b[1] - a[1])[0][0]
    // Sin ES6 usar
    // .reduce((acc, char) => Object.assign(acc, {[char]: acc[char] + 1 || 1}), {}))

    // VIDEO
    let max = 0
    let maxChar = ""
    const charMap = {}
    for (const char of str) {
        if (charMap[char])
            charMap[char]++
        else {
            charMap[char] = 1
        }
    }
    for (const key in charMap) {
        if (charMap[key] > max) {
            max = charMap[key]
            maxChar = key
        }
    }
    return maxChar

}

module.exports = maxChar;
