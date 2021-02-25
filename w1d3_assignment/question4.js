const prompt=require("prompt-sync")();
let status=prompt("Please enter the status of the borrowing");
let booksBorrowed=+prompt("Please enter the number of books Overdue")
if(status==="Student"){
    if(booksBorrowed===0){
        console.log(`the Loan duration is:6`); 
    }else if(booksBorrowed>0&&booksBorrowed<3){
        console.log(`the Loan duration is:4`);
    }else if(booksBorrowed>=3){
        console.log(`the Loan duration is:2`); 
    }
}
if(status==="Faculty"){
    if(booksBorrowed===0){
        console.log(`the Loan duration is:12`);
    }else if(booksBorrowed>0&&booksBorrowed<3){
        console.log(`the Loan duration is:10`);
    }else if(booksBorrowed>=3){
        console.log(`the Loan duration is:8`); 
    }
}
if(status==="Other"){
    if(booksBorrowed===0){
        console.log(`the Loan duration is:4`);
    }else if(booksBorrowed>0&&booksBorrowed<3){
        console.log(`the Loan duration is:3`);
    }else if(booksBorrowed>=3){
        console.log(`the Loan duration is:2`); 
    }
}
