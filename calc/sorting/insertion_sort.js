// export function insertionSort() {

//     const timeInsertionSort = document.getElementById("insertion-sort-time");
//     modal.style.display = "none"
//     let arr = JSON.parse(localStorage.getItem("array"));
//     const time1 = Date.now();
//     const change = (arr, indx1, indx2) => {
//         [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
//     }
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i; j >= 0; j--) {
//             if (arr[j] < arr[j - 1]) {
//                 change(arr, j, j - 1)
//             }
//         }
//     }
//     const delta = Date.now() - time1;
//     const objectIS = { result: arr, time: delta };

//     timeInsertionSort.innerHTML = objectIS.time + " ms";
//     publishSortedArray(objectIS.result)

// }


export function insertionSort() {
    const timeInsertionSort = document.getElementById("insertion-sort-time");
    modal.style.display = "none"
    let arr = JSON.parse(localStorage.getItem("array"));
    const time1 = Date.now();

    var currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]

        }
        arr[j + 1] = currentVal;

    }
    const delta = Date.now() - time1;
    const objectIS = { result: arr, time: delta, sort: "insertion" };

    timeInsertionSort.innerHTML = objectIS.time + " ms";
    publishSortedArray(objectIS.result, objectIS.time, objectIS.sort)
}




export default insertionSort
