// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    // MY SOLUTION
    // let matrixSpiral = Array.from({ length: n }).map(() => Array(n))
    // let x = 0, y = 0;
    // let matNumb = 1;

    // for (let ind = 0; ind <= (2 * (n - 1) + 1); ind++) {
    //     const movements = n - (Math.round(ind / 2) || 1)
    //     const shift = Math.round(ind / 4) + 1

    //     let movement = movements;
    //     while (movement > 0) {
    //         matrixSpiral[y][x] = matNumb;
    //         if (ind === 0) x++;
    //         else if ((n - movements) % 2 !== 0) {
    //             if (y < n - shift) y++;
    //             else x--;
    //         }
    //         else {
    //             if (y > shift - 1) y--;
    //             else x++;
    //         }
    //         matNumb++;
    //         movement--
    //     }
    //     if (movements === 0) matrixSpiral[y][x] = matNumb;
    // }
    // return matrixSpiral;


    // SOLUTION ON COURSE
    let results = []
    for (let i = 0; i < n; i++) {
        results.push([])
    }
    let counter = 1;
    let startCol = 0, startRow = 0, endRow = n - 1, endCol = n - 1;

    while (startCol <= endCol && startRow <= endRow) {
        // Top row
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // Right col
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // Bottom row
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // Left col
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    return results
}

module.exports = matrix;

// //          [ [1],
// //        [8,  9,  2]
// //    [7, 12, 13, 10, 3],
// //       [6,  11, 4]
// //           [5] ]