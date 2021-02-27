let num=7;
let sum=0;
for(let i=1;i<num;i++){
    if(num%i===0){
      sum=sum+i; 
    }
    }
    if(sum===num){
console.log(`the number is a perfect number$`);
    }else{
        console.log(`the number is not a perfect number`);
    }