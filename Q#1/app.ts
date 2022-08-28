var num1: string | null =prompt("Enter First Number");
var num2: string | null =prompt("Enter Second Number");
var num_1:Number = Number(num1)
var num_2:Number = Number(num2)
console.log("number 1",num1);
console.log("number 2",num2);

if(num_1 > num_2)
{
    console.log("Number 1 is Greater");
}
else{
    console.log("Number 2 is Greater");
}
