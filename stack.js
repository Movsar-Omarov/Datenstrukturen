class Stack {
    constructor(max, ...data) {
        this.content = [...data]
        this.top = this.content ? -1 + this.content.length : -1
        this.isEmpty = this.top == -1 ? true : false
        this.max = max
        this.isFull = this.top >= this.max ? true : false

        // this property updates isEmpty and isFull 

        this.controller = setInterval(() => {
            if (this.top <= -1) this.isEmpty = true
            else this.isEmpty = false

            if (this.top >= this.max) this.isFull = true
            else this.isFull = false
        }, 1)
    }

    get GetDatas() {
        return this.content
    }

    Push(...datas) {
        for (const data of datas) {
            if (this.top >= this.max) return 
                
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
}

module.exports = {
    Stack: Stack
}
