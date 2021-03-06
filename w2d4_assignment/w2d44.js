function rotateleft(array){
    
    for(let i=0;i<array.length;i++){
         array[i]=array[i+1];
         
          
    }
    let result=array[i]
    return result;
}
console.log(rotateleft([1,2,3,4,5]));