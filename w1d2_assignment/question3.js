const prompt=require("prompt-sync")();
let totalBoxes=+prompt("Enter the total number of boxes");
let numberBoxes=+prompt("Enter the number of boxes");
let numberStack=`the total number of stack is: ${Math.ceil(totalBoxes/numberBoxes)}`;
console.log(numberStack);