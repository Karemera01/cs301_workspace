"use strict";

function isPerfectlyOdd(array){
    if(array.length===0){
        return false;
    }
    for(let i=0;i<array.length;i++){
        if(i%2!==0&& array[i]%2!==0){
            return true;
        }
    }
    return false;
}
console.log(isPerfectlyOdd([]));
console.log(isPerfectlyOdd([2,3,4,5,7,8]));
console.log(isPerfectlyOdd([3,9,9,5,5,7,9]));



