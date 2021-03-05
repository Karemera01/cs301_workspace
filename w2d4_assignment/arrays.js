"use strict";
/**
 * 
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2){
    for(let i=0;i<arr1.length;i++){
        if(arr1.length===arr2.length){
            arr1[i]=arr2[i];
            return true;
        }
    }
    
    return false;
}

/**
 * 
 * @param {array} arr ; 
 * @returns {number} result of addition of first and last elements of the array 
 */
function addend(arr){
    let lastElement;
    let firstElement;
    for(let i=0;i<arr.length;i++){
    
         lastElement=arr.pop();
         firstElement=arr[0];
         return lastElement+firstElement;
    }
 
    return 0;
}

module.exports= {isArrayEqual, addend}