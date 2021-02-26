const prompt=require("prompt-sync")();
let factorialNumber =prompt("please enter the number");

for(let i=factorialNumber-1;i>0;i--){
factorialNumber=factorialNumber*i;
}
console.log(factorialNumber);
