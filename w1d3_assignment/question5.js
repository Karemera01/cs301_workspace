const prompt=require("prompt-sync")();
let childAge=prompt("Please enter the child's age:");
let season=prompt("Please enter the season");
 
if(childAge<=5){
    if(season==="summer"||season==="fall"){
        console.log(`the Child's bedtime is 8:30pm`);
    }else if(season==="winter"||season==="spring"){
    console.log(`the Child's bedtime is 8:00pm`);
}
}
if(childAge>=6&&childAge<=12){
    if(season==="summer"){
        console.log(`the Child's bedtime is 9:30pm`);
    }else if(season==="winter"||season==="spring"||season==="fall"){
    console.log(`the Child's bedtime is 8:30pm`);
}
}
if(childAge>=13){
    if(season==="summer"){
        console.log(`the Child's bedtime is 10:30pm`);
    }else if(season==="winter"||season==="spring"||season==="fall"){
    console.log(`the Child's bedtime is 9:30pm`);

    } 
}