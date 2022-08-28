var input1 : string | null = prompt ("Enter cooficient of x^2 ")
var input2 : string | null = prompt ("Enter cooficient of x ")
var input3 : string | null = prompt ("Enter constant ")
var a : number = Number(input1)
var b : number = Number(input2)
var c : number = Number(input3)
var root1:number;
var root2:number;
console.log("Cooficient of x^2 is ",a )
console.log("Cooficient of x is ",b )
console.log("Constant is ",c )
var disc : number = (b * b) - (4 * (a * c));
if (disc > 0)
{
    root1 = (-b + Math.sqrt(disc)) / (2 * a);
    root2 = (-b - Math.sqrt(disc)) / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else if(disc==0)
{
    root1 = -b / (2 * a);
    root2 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`)
}
else if(disc<0)
{
    root1 =-b / (2 * a)+ Math.sqrt(disc)
    root1 =-b / (2 * a)- Math.sqrt(disc)
}
else
{
    console.log("Values are not recognized")
}