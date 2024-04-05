const { bubbleSort, insertionSort, selectionSort, mergeSort, quickSort } = require('./index');

const testCaseSize = 50000
const randomArr = Array.from({ length: testCaseSize }, () => Math.floor(Math.random() * testCaseSize));
const sortedRandomArr = randomArr.sort((a, b) => a < b)

function getArray() {
  return randomArr
  // return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return sortedRandomArr
  // return [-124, -40, 0, 7, 21, 100, 500];
}

describe('Bubble sort', () => {
  test('sorts an array', () => {
    expect(bubbleSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Selection sort', () => {
  test('sorts an array', () => {
    expect(selectionSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Insertion sort', () => {
  test('sorts an array', () => {
    expect(insertionSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Quick sort', () => {
  test('sorts an array', () => {
    expect(quickSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Merge sort', () => {
  test('sorts an array', () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray());
  });
});
