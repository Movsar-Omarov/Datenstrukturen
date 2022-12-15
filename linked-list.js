class LinkedList {
    constructor(type, ...datas) {
        this.head = "head"
        this.type = type
        this.list = datas
    }

    get GetDatas() {
        const linkedElement = (element, next, previous = "head", type) => {
            if (type.search("double")) return {previous: previous, current: element, next: next}
            return {current: element, next: next}
        },
        head = [linkedElement("head", this.list[0], null, this.type)]
       
        if (!this.type.search("circular")) return head.concat(this.list.map((element, index) => {
            if (index == this.list.length - 1) return linkedElement(element, null, this.list[index-1], this.type)
            if (index == 0) return linkedElement(element, this.list[index+1], "head", this.type)
            return linkedElement(element, this.list[index+1], this.list[index-1], this.type)
        }
        ))

        return this.list.map((element, index) => {
            if (index == this.list.length - 1) return linkedElement(element, this.list[0], this.list[index-1], this.type)
            if (index == 0) return linkedElement(element, this.list[index+1], this.list[this.list.length-1], this.type)
            return linkedElement(element, this.list[index+1], this.list[index-1], this.type)
        })
    }

    DeleteElements(...items) {
        for (const item of items) {
            const index = this.list.indexOf(item)

            if (index < 0) {
                console.log("Screw you, son of bitch!")
                continue
            }

            this.list.splice(index, 1)
        }
    }

    AppendElement(item, index = this.list.length) {
        if (index > this.list.length) {
            console.log("Put right index, fuck you!")
            return
        }
       
        // to append an element at wanted index, first you shall split element into two parts at given index
       
        const firstPart = this.list.slice(0, index),
        secondPart = this.list.slice(index)

        this.list = firstPart.concat(item, secondPart)
    }
}

module.exports = {
    LinkedList: LinkedList
}