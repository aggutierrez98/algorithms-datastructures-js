// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**
 *
 * @param {Array} array
 * @param {Number} size
 */
function chunk(array, size) {
    const newArray = []

    // SOLUTION 1
    // for (const elem of array) {
    //     const lastElem = newArray[newArray.length-1]
    //     if(!lastElem || lastElem.length === size) newArray.push([elem])
    //     else lastElem.push(elem)
    // }
    // return newArray

    // SOLUTION 2
    //     let ind = 0
    // while (ind < array.length) {
    //     newArray.push(array.slice(ind,ind+size))
    //     ind += size;
    // }

    // MY SOLUTION
    for (let i = 0; i < array.length; i += size) {
        newArray.push(array.slice(i, i + size))
    }
    return newArray;
}

module.exports = chunk;
