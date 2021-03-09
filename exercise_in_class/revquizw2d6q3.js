"use strict";

function deleteArrayElement(array,index){
    let copy=[];
    for(let i=0;i<array.length;i++){
        if(i===index){
            continue;

        }
        copy[i]=array[i];
    }
    return copy;
}


console.log(deleteArrayElement([2,5,6,7,8,4],4));