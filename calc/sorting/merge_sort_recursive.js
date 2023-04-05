export function mergeSortRecursive() {
    const timeMergeSort = document.getElementById("merge-sort-recursive-time");
    modal.style.display = "none"
    let arraySorted = JSON.parse(localStorage.getItem("array"));
    const time1 = Date.now();
    arraySorted = mergeSortRec(arraySorted);
    const delta = Date.now() - time1;
    const objectMS = { result: arraySorted, time: delta, sort:"mergere"};
    
    timeMergeSort.innerHTML = objectMS.time + " ms";
    publishSortedArray(objectMS.result, objectMS.time, objectMS.sort)

}

function mergeSortRec(array, time1) {
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = mergeSortRec(array.slice(0, mid));
    let right = mergeSortRec(array.slice(mid));
    return merge(left, right);

}

// Merge function
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;

}

export default mergeSortRecursive;