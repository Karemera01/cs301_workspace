"use strict";
/**
 * @returns {boolean} return true or false after checking the number.
 *  
 * @param {number} num is the number to be checked if it is a prime.
 
 */
function isPrime(num) {
    if (num === 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } else {
            return true;
        }

    }
}

let result = isPrime(2);
console.log(result);