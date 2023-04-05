export function constructArray(le) {
    const timeBubbleSort = document.getElementById("bubble-sort-time");
    const timeInsertionSort = document.getElementById("insertion-sort-time");
    const timeMergeSortRecursive = document.getElementById("merge-sort-recursive-time");
    const timeMergeSortIterative = document.getElementById("merge-sort-iterative-time");
    const timeSelectionSort = document.getElementById("selection-sort-time");
    const timeQuickSort = document.getElementById("quick-sort-time");
    const timeRadixSort = document.getElementById("radix-sort-time");
    timeBubbleSort.innerHTML = "not calculated";
    timeInsertionSort.innerHTML = "not calculated";
    timeMergeSortRecursive.innerHTML = "not calculated";
    timeMergeSortIterative.innerHTML = "not calculated";
    timeSelectionSort.innerHTML = "not calculated";
    timeQuickSort.innerHTML = "not calculated";
    timeRadixSort.innerHTML = "not calculated";
    arrayUnsortedPublish.innerHTML = "";
    arraySortedPublish.innerHTML = "";

    let array = [];

    if (le !== 0) {

        for (let i = 0; i < le; i++) {
            let a = Math.floor((Math.random() + 10) * (Math.random() + 2) * Math.random() * Math.random() * Math.random() * 1000000);
            array.push(a);
            
        }
    } else {
        array = JSON.parse(localStorage.getItem("array"));
    }

    localStorage.setItem("array", JSON.stringify(array));

    modalUnsortedArray(array);
}

async function modalUnsortedArray(arr) {

    document.body.style.overflow = "hidden";

    const modal = document.getElementById("modal");

    // Get the modal

    modal.style.display = "block";


    // // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];


    // When the user clicks the button, open the modal 
    // btn.onclick = function () {
    //     modal.style.display = "block";
    // }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {

        modal.style.display = "none";
        document.getElementById("sorting-result").hidden = true;

    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        document.body.style.overflow = "auto";
        if (event.target == modal) {
            modal.style.display = "none";

        }
    }

    // show unsorted array in modal
    const arrayUnsortedPublish = document.getElementById("arrayunsorted");
    arrayUnsortedPublish.innerHTML = "[" + arr + "]";
    // copy function in modal
    arrayUnsortedPublish.setAttribute('value', '[' + arr + ']')
}


export default constructArray;