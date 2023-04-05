
export function constructTwoStringsWithCommas(le) {
    let array1 = [];
    let array2 = [];
    let a = Math.random();
   

    if(a > 0.5) {
        
        let number = Math.floor(Math.random() * le);
    
        for (let i = 0; i < number; i++) {
        let a = Math.floor(Math.random()*Math.random()*Math.random()*Math.random()*Math.random()*1000000);
        array1.push(a); 
        }
        for (let j=0; j < array1.length; j++) {
        array2.push(array1[j]*array1[j])
        }
          
    } else if (a > 0.25 && a <= 0.5) {
        let number1 = Math.floor(Math.random() * le);
    
        for (let i = 0; i < number1; i++) {
        let a = Math.floor(Math.random()*Math.random()*Math.random()*Math.random()*Math.random()*1000000);
        array1.push(a); 
        }

        let number2 = Math.floor(Math.random( )* le);

        for (let i = 0; i < number2; i++) {
            a = Math.floor(Math.random()*Math.random()*Math.random()*Math.random()*Math.random()*1000000);
            array2.push(a); 
            }
    } else {

        let number = Math.floor(Math.random() * le);
    
        for (let i = 0; i < number; i++) {
        let a = Math.floor(Math.random()*Math.random()*Math.random()*Math.random()*Math.random()*1000000);
        array1.push(a); 
        }

        for (let i = 0; i < number; i++) {
            a = Math.floor(Math.random()*Math.random()*Math.random()*Math.random()*Math.random()*1000000);
            array2.push(a); 
            }
    }
    
    let string1 = JSON.stringify(array1);
    let string2 = JSON.stringify(array2);
    let stringArr = [string1, string2];
       
    return stringArr;
   }

export default  constructTwoStringsWithCommas