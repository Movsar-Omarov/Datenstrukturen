const stack = require("./stack.js"),
queue = require("./queue.js"),
linkedList = require("./linked-list.js")

let copy = new linkedList.LinkedList("double circular", "Pizza", "Salami", "Mozarella")

console.log("start ", copy.GetDatas)

copy.AppendElement("Wurst", 0)

console.log("append ", copy.GetDatas)

copy.DeleteElements("Pizza")

console.log("delete ", copy.GetDatas)

copy.DeleteElements("Banane")

console.log("delete 2 ", copy.GetDatas)