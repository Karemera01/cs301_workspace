// const prompt=require("prompt-sync")();
// let 

// function isOdd(n){
//     if(n%2===0){
//         return false;
//     } 
//     return true;
// }
// let result=isOdd(6);
// console.log(result);

// function reverseDigits(n){
//     let reversed=0;
//     while(n>0){
//         let lastDigit=n%10;
//         reversed=reversed*10+lastDigit;
//         n=Math.floor(n/10);
//     }
//     return reversed;
   
// }
// console.log(reverseDigits(123));

// let numberOfStudent=22;
// let numberOfTeams=5;

// let initialTeamSize=Math.floor(numberOfStudent/numberOfTeams);
// let extraStudent=numberOfStudent%numberOfTeams;
// let teamsWithExtraStudent=extraStudent; 
// let teamsWithStandardSize=numberOfTeams-teamsWithExtraStudent;

// console.log(`${teamsWithExtraStudent}teams of${initialTeamSize} and ${teamsWithStandardSize} teams of ${initialTeamSize}`);

const prompt=require("prompt-sync")();
let numberOfStudent=prompt("Please Enter the number of student ");
let numberOfTeams=prompt("Please Enter the number of Teams");

let defaultSize=Math.floor(numberOfStudent/numberOfTeams);
let extra=numberOfStudent%numberOfTeams;
if(extra===0){
    console.log(`${numberOfTeams}teams of${defaultSize}`);
}else{
    console.log(`${extra}teams of${defaultSize+1} and ${numberOfTeams-extra} teams of${defaultSize}`);

}