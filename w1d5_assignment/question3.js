const prompt=require("prompt-sync")();
let width=+prompt("Please enter the width");
let depth=+prompt("Please enter the depth");
let height=+prompt("Please enter the height");
let sweep=+prompt("Please enter the sweep");
let livingVolume=width*height*depth;
console.log(`the living volume is ${livingVolume}`);

function triangleOfArea(a,b,c){
    let s=(a+b+c)/2;
    let triangleArea=Math.sqrt(s(s-a)(s-b)(s-c));
    return triangleArea;
}


