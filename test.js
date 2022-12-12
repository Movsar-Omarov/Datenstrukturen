const stack = require("./stack.js"),
queue = require("./queue.js")

let copy = new queue.PriorityQueue(2, 32, 3401, 34980)

copy.Insert(10938, 10984, 3404)

console.log("insert ", copy.heapList)

copy.Delete(32, 20)

console.log("delete ", copy.heapList)

console.log(copy.Peek)

console.log("extract ", copy.Extract() == 34980)