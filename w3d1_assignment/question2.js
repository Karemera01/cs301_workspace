"use strict";
function  countProperties(obj){
    let count=0;
    for(let key in obj ){
        count++;
    }
    return count;
}
console.log(countProperties({make:"TOYATA", model:"camry"}));