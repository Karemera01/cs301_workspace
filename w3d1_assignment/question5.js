"use strict";

function titleCase(s){
    
  let newString= s.toLowerCase().split(" ");
  
  for(let i=0;i<newString.length;i++){
      
newString[i]=newString[i].charAt(0).toUpperCase()+newString[i].substring(1);


  }
//   let copy=newString.join(" ");
  
  return newString.join(" ");

}
console.log(titleCase("hey mon Coeur je t'aime"));