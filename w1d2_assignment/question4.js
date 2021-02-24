const prompt=require("prompt-sync")();
let beginOdometer=+prompt("Enter the beginning of the odometer readings");
let endOdometer=+prompt("Enter the ending of the odometer readings");
let gasGallonsUsed=+prompt("Enter the number of gallons of gas used");
let vehicleMilleage=`the milleage of the vehicle per gallons is:${(endOdometer-beginOdometer)/gasGallonsUsed}`;
console.log(vehicleMilleage);
