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

/* 
public static void heapify(int[] data) {
  // last index in the array
  int end = data.length -1;
  // start is assigned the index of the last parent node
  // which in our case is index[3] value(2)
  int start = (end - 1) / 2; // |2|binary heap
 
  while (start >= 0) {
    // sift down the node at index start to the proper place
    // such that all nodes below the start index are in heap
    // order
    siftDown(data, start, end - 1);
    // decrement to the next lowest parent node
    start--;
  }
  // after sifting down the root all nodes/elements
  //  are in heap order
}
 
public static void siftDown(int[] data, int start, int end) {
  int root = start;
  // while the root has at least one child
  while ((2 * root + 1) <= end) {
    // root*2+1 points to the left child
    int child = 2 * root + 1;
    // take the highest of the left or right child
    if (child + 1 <= end && data[child] < data[child + 1]) {
      // then point to the right child instead
      child = child + 1;
    }
 
    // out of max-heap order
    // swap the child with root if child is greater
    if (data[root] < data[child]) {
      int tmp = data[root];
      data[root] = data[child];
      data[child] = tmp;
 
      // return the swapped root to test against
      //  it's new children
      root = child;
    } else {
      return;
    }
  } // End while
} */

module.exports = {
    Heapify: Heapify
}