"use strict";
function getAverage(users){
    let count=0;
    let sum=0;
for(let key in users){
    
    sum+=users[key].age;
    count++;
}
return sum/count;

}

console.log(getAverage([{name:"manzi",age:10},{name:"muhire",age:40}]));