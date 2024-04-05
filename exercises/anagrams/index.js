// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


const getCharMap = (string) => string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split("")
    .reduce((acc, char) => ({ ...acc, [char]: ++acc[char] || 1 }), {})
// .reduce((acc, char) =>  Object.assign(acc, {[char]: ++acc[char] || 1}), {} )

function buildCharMap(string) {
    const charMap = {}
    for (const char of string.replace(/[^\w]/g).toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

function cleanString(string) {
    return string.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("")
}

/**
 * @param {String} stringA
 * @param {String} stringB
 */
function anagrams(stringA, stringB) {

    // MY SOLUTION
    // const aCharMap = getCharMap(stringA)
    // const bCharMap = getCharMap(stringB)
    // // for (const key in Object.assign({},aCharMap, bCharMap)) {
    // for (const key in { ...aCharMap, ...bCharMap }) {
    //     if (aCharMap[key] !== bCharMap[key]) return false
    // }
    // return true

    // SOLUTION 1
    // const aCharMap = buildCharMap(stringA)
    // const bCharMap = buildCharMap(stringB)
    // if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    //     return false
    // }
    // for (const key in aCharMap) {
    //     if (aCharMap[key] !== bCharMap[key]) return false
    // }
    // return true

    // SOLUTION 2
    return cleanString(stringA) === cleanString(stringB)
}

module.exports = anagrams;
