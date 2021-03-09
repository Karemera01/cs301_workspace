"use strict";

function isEvenDominated(array) {
    let count = 0;
    let count2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count = count + array[i];
        } else if (array[i] % 2 !== 0) {
            count2 = count2 + array[i];
        }
    }
    if (count > count2) {
        return true;
    }
    return false;
}

console.log(isEvenDominated([1, 3, 4, 5, 6, 7, 8, 2]));