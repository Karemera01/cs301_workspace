const prompt=require("prompt-sync")();
let distanceInKilometer=+prompt("Enter the distance in kilometer");
let distanceInMile=`the distance in mile is:${distanceInKilometer*0.621}`;
console.log(distanceInMile);