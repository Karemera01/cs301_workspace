"use strict";

function mergedArray(array1, array2) {
 
    array1.sort(comparator);

    array2.sort(comparator);

    for (let i = 0; i < array2.length ; i++) {
        array1.push(array2[i]);
       

    }
    for(let i=0;i<array2.length;i++){
         array2.shift();

    }
    array1.sort(comparator);
    return array1;

}
console.log(mergedArray([3, 1, 3, 5], [3, 1, 3, 5]));

function comparator(a,b){
    if(a>b)return 1
    if(a<b)return -1
    else return 0;
}