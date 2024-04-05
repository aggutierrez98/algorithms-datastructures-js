// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {

    // MY SOLUTION
    if (n === row) return
    if (level.length >= ((n * 2) - 1)) {
        console.log(level);
        return pyramid(n, row + 1)
    }
    else {
        const charAdd = (level.length + 1 >= n - row)  && (level.length + 1 <= n + row) ? "#" : " "
        pyramid(n, row, level + charAdd)
    }

    // SOLUTION 1
    // const midPoint = Math.floor((2*n-1)/2)
    //  for (let row = 0; row < n; row++) {
    //     let level = ""
    //     for (let col = 0; col < ((n * 2) - 1); col++) {
    //         if(col >= midPoint-row && col <= midPoint+row) level += "#"
    //         else level += " "
    //     }
    //     console.log(level);
    // }

    // SOLUTION 2 (Recursive)
    // const midPoint = Math.floor((2 * n - 1) / 2)
    // if (n === row) return
    // if (level.length >= ((n * 2) - 1)) {
    //     console.log(level);
    //     return pyramid(n, row + 1)
    // }
    // else {
    //     const charAdd = (level.length >= midPoint - row) && (level.length <= midPoint + row) ? "#" : " "
    //     pyramid(n, row, level + charAdd)
    // }
}

module.exports = pyramid;
