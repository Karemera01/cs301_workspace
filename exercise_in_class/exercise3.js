const prompt=require("prompt-sync")();
let age=+prompt("Please enter your age" );

if(age <=0){
    console.log("please enter a valid age ");
}

if(age>19){
    console.log("You can drive");
}else if(age>=15&&age<=18){
    console.log("You can drive under supervison");
}else if(age >0&& age<=14){
    console.log("You can't drive yet");
}
