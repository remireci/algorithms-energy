export function sameValuesFast(arr1, arr2) {

    let t1 = Date.now();
    let timeSV;
    let objectSV = {}

    if (arr1.length !== arr2.length) {

        timeSV = Date.now() - t1;
        objectSV = { result: false, time: timeSV };
        return objectSV;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            timeSV = Date.now() - t1;
            objectSV = { result: false, time: timeSV };
            return objectSV;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            timeSV = Date.now() - t1;
            objectSV = { result: false, time: timeSV };
            return objectSV;
        }
    }

    timeSV = Date.now() - t1;
    objectSV = { result: true, time: timeSV };
    return objectSV;
}

export default sameValuesFast