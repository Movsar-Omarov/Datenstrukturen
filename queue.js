const stack = require("./stack.js")

class Queue extends stack.Stack {
    constructor(max, type, ...data) {
        super(max, ...data)
        
        this.rear = this.top
        this.front = this.content ? this.content.length-1 : -1
        this.type = type
    }

    Enqueue(...data) {
        for (const element of data) {
            if (this.content.length >= this.max) break
            
            this.rear++

            if (this.type == "circular" && this.rear >= this.max) this.rear = 0

            this.content[this.rear] = element
        }
    }

    Dequeue(numbers = 1) {
        for (let remove = 0; remove < numbers; remove++) {
            if (this.content.length <= 0) {
                this.front = -1
                this.rear = -1
                break
            }

            this.content.splice(this.front, 1)
            this.front++

            if (this.type == "circular" && this.front >= this.max) this.front = 0
        }
    }
}

module.exports = {
    Queue: Queue
}