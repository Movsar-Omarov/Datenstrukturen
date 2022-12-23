const {LinkedList} = require("./linked-list.js")

const childAndParent = (tree, start) => {
    let leftChildIndex = start*2+1,
    rightChildIndex = leftChildIndex+1,
    parentIndex = start
    
    while (tree[leftChildIndex] <= tree[parentIndex] && tree[rightChildIndex] <= tree[parentIndex] && parentIndex < tree.length) {
        parentIndex++
        
        leftChildIndex = parentIndex * 2 + 1
        rightChildIndex = parentIndex * 2 + 2
        // console.log(`iteration ${start}, max ${max}, parent ${tree[parentIndex]} at index ${parentIndex}, left child ${tree[leftChildIndex]} at index ${leftChildIndex}, right child ${tree[rightChildIndex]} at index ${rightChildIndex}`)
    }

    if (tree[leftChildIndex] > tree[parentIndex]) return {child: leftChildIndex, parent: parentIndex}
    if (tree[rightChildIndex] > tree[parentIndex]) return {child: rightChildIndex, parent: parentIndex}
    return {child: parentIndex, parent: parentIndex}
}

function Heapify(unsortedList, end = 0) {
    // with nested for-loop
    
    for (let iteration = 0; iteration < unsortedList.length; iteration++) {
        for (let index = 0; index < unsortedList.length - end; index++) {
            const container = childAndParent(unsortedList, iteration),
            childIndex = container.child,
            parentIndex = container.parent
            
            // swap child and parent
           
            const parentValue = unsortedList[parentIndex]
    
            unsortedList[parentIndex] = unsortedList[childIndex]
            unsortedList[childIndex] = parentValue
        }
    }
    
    return unsortedList
}

function Chaining(map, index, element) {
    if (map[index] && typeof map[index] != "object") map[index] = new LinkedList("normal", map[index], element).list
    else if (map[index]) {
        map[index].shift()
        
        const values = map[index].map((object) => {
            return object.current
        })
        let copy = new LinkedList("normal", map[index])

        copy.AppendElement(element)
        map[index] = copy.list
    }
    else map[index] = element
}

function Hash(string) {            
    let hash = 0
                      
    if (string.length == 0) return hash
                      
    for (index = 0; index < string.length; index++) {
        const char = string.charCodeAt(index)

        hash = ((hash << 5) - hash) + char
    }
                      
    return hash
}

module.exports = {
    Heapify: Heapify,
    Hash: Hash,
    Chaining: Chaining
}