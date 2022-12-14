const stack = require("./stack.js"),
queue = require("./queue.js")

let copy = new queue.Deque("IRD", 100, "front")

console.log("start ", copy.content, copy.front, copy.rear)

copy.InsertFromFront(1, 2, 3, 4)

console.log("insert from front ", copy.content)

copy.InsertFromRear(3094, 94, 293)

console.log("insert from rear ", copy.content)

copy.DeleteFromFront()

console.log("delete from front ", copy.content)

copy.DeleteFromRear()

console.log("delete from rear ", copy.content)