"use strict";
/**
 * 
 * @param {string} str;
 * @returns {string} result.
 */
function reverse (str) {
        if (str === "") {
            return "";
        } else {
            return reverse(str.substr(1)) + str.charAt(0);
        }
    }
    console.log(reverse("I love my girl"));