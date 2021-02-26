const prompt=require("prompt-sync")();
let number=+prompt("Please enter the number");
let isPrime=true;
for(let i=2;i<number;i++){
if(number%i==0){
   isPrime=false;
   break;
}
}
if(isPrime){
    console.log(`It is a prime number`);
}else{
    console.log(`It is not a prime number`);
}