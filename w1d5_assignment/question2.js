"use strict";
/**
 * @param {number} radius is the number to be raised to 2 and multiplied to (Math.PI).
 * 
 * @return {number} result 
 */
function areaOfCircle(radius) {
    let area = Math.pow(radius, 2) * Math.PI;
    return area;
}
let result = areaOfCircle(2);

/**
 * 
 * @param {number} height number to be multiplied to the result of tha area of a cirlcle.
 * 
 * @returns {number} result.
 */
function volumeOfCylinder(height) {
    let Volume = result * height;
    return Volume;
}

let resultVolume = volumeOfCylinder(3);
console.log(resultVolume);



