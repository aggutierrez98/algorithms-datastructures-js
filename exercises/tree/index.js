// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    /** @type {Node[]} */
    children

    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data) {
        const newNode = new Node(data)
        this.children.push(newNode)
    }

    remove(data) {
        this.children = this.children.filter(node => node.data !== data)
    }
}

class Tree {
    /** @type {Node?} */
    root

    constructor() {
        this.root = null
    }

    /**
     * @param {Function} callback
     */
    traverseBF(callback) {
        let nodes = this.root ? [this.root] : []

        while(nodes.length){
            const node = nodes.shift()
            callback(node)
            nodes.push(...node.children)
        }

        // My solution with FOR LOOP
        // for (const node of nodes) {
        //     callback(node)
        //     nodes.push(...node.children)
        // }
    }

    /**
     * @param {Function} callback
     */
    traverseDF(callback) {
        let nodes = this.root ? [this.root] : []

        while(nodes.length){
            const node = nodes.shift()
            callback(node)
            nodes.unshift(...node.children)
        }

        // My solution with FOR LOOP
        // let i = 1
        // for (const node of nodes) {
        //     callback(node)
        //     nodes.splice(i, 0, ...node.children)
        //     i++;
        // }
    }
}

module.exports = { Tree, Node };
