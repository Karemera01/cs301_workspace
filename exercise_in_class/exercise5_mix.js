"use strict";
function stringParm(str){
    if(str.length%2!==0){
        return str.chartAt(Math.ceil(str.length/2));
    }else{
        return str.chartAt((str.length/2) +(str.length/2+1));
    }
}
console.log(stringParm("Gerard"));