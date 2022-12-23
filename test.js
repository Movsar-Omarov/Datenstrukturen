const stack = require("./stack.js"),
queue = require("./queue.js"),
linkedList = require("./linked-list.js"),
{HashTable} = require("./hash-table.js")

let copy = new HashTable("Ron", "Movsar", "Bilal")

console.log(copy.table)

console.log(copy.Search("Ron"))

copy.AddItem("Anna")

console.log("add ", copy.table)

copy.DeleteItem("Anna", "Bilal")

console.log("delete ", copy.table)