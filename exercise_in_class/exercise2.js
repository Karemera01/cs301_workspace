const prompt=require("prompt-sync")();
let number=+prompt("please enter a number between 1 and 10");

if(number===7){
    console.log("Bingo");
}else{
    console.log("try again");
}