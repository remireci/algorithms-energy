export function selectionSort() {
    const timeSelectionSort = document.getElementById("selection-sort-time");
    modal.style.display = "none"
    let arraySorted = JSON.parse(localStorage.getItem("array"));

    const time1 = Date.now();
    const swap = (arraySorted, idx1, idx2) =>
        ([arraySorted[idx1], arraySorted[idx2]] = [arraySorted[idx2], arraySorted[idx1]]);

    for (let i = 0; i < arraySorted.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arraySorted.length; j++) {
            if (arraySorted[lowest] > arraySorted[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arraySorted, i, lowest);
    }
    const delta = Date.now() - time1;
    const objectSS = { result: arraySorted, time: delta, sort: "selection"};

    timeSelectionSort.innerHTML = objectSS.time + " ms";

    publishSortedArray(objectSS.result, objectSS.time, objectSS.sort)
}

export default selectionSort