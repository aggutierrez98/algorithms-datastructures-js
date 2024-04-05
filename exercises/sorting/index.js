// --- Directions
// Implement bubbleSort, selectionSort, insertionSort and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux;
            }
        }
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indMin = i;
        for (let j = (i + 1); j < arr.length; j++) {
            if (arr[j] < arr[indMin]) indMin = j;
        }
        if (indMin !== i) {
            const aux = arr[i]
            arr[i] = arr[indMin]
            arr[indMin] = aux;
        }
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const aux = arr[j]
                arr[j] = arr[i]
                arr[i] = aux
            }
        }
    }
    return arr
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    // Pivot can change (Mid of array choose → Best option)
    const pivotIndex = Math.floor(arr.length / 2)
    const leftArr = []
    const rightArr = []

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue;
        else if (arr[i] < arr[pivotIndex]) leftArr.push(arr[i])
        else rightArr.push(arr[i])
    }
    return [...quickSort(leftArr), arr[pivotIndex], ...quickSort(rightArr)]
}

function mergeSort(arr) {
    function merge(left, right) {
        const results = []
        while (left.length && right.length) {
            if (left[0] < right[0]) results.push(left.shift())
            else results.push(right.shift())
        }
        return [...results, ...left, ...right]
    }

    if (arr.length <= 1) return arr;
    const divisor = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, divisor)
    let rightArr = arr.slice(divisor)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

module.exports = { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort };
