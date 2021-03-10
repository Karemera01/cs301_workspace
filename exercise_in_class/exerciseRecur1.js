"use strict";

// function factorial(n){
//     if(n==0){
//         return 1;
//     }else{
//         return n*factorial(n-1);
//     }
// }
// console.log(factorial(1));
// function fibonacci(n){
//     if(n==0){
//         return 0;
//     }else if(n===1){
//         return 1;
//     }else{
//         return fibonacci(n-1)+fibonacci(n-2);
//     }
// }
// console.log(fibonacci(7));

// function countDigits(n){
//     let count=0;
//     while(n!==0){
// n=Math.floor(n/10);
// count++

//     }
//     return count;
// }

//     console.log(countDigits(313));

// function countDigit(n){
   
//     if(n==0){
//         return 0;
//     }else {
//    return 1+countDigit(n / 10);
//     }
    
// }
// console.log(countDigit(1236));

function abc(n){
    if(n==0) {
        return 0;
    }
    else{
        
    return 1+ abc(n/10);
    }
}
  console.log(abc(123)); 