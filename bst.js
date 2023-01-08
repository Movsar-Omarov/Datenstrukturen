const { BinaryNode } = require("./tree");

class BSTNode extends BinaryNode {
    constructor(data, isRoot = false) {
        super(data, isRoot)
    }

    InsertNode(item, node = this) {
        if (item > node.data) {
            if (!node.rightChild) node.rightChild = new BSTNode(item)
            else this.InsertNode(item, node.rightChild)
        }
        else {
            if (!node.leftChild) node.leftChild = new BSTNode(item)
            else this.InsertNode(item, node.leftChild)
        }
    }

    SearchBSTNode(item, node = this) {
        
        if (!node) {
            console.log(`There isn't ${item}`)
            return null
        }
        if (item == node.data) return node.data

        if (item > node.data) return this.SearchBSTNode(item, node.rightChild)
        return this.SearchBSTNode(item, node.leftChild)
    } 
}

module.exports = {
    BSTNode: BSTNode
}