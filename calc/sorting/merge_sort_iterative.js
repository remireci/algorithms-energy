export function mergeSortIterative() {
    const timeMergeSortIterative = document.getElementById("merge-sort-iterative-time");
    modal.style.display = "none"
    let arr = JSON.parse(localStorage.getItem("array"));
    const time1 = Date.now();
    let sorted = arr.slice();
    let n = sorted.length;
    let buffer = new Array(n);

    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
            let left = leftStart,
                right = Math.min(left + size, n),
                leftLimit = right,
                rightLimit = Math.min(right + size, n),
                i = left;
            while (left < leftLimit && right < rightLimit) {
                if (sorted[left] <= sorted[right]) {
                    buffer[i++] = sorted[left++];
                } else {
                    buffer[i++] = sorted[right++];
                }
            }
            while (left < leftLimit) {
                buffer[i++] = sorted[left++];
            }
            while (right < rightLimit) {
                buffer[i++] = sorted[right++];
            }
        }
        let temp = sorted;
        sorted = buffer
        buffer = temp;
    }

    const delta = Date.now() - time1;
    const objectMS = { result: sorted, time: delta, sort: "mergeit" };

    timeMergeSortIterative.innerHTML = objectMS.time + " ms";
    publishSortedArray(objectMS.result, objectMS.time, objectMS.sort)
}

export default mergeSortIterative;