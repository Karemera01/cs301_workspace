"use strict";
/**
 * 
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

/**
 * 
 * @param {array} arr ; 
 * @returns {number} result of addition of first and last elements of the array 
 */
function addend(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[0] + arr[arr.length - 1];
    }
    return sum;
}
/**
 * 
 * @param {Array} array ;
 * @returns {number} result of the average.
 */
function getMiddle(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array.length % 2 !== 0) {
            return array[Math.floor(array.length / 2)];
        } else if (array.length % 2 === 0) {
            sum = array[(array.length / 2) - 1] + array[array.length / 2];
        }
        let average = sum / 2;
        return average;
    }
}


module.exports = { isArrayEqual, addend, getMiddle };
