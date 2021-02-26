// const prompt=require("prompt-sync")();
// let user_input=prompt

// let i=1;
// while(i<=20){
//     if(i%2===0){
//         console.log(i);
//     }
//     i++;
// }
//  for(let i=0;i<10;i++){
//      if(i%2!==0)  
//         console.log(i) 
//  }
//  for(let i=1;i<=5;i++){
//      let pattern="";
//      for(let j=1;j<=5;j++){
//          pattern+="*";
//      }
//      console.log(pattern);
//  }

// for(let i=1;i<=5;i++){
//     let pattern="";
//     for(let j=1;j<=5;j++){
//         pattern+=j;
//     }
//     console.log(pattern);
// }
// for(let i=1;i<=5;i++){
//     let pattern="";
//     for(let j=0;j<i;j++){
//         pattern+=i;
//     }
//     console.log(pattern);
// }
for(let i=1;i<=5;i++){
    let pattern="";
    for(let j=1;j<i;j++){
        pattern+=j;
    }
    console.log(pattern);
}


