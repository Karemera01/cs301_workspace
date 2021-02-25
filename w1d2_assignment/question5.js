const prompt=require("prompt-sync")();
let age=+prompt("Enter the age ");
let maximumRate=`The maximum person heart rate is:${220-age}`;
let slowestRate=`the slowest person rate is:${(220-age)*0.65}`;
let fastestRate=`the fastest person rate is:${(220-age)*0.85}`;
console.log(maximumRate);
console.log(slowestRate);
console.log(fastestRate);


