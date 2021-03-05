"use strict";
/**
 * 
 * @param {Array} arr first array.
 * @returns {boolean} result.
 */
function isPalindrome(arr){
     let copy=[];
     for(let num of arr){
         copy.push(num);
     }
     for(let i=0;i<arr.length;i++){
         if(arr.shift()!==copy.pop()){
             return false;
         }
     }
     return true;
}
console.log(isPalindrome(1,2,3));