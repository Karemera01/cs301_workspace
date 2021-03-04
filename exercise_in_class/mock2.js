
// const prompt=require("prompt-sync")();
// let guessedNumber;
// numberAttempts=0;
// do{
//     guessedNumber=+prompt("please enter the guessed number between 1 and 10");

//     numberAttempts++;
//     console.log(`Please try again`);
    
// }while(guessedNumber!==5){
// if(numberAttempts===1){
//     console.log(`awesome`);
// }else if(numberAttempts===2){
//     console.log(`Great`);
// }else if(numberAttempts===3){
//     console.log(`Not bad`);
// }else{
// console.log(`It took you ${guessedNumber}attempts`)
// }
// }

// let guessedPin=prompt("please enter your pin")
// let consta
// while(guessedPin!=="1132"){
//     break;
// }
//     if(numberAttempts===guessedPin){
//         console.log(`correct,welcome back`);
//     }else if(numberAttempts===guessedPin){
//         console.log(`incorect try again`);
//     }else{
//         console.log(` sory but you have run out of tries`);
//     }
// }

// const prompt=require("prompt-sync")();
// let speed=prompt("please enter the speed");

// function checkSpeed(speed){
//     const speedLimit=70;
//     const kmPerHour=5;
//     if(speed<speedLimit+kmPerHour){
//         return`iT IS OK`;
//     }
//     const points=Math.floor((speed-speedLimit)/kmPerHour);
//     if(points>=12){
//         return `your lincence is suspended`;
//     }else{
//         return(`points`,points);
//     }
        
//     }
//     console.log(checkSpeed(speed));



// function calculateAverage(array){
   
//     let sum=0;
//     for(let value of array){
//         sum+=value;
        
//     }
//     return sum/array.length;
    
// }
// function calculateGrade(marks){
//     let average=calculateAverage([50,89,95]);
//     if(average<60)return "F";
//     if(average<70)return "D";
//     if(average<80)return "C";
//     if(average<90)return "B";
//     return "A";
// }

// console.log(calculateGrade(95));
// function showStars(rows){
//     for(let i=0;i<rows;i++){
//         let pattern="";
//         for(let j=1;j<i;j++){
//            pattern+="*"; 
//         }
//     }
//     return pattern;
   
// }
// console.log(showStars(10));

function reverseDigits(input){
    let lastDigits;
    while(input>0){
        lastDigits=input%10;
       input=Math.floor(input/10); 
       
    }

}
console.log(reverseDigits(123));

