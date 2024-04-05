// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 *
 * @param {String} str
 */
function capitalize(str) {

    // MY SOLUTION
    return str.split(" ").map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(" ");

    // SOLUTION 1
    // let words = []
    // for (const word of str.split(" ")) {
    //     words.push(word[0].toUpperCase() + word.slice(1))
    // }
    // return words.join(" ")

    // // SOLUTION 2
    // let words = str[0].toUpperCase()
    // for (let i = 1; i < str.length; i++) {
    //     if(str[i-1] === " ") words += str[i].toUpperCase()
    //     else words += str[i]
    // }
    // return words
}

module.exports = capitalize;
