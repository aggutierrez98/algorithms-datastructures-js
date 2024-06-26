// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

/**
 * @param {Queue} sourceOne
 * @param {Queue} sourceTwo
 * @returns {Queue}
 */
function weave(sourceOne, sourceTwo) {
    let weaved = new Queue()

    while(sourceOne.peek() || sourceTwo.peek()){
        const souceOneLastEl = sourceOne.remove()
        const souceTwoLastEl = sourceTwo.remove()
        if (souceOneLastEl) weaved.add(souceOneLastEl)
        if (souceTwoLastEl) weaved.add(souceTwoLastEl)
    }
    return weaved;
}

module.exports = weave;
