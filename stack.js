class Stack {
    constructor(max, ...data) {
        this.content = [...data]
        this.top = this.content ? -1 + this.content.length : -1
        this.max = max
    }

    get GetDatas() {
        return this.content
    }

    Push(...datas) {
        for (const data of datas) {
            if (this.content.length >= this.max) return 
                
            this.content.push(data)
            this.top++
        }
    }

    Pop(numbers = 1) {
        for (let remove = 0; remove < numbers; remove++) {
            if (this.top <= -1) {
                this.top = -1
                break
            }
            
            this.content.pop()
            this.top--
        }
    }

    get isEmpty() {
        return this.top == -1
    }

    get isFull() {
        return this.top == this.max
    }
}

module.exports = {
    Stack: Stack
}
