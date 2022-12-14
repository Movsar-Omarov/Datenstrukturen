const stack = require("./stack.js")
const { Heapify } = require('./help.js')

class Queue extends stack.Stack {
    constructor(max, type) {
        super(max)
        

        // property of circular queue
        this.rear = -1
        this.front = -1
        this.type = type
    }

    get GetIsFull() {
        let elementCounter = 0

        for (let index = 0; index < this.max; index++) {
            if (this.content[index]) elementCounter++
        }

        return elementCounter == this.max
    }

    Enqueue(...data) {
        for (const element of data) {
            if (this.GetIsFull) break
            
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

class PriorityQueue extends Queue {
    constructor() {
        super("", "")

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

class Deque extends Queue {
    constructor(type, max, whichEnd) {
        super(max, type)
        
        this.whichEnd = whichEnd
    }

    InsertFromFront(...datas) {
        // console.log("datas ", datas)
        if (this.type != "ORD" && this.whichEnd != "front") return
        for (const element of datas) {
            if (this.content.length <= 0) {
                console.log("one", 1, element)
                this.front++
                this.rear++
                this.content[this.front] = element
                continue
            }
            if (this.GetIsFull) {
                console.log("break", 1, element)
                break
            }

            this.front--

            if (this.front < 0) {
                console.log("negative", 1, element)
                this.front = this.max - 1
            }

            this.content[this.front] = element
        }
    }

    DeleteFromRear(numbers = 1) {
        if (this.type != "IRD" && this.whichEnd != "rear") return
        for (let remove = 0; remove < numbers; remove++) {
            if (this.content.length <= 0){ 
                this.rear = -1
                this.front = -1
                break
            }

            this.content.splice(this.rear, 1)
            this.rear--

            if (this.rear >= this.content.length) this.rear = 0
        }
    }

    InsertFromRear(...datas) {
        if (this.type != "ORD" && this.whichEnd != "rear") return
        this.Enqueue(...datas)
    }

    DeleteFromFront(numbers = 1) {
        if (this.type != "IRD" && this.whichEnd != "front") return
        this.Dequeue(numbers)
    }
}

module.exports = {
    Queue: Queue,
    PriorityQueue: PriorityQueue,
    Deque: Deque
}