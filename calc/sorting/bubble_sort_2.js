// normaly no difference in speed, but let's test
function swap(i1, i2, arr) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]]; 
} 

function bubbleSort(array, comparator) {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (comparator ? comparator(array[j], array[j + 1]) > 0 : array[j] > array[j + 1]) {
                console.log(array[j], array[j + 1], 'swap');
                swap(j, j + 1, array);       
            }     
        }   
    }   
    return array; 
}