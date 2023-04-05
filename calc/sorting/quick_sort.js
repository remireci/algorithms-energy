export function quickSort() {

    const timeQuickSort = document.getElementById("quick-sort-time");
    modal.style.display = "none";
    let arraySorted = JSON.parse(localStorage.getItem("array"));
    const time1 = Date.now();
    arraySorted = quickSortRec(arraySorted);
    const delta = Date.now() - time1;
    const objectMS = { result: arraySorted, time: delta, sort: "quick"};
    timeQuickSort.innerHTML = objectMS.time + " ms";
    publishSortedArray(objectMS.result, objectMS.time, objectMS.sort)
}

function quickSortRec(arraySorted, left = 0, right = arraySorted.length) {

    if (left < right) {
        let pivotIndex = pivot(arraySorted, left, right) //3
        //left
        quickSortRec(arraySorted, left, pivotIndex - 1);
        //right
        quickSortRec(arraySorted, pivotIndex + 1, right);
    }
    return arraySorted;
}



function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}


export default quickSort