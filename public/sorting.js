const arraySortedPublish = document.getElementById("arraySorted");
const arrayUnsortedPublish = document.getElementById("arrayUnsortedResult");
const sortingResults = document.getElementById("sorting-result");
let collectionTimes = {};
let collectionsRelativeTime = {};

if (sortingResults !== null) {
    sortingResults.hidden = true
}

async function makeArray(num) {
    collectionTimes = {};
    collectionsRelativeTime = {};
    const make = await import('/sorting/arrayToSort.js');
    arrayUnsortedPublish.innerHTML = "";
    arraySortedPublish.innerHTML = "";
    make.constructArray(num);
}

async function inBubbleSort() {
    const sortArray = await import('/sorting/bubble_sort.js')
    sortArray.bubbleSort();
}

async function inInsertionSort() {
    const sortArray = await import('/sorting/insertion_sort.js')
    sortArray.insertionSort();
}

async function inMergeSortRecursive() {
    const sortArray = await import('/sorting/merge_sort_recursive.js')
    sortArray.mergeSortRecursive();
}

async function inMergeSortIterative() {
    const sortArray = await import('/sorting/merge_sort_iterative.js')
    sortArray.mergeSortIterative();
}

async function inSelectionSort() {
    const sortArray = await import('/sorting/selection_sort.js')
    sortArray.selectionSort();
}

async function inQuickSort() {
    const sortArray = await import('/sorting/quick_sort.js')
    sortArray.quickSort();
}

async function inRadixSort() {
    const sortArray = await import('/sorting/radix_sort.js')
    sortArray.radixSort();
}

// show results and the two arrays
async function publishSortedArray(arrS, time, sort) {
    document.getElementById('results').scrollIntoView();
    document.getElementById("sorting-result").hidden = false;
    // show sorted array in results
    arraySortedPublish.innerHTML = "[" + arrS + "]";
    // copy function in results
    const arrayS = document.getElementById("arraySorted")
    arrayS.setAttribute('value', '[' + arrS + ']')
    // get unsorted array
    arr = JSON.parse(localStorage.getItem("array"))
    // show unsorted array in results
    arrayUnsortedPublish.innerHTML = '[' + arr + ']';
    // copy function in results
    const arrayUnS = document.getElementById("arrayUnsortedResult")
    arrayUnS.setAttribute('value', '[' + arr + ']')
    timeBars(time, sort);
}

// set progress bars relative time
async function timeBars(time, sort) {
    const timeBubble = document.getElementById("bubble-time");
    const timeInsertion = document.getElementById("insertion-time");
    const timeMergeRecursive = document.getElementById("merge-rec-time");
    const timeMergeIterative = document.getElementById("merge-it-time");
    const timeSelection = document.getElementById("selection-time");
    const timeQuick = document.getElementById("quick-time");
    const timeRadix = document.getElementById("radix-time");

    collectionTimes[sort] = time;

    let timeSum = (Number(collectionTimes.bubble) ? Number(collectionTimes.bubble) : 0)
        + (Number(collectionTimes.insertion) ? Number(collectionTimes.insertion) : 0)
        + (Number(collectionTimes.mergere) ? Number(collectionTimes.mergere) : 0)
        + (Number(collectionTimes.mergeit) ? Number(collectionTimes.mergeit) : 0)
        + (Number(collectionTimes.selection) ? Number(collectionTimes.selection) : 0)
        + (Number(collectionTimes.quick) ? Number(collectionTimes.quick) : 0)
        + (Number(collectionTimes.radix) ? Number(collectionTimes.radix) : 0);

    collectionsRelativeTime.bubble = 100 - collectionTimes.bubble / timeSum * 100;
    collectionsRelativeTime.insertion = 100 - collectionTimes.insertion / timeSum * 100;
    collectionsRelativeTime.mergere = 100 - collectionTimes.mergere / timeSum * 100;
    collectionsRelativeTime.mergeit = 100 - collectionTimes.mergeit / timeSum * 100;
    collectionsRelativeTime.selection = 100 - collectionTimes.selection / timeSum * 100;
    collectionsRelativeTime.quick = 100 - collectionTimes.quick / timeSum * 100;
    collectionsRelativeTime.radix = 100 - collectionTimes.radix / timeSum * 100;

    timeBubble.setAttribute("value", collectionsRelativeTime.bubble);
    timeInsertion.setAttribute("value", collectionsRelativeTime.insertion);
    timeMergeRecursive.setAttribute("value", collectionsRelativeTime.mergere);
    timeMergeIterative.setAttribute("value", collectionsRelativeTime.mergeit);
    timeSelection.setAttribute("value", collectionsRelativeTime.selection);
    timeQuick.setAttribute("value", collectionsRelativeTime.quick);
    timeRadix.setAttribute("value", collectionsRelativeTime.radix);

    window.location.replace("https://localhost:9000/sorting_algorithms#results");
}