const prompt=require("prompt-sync")();
let convertQuartInVolume=+prompt("Enter the volume in Quart");
let volumeInLiters=`the volume in liters is :${convertQuartInVolume *0.946}`;
console.log(volumeInLiters);