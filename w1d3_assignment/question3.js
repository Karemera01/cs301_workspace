const prompt=require("prompt-sync")();
let costofHouse=+prompt("Please enter the cost of the house ($k)");

if(costofHouse>=0&&costofHouse<50){
    console.log(`The Down payment is $${costofHouse*0.05}k`);
}else if(costofHouse>=50&&costofHouse<100){
    console.log(`The Down payment is $${1+(costofHouse-50)*0.1}k`);
}else if(costofHouse>=100&&costofHouse<200){
    console.log(`The Down payment is $${2+(costofHouse-100)*0.15}k`);
}else{
    console.log(`The Down payment is $${5+(costofHouse-200)*0.1}k`);
}