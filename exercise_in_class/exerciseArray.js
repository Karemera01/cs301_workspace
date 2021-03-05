"use strict";
const scores=[10,20,30,40,50];
/**
 * 
 * @param {number} arr;
 * @returns {number} result is the average;
 */
function findAverage(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];

    }
    let average=sum/arr.length;
    return average;
}
console.log(findAverage(scores));


const scores2=[];
for(let i=0;i<10;i++){
    scores2[i]=Math.floor(Math.random()*10);

}
console.log(scores2);
