
export function radixSort() {

    const timeRadixSort = document.getElementById("radix-sort-time");
    modal.style.display = "none"
    let arraySorted = JSON.parse(localStorage.getItem("array"));
    const time1 = Date.now();

    let maxDigitCount = mostDigits(arraySorted);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arraySorted.length; i++) {
            let digit = getDigit(arraySorted[i], k);
            digitBuckets[digit].push(arraySorted[i]);
        }
        arraySorted = [].concat(...digitBuckets);
    }

    const delta = Date.now() - time1;
    const objectMS = { result: arraySorted, time: delta, sort: "radix"};
    timeRadixSort.innerHTML = objectMS.time + " ms";
    publishSortedArray(objectMS.result, objectMS.time, objectMS.sort)    
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

export default radixSort;