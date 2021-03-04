const prompt=require("prompt-sync")();
let grossSalary=+prompt("please enter the Gross salary in $k");

if(grossSalary<20){
    console.log(`it should pay no federal taxes`);
}
if(grossSalary>20&&grossSalary<50){
    console.log(`the federal taxes to be payed is:${grossSalary*0.5}`);
}
if(grossSalary>50){
    console.log(`The federal taxes to be payed is:${1.5+(grossSalary-50)*0.1}`)
}