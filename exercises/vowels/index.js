// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/**
 * @param {String} str
 */
function vowels(str) {

    // SOLUTION 1
    // const checker = ["a", "e", "i", "o", "u"]
    // let vowelCount = 0;
    // for (const char of str.toLowerCase()) {
    //     if (checker.includes(char)) vowelCount++;
    // }
    // return vowelCount;

     // SOLUTION 2 (using regex)
    return str.match(/[aeiou]/gi)?.length || 0

    // MY ITERATIVE SOLUTION
    // return str.toUpperCase().split("").filter(char => "AEIOU".includes(char)).length

    // ANOTHER ITERATIVE SOLUTION
    // return str.toUpperCase().split("").reduce((acc, char) => "AEIOU".includes(char) ? ++acc : acc, 0);
}

module.exports = vowels;
