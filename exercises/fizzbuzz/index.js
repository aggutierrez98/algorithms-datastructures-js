// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let i = 1; i < n + 1; i++) {
        const mul3 = i % 3 === 0;
        const mul5 = i % 5 === 0;
        if (mul3 && mul5) console.log("fizzbuzz")
        else if (mul3) console.log("fizz")
        else if (mul5) console.log("buzz")
        else console.log(i);
    }
}

module.exports = fizzBuzz;
