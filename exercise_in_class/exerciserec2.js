"use strict";

// function abc(n){
//     if(n==0) {
//         return 0;
//     }
//     else{
        
//     return 1+ abc(n/10);
//     }
// }
//   console.log(abc("123")); 


//   function reverse (str) {
//     if (str === "") {
//         return "";
//     } else {
//         return reverse(str.substr(1)) + str.charAt(0);
//     }
// }
// console.log(reverse("I love my girl"));

function exponent(num,exp){
    if(exp===0){
        return 1;
    }else{
        return num*exponent(num,exp-1);
    }
}
console.log(exponent(4,2));