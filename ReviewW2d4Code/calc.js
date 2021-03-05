"use strict";
/**
 * 
 * @param {number} op1 first number to add.
 * @param {number} op2 second number to add.
 * @returns {number} result of addition of the first number to the second number.
 */
function add(op1, op2) {

return op1+op2;
}

/**
 * 
 * @param {number} op1 first number.
 * @param {number} op2 second number.
 * @returns {number} result of substraction of first number to the second number.
 */
function sub(op1, op2) {
  
    return op1-op2;
}

/**
 * 
 * @param {number} op1 first number.
 * @param {number} op2 second number.
 * @returns {number} result of the first number divided to the second number.
 */
function div(op1, op2) {
    return op1/op2;
    
}


module.exports = {add, sub, div};