"use strict";
function isprime(array){
    
    for(i=0;i<array.length;i++){
        if(array[i]>=2 && array[i]%i===0){
            return true
        }
    }
    return false;
}
function SumOfPrime(array){
    let num=isprime();
    let sum=0;
    for(let i=0;i<array.length;i++){
        if(array[i]===num){
            sum+=num;
        }
    }
    return sum;
}
function isSumOfPrimeEven(array){
   let sumPrime=SumOfPrime(array);
   if(array.length===0){
       return false;
   }