// let message="hello";
// console.log(message);


// const prompt=require("prompt-sync")();
// let name=prompt("Please enter your name");
// console.log(`hi ${name}`);


//  const prompt=require("prompt-sync")();
//  let firstValue=+prompt("enter the first number");
//  let secondValue=+prompt("enter the second number");

//  console.log(`tyhe sum of two numbers is ${firstValue+secondValue}`);
// console.log(Math.round(Math.PI));
// console.log(Math.random());

// const prompt=require("prompt-sync")();
// let radius=+prompt("Enter the radius");
// let height=+prompt("Enter the height");
// console.log("The volume of the a Cylinder is :" + Math.PI*Math.pow(radius,2)*height);

const prompt=require("prompt-sync")();
let x1=+prompt("Enter the first x1");
let x2=+prompt("Enter the second x2");
let y1=+prompt("Enter the first y1");
let y2=+prompt("Enter the second x1");

console.log("The distance between two points is: " + Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)));
