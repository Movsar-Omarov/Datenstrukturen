const stack = require("./stack.js")

class Queue extends stack.Stack {
    constructor(max, ...data) {
        super(max, ...data)
        
        this.rear = this.top
        this.front = this.content ? 0 : -1
    }

    Enqueue(...data) {
        this.Push(...data)

        this.rear = this.top
    }

    Dequeue(numbers = 1) {
        for (let remove = 0; remove < numbers; remove++) {
            if (this.rear <= -1) {
                this.front = -1
                break
            }
            
            this.content.shift()
            this.rear--
        }
    }
}

module.exports = {
    Queue: Queue
}