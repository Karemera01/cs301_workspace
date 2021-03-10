"use strict";
/**
 * 
 * @param {number} num;
 * @returns {number} result.
 */
function counDigit(num){
        if(num==0) {
            return 0;
        }
        else{
            
        return 1+ counDigit(num/10);
        }
    }
      console.log(counDigit("123")); 
    