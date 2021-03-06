"use strict";

function addend(arr){
    let sum=0;
    for(let i=0;i<arr.length ;i++){
     sum=arr[0]+arr[arr.length-1];    
}
return sum;
}

console.log(addend([-1, -100, 1, 2, 3, -55]));