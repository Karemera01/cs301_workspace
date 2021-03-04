"use strict";

const prompt = require("prompt-sync")();
let width = +prompt("Please enter the width");
let depth = +prompt("Please enter the depth");
let height = +prompt("Please enter the height");
let sweep = +prompt("Please enter the sweep");
let livingVolume = width * height * depth;
console.log(`the living volume is ${livingVolume}`);

/**
 * 
 * @param {number} num1 first number to sum .
 * @param {number} num2  second number to sum.
 * @param {number} num3  third number to sum.
 * 
 * @returns {number} result of the square root of the sum of numbers divided by 2 in the given formula. 
 */
function areaOfTriangle(num1, num2, num3) {
    sweep = (num1 + num2 + num3) / 2;
    let triangleArea = Math.sqrt(sweep * (sweep - num1) * (sweep - num2) * (sweep - num3));
    return triangleArea;
}
let result = areaOfTriangle(5, 4, 3)
// console.log(result);

/**
 * 
 * @param {number} width number to find the volume of the roof.
 * @returns {number}  get the result by multiplying the width and the area of Triangles.
 */
function volumeOfRoof(width) {
    let roofVolume = result * width;
    return roofVolume;
}
let result2 = volumeOfRoof(width);
console.log(`the volume of the roof is ${result2}`);

console.log(`the house volume is;${livingVolume + result2}`);