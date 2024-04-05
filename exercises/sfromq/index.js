// --- Directions
// Implement a Stack datastructure using two queues.
// *Do not* create an array inside of the 'Stack' class.
// Queue should implement the methods 'push', 'pop', and 'peek'.
// For a reminder on what each method does, look back at the Stack exercise.

const Queue = require('./queue');

class Stack {

    constructor() {
        this.q1 = new Queue()
        this.q2 = new Queue()
    }

    push(element) {
        this.q2.add(element);
        while(this.q1.peek()) this.q2.add(this.q1.remove())
        const aux = this.q2
        this.q2 = this.q1
        this.q1 = aux;
    }

    pop() {
        return this.q1.remove()
    }

    peek() {
        return this.q1.peek()
    }
}

module.exports = Stack;
