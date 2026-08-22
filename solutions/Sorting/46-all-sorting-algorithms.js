// first explained May 30, 2026

function bubbleSort(arr, compare) {
    let n = arr.length

    for(let i = 0; i<n-1; i++) {
        let swapped = false;
        for(let j = 0; j<n-1-i; j++) {
            if(compare(arr[j], arr[j+1]) > 0) {
                swapped = true;
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        if(!swapped) break
    }
    return arr
}

function selectionSort(arr, compare) {
    
    let n = arr.length
    let index=-1;
    
    for(let i = 0; i<n-1; i++) {
        index=i;
        for(let j = i+1; j<n; j++) {
            if(compare(arr[index], arr[j])>0) {
                index=j;
            }
        }
        let temp=arr[index];
        arr[index]=arr[i];
        arr[i]=temp;
        
    }
    return arr
}

function insertionSort(arr, compare) {
    for(let i=0;i<arr.length-1;i++){
      let temp=arr[i+1];
      let j=i;
      
      while(j>=0 && compare(arr[j], temp)>0){
        arr[j+1]=arr[j];
        j--;
      }
      
      arr[j+1]=temp;
      
    }
    return arr;

}

console.log(insertionSort([9,2,1,0,4,3,8,15], (a,b)=>b-a))

console.log(bubbleSort([6,1,2,3,4,5], (a,b)=>a-b))

// console.log(selectionSort([9,2,1,4,3,8], (a,b)=>a-b))

// console.log(selectionSort([9,2,1,4,3,8], (a,b)=>b-a))

// Updated with merge sort and quick sort on Aug 22 2026

function mergeSort(arr) {
    if(arr.length == 1) {
        return arr;
    }
    let mid = Math.floor(arr.length/2)


    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)

}


function merge(a1, a2) {
    let i = 0, j = 0
    let res = []

    while(i<a1.length && j <a2.length) {
        if(a1[i] <= a2[j]) {
            res.push(a1[i++])
        } else {
            res.push(a2[j++])
        }
    }
    while(i<a1.length) {
        res.push(a1[i++])
    }
    while(j<a2.length) {
        res.push(a2[j++])
    }
    return res
}