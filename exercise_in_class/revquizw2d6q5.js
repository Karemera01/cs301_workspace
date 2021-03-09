"use strict";

function equalArray(array1, array2) {

    if (array1.length !== array2.length) {
        return false;
    }
    let comparator= (a,b)=>a-b;
    array1.sort(comparator);
    array2.sort(comparator);


    for (let i = 0; i < array1.length; i++) {
        for (let j = i;j<=i; j++) {
            if (array1[i] !== array2[j]) {
                return false;

            }
        }

    }
    return true;
}
console.log(equalArray([3,8,1], [8,3,1]));