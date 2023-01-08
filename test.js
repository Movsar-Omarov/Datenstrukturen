const stack = require("./stack.js"),
queue = require("./queue.js"),
linkedList = require("./linked-list.js"),
{HashTable} = require("./hash-table.js"),
binaryNode = require("./tree.js"),
{BSTNode} = require("./bst.js")

const copy = BSTNode.CreateBinaryTree(0, BSTNode)

copy.InsertNode(200)

copy.InsertNode(100)

console.log(copy.SearchBSTNode(100))