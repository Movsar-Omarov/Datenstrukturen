const stack = require("./stack.js"),
queue = require("./queue.js")


let copy = new queue.Queue(100, 1)

console.log(copy.GetDatas)


copy.Enqueue(1, 34, 21)

console.log("enqueue ", copy.GetDatas, copy.rear, copy.front)

copy.Dequeue()

console.log("dequeue ", copy.GetDatas, copy.rear, copy.front)

