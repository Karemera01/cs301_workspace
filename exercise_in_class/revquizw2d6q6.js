"use strict";

function mergedArray(array1, array2) {

    array1.sort();
    array2.sort();

    for (let i = 0; i < array2.length ; i++) {
        array1.push(array2[i]);
       

    }
    for(let i=0;i<array2.length;i++){
         array2.shift();

    }
    array1.sort();
    return array1;

}
console.log(mergedArray([3, 1, 3, 5], [3, 1, 3, 5]));