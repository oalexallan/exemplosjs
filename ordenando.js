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
    let minIdx, temp, len = arr.length;
        len = arr,length;
        for(let i = 0; i <len; i++){
            minIdx = 1;
            for(let j = i+1; j < len; j++){
                if(arr[j] <arr[minIdx]){
                    minIdx = j;
                }
            }
            swap(arr, i, minIdx);
        }
        return arr;
};

//Function Partitioning
const partition = (arr, pivot, left, rigth) => {
    let pivotValue = arr[pivot]
    
}