const {Hash, Chaining} = require("./help.js"),
{LinkedList} = require("./linked-list.js")

class HashTable {
    constructor(...datas) {
        this.table = this.GetTable(...datas)
    }

    GetTable(...datas) {
        let map = []
        
        for (const element of datas) {
            const index = Math.abs(Hash(element) % datas.length)
            // collision resolution by chaining

            Chaining(map, index, element)
        }

        // time to fill empty indexes by null

        for (let i = 0; i < datas.length; i++) {
            if (!map[i]) map[i] = null
        }
        
        return map
    }

    Search(item) {
        const index = Math.abs(Hash(item) % this.table.length)
        
        if (this.table[index] == item) return {indexOfMap: index}
        
        const copy = CreateLinkedList(this.table[index])
        this.table[index].unshift(copy.list[0])
       
        if (copy.SearchElement(item) != null) return {indexOfMap: index, indexOfLinkedList: copy.SearchElement(item)}

        return null
    }

    AddItem(...items) {
        for (const item of items) {
            const index = Math.abs(Hash(item) % this.table.length)

            // colision resolution

            Chaining(this.table, index, item)
        }
    }

    DeleteItem(...items) {
        for (const item of items) {
            const index = this.Search(item).indexOfMap
         
            if (typeof this.table[index] == "object"){
                let copy = CreateLinkedList(this.table[index])

                copy.DeleteElements(item)
                this.table[index] = copy.list.length <= 1 ? null : copy.list
            }
            else if (index) this.table[index] = null
        }
    }
}

function CreateLinkedList(list) {
    list.shift()
    
    const values = list.map((object) => {
        return object.current
    })

    return new LinkedList("normal", ...values)
}

module.exports = {
    HashTable: HashTable
}