const prompt=require("prompt-sync")();
let studentName=prompt("Please enter Student name");
let credit=prompt("please enter the number of completed credit");

if(credit>0&&credit<30){
    console.log(`Freshman ${studentName} `);
}
if(credit>=30&&credit<60){
    console.log(`Sophomore ${studentName} `);
}
if(credit>=60&& credit<90){
    console.log(`Junior ${studentName} `);
}
if(credit>90){
    console.log(`Senior ${studentName} `); 
}