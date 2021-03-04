function reverseDigits(n){
        let reversed=0;
        while(n>0){
            let lastDigit=n%10;
            reversed=reversed*10+lastDigit;
            n=Math.floor(n/10);
            
        }
        return reversed;
    }
        let result=reverseDigits(123);
        console.log(result);
        
function isPrimeNumber(n){
    
    for(let i=2;i<n;i++){
        if(n%i===0)
            return false;  
    }
}
return true;

function isReversedPrime(n){

    let reversedNum=reverseDigits(n);
    let result=isPrimeNumber(n);
    return result;
}
console.log(isReversedPrime(32));