"use strict";

function duplicateElement(array){
    let count=0;
    
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]===array[j]){
                count++;
            }
        }
    }
    return count;
    
}
console.log(duplicateElement([1,3,4,3,1,6,4,8]));