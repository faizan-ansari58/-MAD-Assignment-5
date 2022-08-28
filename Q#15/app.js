var input1 = prompt("Enter Base side ");
var input2 = prompt("Enter Perpendicular side ");
var input3 = prompt("Enter Hypotenuse side ");
var base = Number(input1);
var perpendicular = Number(input2);
var hypotenuse = Number(input3);
var result1 = (base * base);
var result2 = (perpendicular * perpendicular);
var result3 = (hypotenuse * hypotenuse);
console.log("Base x Base = ", result1);
console.log("Perpendicular x Perpendicular = ", result2);
console.log("*Hypotenuse x Hypotenuse = ", result3);
if (result1 + result2 == result3) {
    console.log("This is valid triangle");
}
else {
    console.log("This is invalid triangle");
}
