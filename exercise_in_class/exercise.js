const prompt =require("prompt-sync")();
let weather=prompt("Please enter the weather for today");

if(weather==="Rainy"){
    console.log("Get an umbrella");
}else{
    console.log("It's a beautifull day");
}