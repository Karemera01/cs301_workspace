"use strict";

function titleCase(s){
    
  let newString= s.toLowerCase().split(" ");
  
  for(let i=0;i<newString.length;i++){
      
newString=newString[i].charAt(0).toUpperCase()+newString[i].substring(1);
// newString.join();

  }
  return newString;

}
console.log(titleCase("hey mon Coeur je t'aime"));