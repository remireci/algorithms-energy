function sameValuesNaive(arr1, arr2){

    let arr2Copy = [...arr2];
    let t1 = Date.now();
    let timeSVN;
    let objectSVN = {};
    
    if(arr1.length !== arr2Copy.length){
        
        timeSVN = Date.now() - t1;
        objectSVN = {result: false, time: timeSVN};
        return objectSVN;
    }
    

    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2Copy.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            
            timeSVN = Date.now() - t1;
            objectSVN = {result: false, time: timeSVN};
            return objectSVN;
        }
        
        arr2Copy.splice(correctIndex,1)
        
    }
    
    timeSVN = Date.now() - t1;
    objectSVN = {result: true, time: timeSVN};
    return objectSVN;
    
}


export default sameValuesNaive

