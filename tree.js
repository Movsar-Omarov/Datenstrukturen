"use strict"

const {xor} = require("./help.js")

function Height(h = 0) {
    this.height = h
}

class BinaryNode {
    constructor(data, isRoot = false) {
        this.data = data
        this.leftChild = null
        this.rightChild = null
        this.isRoot = isRoot
    }

    static CreateBinaryTree(data, kind = BinaryNode) {
        return  new kind(data, true)
    }

    AddNode(node) {
        return new BinaryNode(node)
    }

    SearchNode(wantedNode) {
        if (this.data == wantedNode) return this.data
        if (!this.leftChild && !this.rightChild) return -1
        
        if (this.leftChild) return this.leftChild.SearchNode(wantedNode)
        if (this.rightChild) return this.rightChild.SearchNode(wantedNode)
    }

    get isFullTree() {
        if (!this.leftChild && !this.rightChild) return true
        else if (xor(this.rightChild == null, this.leftChild == null)) return false
        
        return this.leftChild.isFullTree && this.rightChild.isFullTree
    }

    isPerfectTree(height = 0) {
        if (!this.leftChild && !this.rightChild) return height
        
        return this.rightChild.isPerfectTree(height+1) === this.leftChild.isPerfectTree(height+1)
    }

    NumberNodes(number = 0) {
        function Counter(node, number) {
            if (!node.leftChild && !node.rightChild) return number

            try { 
                return Counter(node.rightChild, number+1) + Counter(node.leftChild, number+1)
            }
            catch(e) {
                if (node.leftChild) return Counter(node.leftChild, number+1)
                return Counter(node.rightChild, number+1)
            }
        }

        return Counter(this, number)+1
    }

    isCompleteTree(node = this, index = 0, number = this.NumberNodes()) {
        
        if (!node) return true

        if (index >= number) return false

        return this.isCompleteTree(node.leftChild, index*2+1) && this.isCompleteTree(node.rightChild, index*2+2)
    }

    GetHeight(node = this) {
        if (!node) return 0

        return (this.GetHeight(node.leftChild) > this.GetHeight(node.rightChild) ? this.GetHeight(node.leftChild) : this.GetHeight(node.rightChild)) + 1
    }

    isBalancedTree(node = this, height = new Height()) {
        // check if node is null
        
        if (!node) {
            height.height = 0
            return true
        }

        // create for left and right subtrees memory space

        const heightContainer = {left: new Height(), right: new Height()},

        leftBoolean = this.isBalancedTree(node.leftChild, heightContainer.left),
        rightBoolean = this.isBalancedTree(node.rightChild, heightContainer.right),

        leftHeight = heightContainer.left.height,
        rightHeight = heightContainer.right.height

        height.height = (leftHeight > rightHeight ? leftHeight : rightHeight) + 1

        if (Math.abs(leftHeight - rightHeight) > 1) return false
        return leftBoolean && rightBoolean
    }
}

function InOrder(node) {
    if (!node) return 

    InOrder(node.leftChild)
    console.log(node.data)
    InOrder(node.rightChild)
}

function PreOrder(node) {
    if (!node) return

    console.log(node.data)
    PreOrder(node.leftChild)
    PreOrder(node.rightChild)
}

function PostOrder(node) {
    if (!node) return

    PostOrder(node.leftChild)
    PostOrder(node.rightChild)
    console.log(node.data)
}

module.exports = {
    BinaryNode: BinaryNode,
    Inorder: InOrder,
    Preorder: PreOrder,
    Postorder: PostOrder
}

