//Function swap//
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

//Function shuffle
const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        let pos1 = Math.floor(Math.random() * arr.length);
        let pos2 = Math.floor(Math.random() * arr.length);
        swap(arr, pos1, pos2);

    }
};

//Function BlubbleSort
const bubble_sort = (arr) => {
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
            }
        }
        return arr;
    }
}

//Function SelectionSort
const selection_sort = (arr) => {
    let minIdx, temp, 
        len = arr.length;
    for(let i = 0; i < len; i++){
        minIdx = i;
        for(let j = i+1; j < len; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j;
            }
        }
        swap(arr, i, minIdx);
    }
    return arr;
}

//Function Partitioning
const partition = (arr, pivot, left, right) => {
    let pivotValue = arr[pivot], partitionIndex = left;

    for(let i = left; i < right; i++){
        if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

//Function QuickSort
const quick_sort = (arr, left, right) => {
    let len = arr.length, 
    pivot, partitionIndex;

    if(left < right){
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
        
        quick_sort(arr, left, partitionIndex - 1);
        quick_sort(arr, partitionIndex + 1, right);
    }
    return arr;
}