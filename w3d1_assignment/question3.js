"use strict";

function checkSpam(str){
    if(str.includes("lottery")|| str.includes("prize")){
        return true;
    }
    return false;
}

console.log(checkSpam("i love  and Prize i can win in it"));