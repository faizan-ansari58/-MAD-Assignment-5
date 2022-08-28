var input1 : string | null = prompt("Enter Base side ");
var input2 : string | null = prompt("Enter Perpendicular side ");
var input3 : string | null = prompt("Enter Hypotenuse side ");
var base : number = Number(input1);
var perpendicular : number = Number(input2);
var hypotenuse : number = Number(input3);
var result1 : number = (base*base);
var result2 : number = (perpendicular*perpendicular);
var result3 : number = (hypotenuse*hypotenuse); 

console.log("Base x Base = " ,result1)
console.log("Perpendicular x Perpendicular = " ,result2)
console.log("*Hypotenuse x Hypotenuse = " ,result3)
if(result1 + result2  ==  result3)
{
    console.log("This is valid triangle")
}
else
{
    console.log("This is invalid triangle")
}