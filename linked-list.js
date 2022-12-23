class LinkedList {
    constructor(type, ...datas) {
        this.type = type
        this.list = this.GetDatas(datas)
    }

    LinkedElement(element, next, previous = "head", type) {
        if (type.search("double") != -1) return {previous: previous, current: element, next: next}
        return {current: element, next: next}
    }

    GetDatas(...datas) {
        let prototype = [],
        copy = datas[0]
        
        if (this.type.search("circular") == -1){ 
            copy.unshift("head")
            copy.push(null)
        }
        
        for (let i = 0; i < copy.length; i++) {
            if (this.type.search("circular") != -1 && i == 0) prototype.push(this.LinkedElement(copy[i], copy[i+1], copy[copy.length-1], this.type))
            else if (this.type.search("circular") != -1 && i == copy.length-1) {prototype.push(this.LinkedElement(copy[i], copy[0], copy[i-1], this.type))}
            
            else if (this.type.search("circular") == -1 && i == 0) prototype.push(this.LinkedElement(copy[i], copy[i+1], null, this.type))
            else if (this.type.search("circular") == -1 && i == copy.length-1) continue
            
            else prototype.push(this.LinkedElement(copy[i], copy[i+1], copy[i-1], this.type))
        }
        
        return prototype
    }

    DeleteElements(...items) {
        for (const item of items) {
            // find index of item which will deleted

            const index = this.SearchElement(item) + 1

            if (index >= this.list.length) return 

            // update relationships

            if (this.list[index+1]) this.list[index-1].next = this.list[index+1].current
            if (Object.keys(this.list[index]).includes("previous")) this.list[index+1].previous = this.list[index-1].current

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

        // update reliationships of items which are next to added item

        this.list[index-1].next = item
        this.list[index].previous = item

        this.list = firstPart.concat(this.LinkedElement(item, this.list[index].current, this.list[index-1].current, this.type), secondPart)
    }

    SearchElement(wantedItem) {
        for (let i = 0; i < this.list.length; i++) {
            const element = this.list[i]
            // keep in mind, the first element is head. Therefore I take off 1 from index 
            if (element.current == wantedItem) return i - 1
            else if (element.next == wantedItem) return i+1 - 1
            else if (element.previous == wantedItem) return i-1 - 1
        }

        return null
    }
}

module.exports = {
    LinkedList: LinkedList
}