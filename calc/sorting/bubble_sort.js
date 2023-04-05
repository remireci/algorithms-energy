// UNOPTIMIZED VERSION OF BUBBLE SORT

export function bubbleSort() {
  const timeBubbleSort = document.getElementById("bubble-sort-time");
  modal.style.display = "none"
  let arraySorted = JSON.parse(localStorage.getItem("array"));
  // arraySortedResult.innerHTML = arraySorted;

  const time1 = Date.now();
  for (var i = arraySorted.length; i > 0; i--) {
      for (var j = 0; j < i - 1; j++) {

          if (arraySorted[j] > arraySorted[j + 1]) {
              var temp = arraySorted[j];
              arraySorted[j] = arraySorted[j + 1];
              arraySorted[j + 1] = temp;
          }
      }
  }
  const delta = Date.now() - time1;
  const objectBS = { result: arraySorted, time: delta, sort: "bubble" };
  
  timeBubbleSort.innerHTML = objectBS.time + " ms";

  publishSortedArray(objectBS.result, objectBS.time, objectBS.sort)

}


export default {
  bubbleSort
} 

// export function bubbleSort(arr){
//   const time1 = Date.now();
//     for(var i = arr.length; i > 0; i--){
//       for(var j = 0; j < i - 1; j++){
      
//         if(arr[j] > arr[j+1]){
//           var temp = arr[j];
//           arr[j] = arr[j+1];
//           arr[j+1] = temp;         
//         }
//       }
//     }
//     const delta = Date.now() - time1;
//     objectBS = {result: arr, time: delta};
//         return objectBS;
    
//   }

//   function swap(i1, i2, arr) {
//     [arr[i1], arr[i2]] = [arr[i2], arr[i1]]; 
// } 


  // ES2015 Version
//   function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };
  
//     for (let i = arr.length; i > 0; i--) {
//       for (let j = 0; j < i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           swap(arr, j, j + 1);
//         }
//       }
//     }
//     return arr;
//   }
  
//   bubbleSort([8,1,2,3,4,5,6,7]);
