// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

const { LinkedList } = require("./linkedlist");

/**
 * @param {LinkedList} list
 */
function fromLast(list, n) {
    let targetNode = list.getFirst()
    let fowardNode = list.getFirst()

    while (fowardNode && n>0){
       fowardNode = fowardNode.next
       n--;
    }

    while (fowardNode && fowardNode.next) {
        fowardNode = fowardNode.next
        targetNode = targetNode.next
    }
    return targetNode
}

module.exports = fromLast;
