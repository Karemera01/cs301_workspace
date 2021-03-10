"use strict";
// function swap(num1, num2) {

//     let z = num2;
//     num2 = num1;
//     num1 = z;
//     console.log(num1,+num2);
// }
// swap(5, 7);

function swapProp(ob1, ob2, prop) {
    let temp = ob1[prop];
    ob1.name = ob2[prop];
    ob2[prop] = temp;
}
ob1= { name: "john", age: 5 };
ob2= { name: "eric", age: 10 };
console.log(ob1,ob2);
swapProp(ob1,ob2,"age");
console.log(ob1,ob2);

console.log(swapProp({ name: "john", age: 5 }, { name: "eric", age: 10 }, "name"));