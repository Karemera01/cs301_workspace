"use strict";
function getMiddle(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        if(array.length%2!==0){
            return array[Math.floor(array.length/2)];
        }else if(array.length%2===0){
            sum= array[(array.length/2)-1]+array[array.length/2];
        }
        let average= sum/2;
        return average;
    }
}
console.log(getMiddle([1,2,3,4,5,6,8]));