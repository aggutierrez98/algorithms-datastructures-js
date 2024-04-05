// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 *
 * @param {String} str
 */
function palindrome(str) {
    //OPTION 1
    return str === str.split("").reverse().join("")

    //OPTION 2
    // return str.split("").every((char, ind) => char === str[str.length-1-ind])
}

module.exports = palindrome;
