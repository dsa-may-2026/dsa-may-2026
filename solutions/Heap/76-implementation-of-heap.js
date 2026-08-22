class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class MaxHeap {
    arr = []


    insert(val, priority) {
        let arr = this.arr;
        
        let node = new Node(val, priority)
        arr.push(node)

        let currIndex = arr.length-1
        let parentIndex = Math.floor((currIndex-1)/2)
        while(currIndex!=0 && arr[currIndex].priority > arr[parentIndex].priority) {
            let temp = arr[currIndex]
            arr[currIndex] = arr[parentIndex]
            arr[parentIndex] = temp
            currIndex = parentIndex
            parentIndex = Math.floor((currIndex-1)/2)
        }
    }

    extractMax() {
        
    }
}

let maxHeap = new MaxHeap()
maxHeap.insert("fever", 5)
maxHeap.insert("tooth break", 6)
maxHeap.insert("face punched", 4)
maxHeap.insert("fell down", 8)
maxHeap.insert("accident", 2)