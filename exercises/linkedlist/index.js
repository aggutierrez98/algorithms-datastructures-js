// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    insertLast(data) {
        const node = new Node(data);
        const lastNode = this.getLast()
        if (lastNode) lastNode.next = node
        else this.head = node
    }

    insertAt(data, index) {
        if (!this.head)  return this.head = new Node(data)
        if (index === 0) return this.head = new Node(data, this.head)
        const previousNode = this.getAt(index - 1) || this.getLast()
        const node = new Node(data, previousNode.next)
        previousNode.next = node;
    }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let lastNode = this.head;
        while (lastNode && lastNode.next) {
            lastNode = lastNode.next;
        }
        return lastNode
    }

    getAt(index) {
        let nodeInd = 0;
        let lastNode = this.head;
        while (lastNode) {
            if (nodeInd === index) return lastNode
            lastNode = lastNode.next;
            nodeInd++;
        }
        return null
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return

        if (!this.head.next) {
            this.head = null
            return
        }

        let prevtoLastNode = this.head;
        let lastNode = this.head.next;
        while (lastNode.next) {
            prevtoLastNode = lastNode;
            lastNode = lastNode.next;
        }
        prevtoLastNode.next = null
    }

    removeAt(index) {
        if (!this.head) return null
        if (index === 0) return this.head = this.head.next

        const previousNode = this.getAt(index - 1)
        if (previousNode && previousNode.next) previousNode.next = previousNode.next.next
    }

    forEach(callback) {
        let node = this.head;
        let index = 0
        while (node) {
            callback(node, index);
            node = node.next;
            index++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    };
}

module.exports = { Node, LinkedList };