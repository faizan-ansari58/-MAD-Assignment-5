var input1 : string | null = prompt("Enter first side")
var input2 : string | null = prompt("Enter first side")
var input3 : string | null = prompt("Enter first side")
var side1 : number = Number(input1)
var side2 : number = Number(input2)
var side3 : number = Number(input3)
console.log("Side one is " ,side1)
console.log("Side two is " ,side2)
console.log("Side three is " ,side3)
if(side1 == side2 && side2 == side3 )
{
    console.log("The triangle is equilateral")
}
else if(side1 == side2 || side2 == side3)
{
    console.log("The triangle is Isoceles")
}
else if(side1 != side2 || side1 != side3)
{
    console.log("The triangle is Scalene")
}