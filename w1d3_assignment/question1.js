const prompt=require("prompt-sync")();
let weather=prompt("please enter the weather type ");

if(weather==="hot"){
    console.log("sandals");
}else if(weather==="rain"){
    console.log("galoshes");
}else if(weather==="snow"){
console.log("boots");
}else{
    console.log("sneakers");
}


