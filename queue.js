const stack = require("./stack.js")
const { Heapify } = require('./help.js')

class Queue extends stack.Stack {
    constructor(max, type, ...data) {
        super(max, ...data)
        

        // property of circular queue
        this.rear = this.top
        this.front = this.heapList ? this.heapList.length-1 : -1
        this.type = type
    }

    Enqueue(...data) {
        for (const element of data) {
            if (this.heapList.length >= this.max) break
            
            this.rear++

            if (this.type == "circular" && this.rear >= this.max) this.rear = 0

            this.heapList[this.rear] = element
        }
    }

    Dequeue(numbers = 1) {
        for (let remove = 0; remove < numbers; remove++) {
            if (this.heapList.length <= 0) {
                this.front = -1
                this.rear = -1
                break
            }

            this.heapList.splice(this.front, 1)
            this.front++

            if (this.type == "circular" && this.front >= this.max) this.front = 0
        }
    }
}

class PriorityQueue extends Queue {
    constructor(...data) {
        super("", "", ...data)

        this.heapList = Heapify(this.content)
    }

    Insert(...datas) {
        this.heapList.push(...datas)

        // update

        this.heapList = Heapify(this.heapList) 
    }

    Delete(...elements) {
        for (const element of elements) {
            const index = this.heapList.indexOf(element)

            if (index == -1) continue

            // swap element to been delete by last element

            this.heapList[index] = this.heapList[this.heapList.length-1]
            this.heapList[this.heapList.length-1] = element

            this.heapList.pop()

            this.heapList = Heapify(this.heapList)
        }
    }

    Extract() {
        const max_min = Math.max(...this.heapList)
        console.log("max-min", max_min)
        this.Delete(max_min)

        return max_min
    }

    get Peek() {
        return this.content[0]
    }
}

module.exports = {
    Queue: Queue,
    PriorityQueue: PriorityQueue
}