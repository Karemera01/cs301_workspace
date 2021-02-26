const prompt=require("prompt-sync")();
let year=prompt("Please enter the Year");

if(year%4===0 && year%100!==0|| year%400===0){
    console.log(`It is a leap Year`);
}else{
    console.log(`it is not a leap year`)
}